"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { LockOpen } from "lucide-react";
import { updateSettings } from "@/app/actions/settings";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

/**
 * Inline "unlock everything" switch shown on Learn pages, next to the same
 * setting in /settings. Saving refreshes the server components so lock
 * badges update immediately.
 */
export function UnlockAllToggle({
  initial,
  className,
}: {
  initial: boolean;
  className?: string;
}) {
  const [on, setOn] = useState(initial);
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  async function toggle(next: boolean) {
    setOn(next);
    const r = await updateSettings({ unlockAll: next });
    if (r.ok) {
      toast.success(next ? "All lessons unlocked" : "Lessons follow your progress again");
      startTransition(() => router.refresh());
    } else {
      setOn(!next);
    }
  }

  return (
    <label
      className={cn(
        "flex items-center gap-3 rounded-lg border bg-card px-4 py-3 transition-colors",
        pending && "opacity-70",
        className,
      )}
    >
      <LockOpen className="size-4 shrink-0 text-muted-foreground" />
      <span className="min-w-0">
        <span className="block text-sm font-medium">Unlock all lessons</span>
        <span className="block text-xs text-muted-foreground">
          Open every level, lesson and test — browse freely, locks come back when turned off
        </span>
      </span>
      <Switch checked={on} onCheckedChange={toggle} className="ml-auto" />
    </label>
  );
}
