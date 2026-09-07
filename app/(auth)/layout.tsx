import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { GraduationCap } from "lucide-react";
import { getSession } from "@/lib/session";

export default async function AuthLayout({ children }: { children: ReactNode }) {
  const session = await getSession();
  if (session) redirect("/dashboard");
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted/40 p-6">
      <div className="flex items-center gap-2">
        <GraduationCap className="size-7 text-primary" />
        <span className="text-xl font-semibold tracking-tight">learnrussian</span>
      </div>
      {children}
    </div>
  );
}
