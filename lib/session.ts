import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function getSession() {
  return auth.api.getSession({ headers: await headers() });
}

export async function requireSession() {
  const session = await getSession();
  if (!session) redirect("/login");
  return session;
}

/** The session's user plus their (auto-created) learner profile. */
export async function requireUser() {
  const session = await requireSession();
  let profile = await prisma.lrProfile.findUnique({
    where: { userId: session.user.id },
  });
  if (!profile) {
    // Create may race with a parallel render of the same layout; on a
    // unique violation the winner's row is simply re-read.
    profile = await prisma.lrProfile
      .create({ data: { userId: session.user.id } })
      .catch(async (error: { code?: string }) => {
        if (error.code === "P2002") {
          return prisma.lrProfile.findUnique({ where: { userId: session.user.id } });
        }
        throw error;
      });
    if (!profile) throw new Error("Failed to create learner profile");
  }
  return { ...session, profile };
}
