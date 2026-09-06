import type { ReactNode } from "react";
import { GraduationCap } from "lucide-react";

export default function AuthLayout({ children }: { children: ReactNode }) {
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
