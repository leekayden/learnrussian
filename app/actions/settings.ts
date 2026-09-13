"use server";

import { prisma } from "@/lib/prisma";
import { requireSession } from "@/lib/session";

export async function updateSettings(
  patch: {
    dailyGoalXp?: number;
    showStress?: boolean;
    showTranslitKeyboard?: boolean;
    unlockAll?: boolean;
    timezone?: string;
  },
): Promise<{ ok: true }> {
  const session = await requireSession();
  await prisma.lrProfile.update({
    where: { userId: session.user.id },
    data: patch,
  });
  return { ok: true };
}
