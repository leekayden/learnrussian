"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  BookOpen,
  Flame,
  GraduationCap,
  LayoutDashboard,
  Library,
  LineChart,
  LogOut,
  Settings,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { authClient, signOut } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const NAV = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/learn", label: "Learn", icon: BookOpen },
  { href: "/review", label: "Review", icon: Sparkles },
  { href: "/practice", label: "Practice", icon: GraduationCap },
  { href: "/dictionary", label: "Dictionary", icon: Library },
  { href: "/progress", label: "Progress", icon: LineChart },
] as const;

export function AppShell({
  children,
  user,
  streak,
}: {
  children: React.ReactNode;
  user: { name: string; email: string };
  streak: number;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = authClient.useSession();

  async function onSignOut() {
    await signOut();
    toast.success("Signed out");
    router.push("/login");
    router.refresh();
  }

  const initials = (user.name || user.email)
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="flex min-h-svh flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-1 px-4">
          <Link href="/dashboard" className="mr-4 flex items-center gap-2">
            <GraduationCap className="size-5 text-primary" />
            <span className="font-semibold tracking-tight">learnrussian</span>
          </Link>
          <nav className="flex flex-1 items-center gap-1 overflow-x-auto">
            {NAV.map(({ href, label, icon: Icon }) => {
              const active = pathname === href || pathname.startsWith(href + "/");
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm whitespace-nowrap",
                    active
                      ? "bg-primary/10 font-medium text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  <Icon className="size-4" />
                  {label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <span
              className="flex items-center gap-1 rounded-full bg-orange-500/10 px-2.5 py-1 text-xs font-medium text-orange-600 dark:text-orange-400"
              title="Streak: days in a row with any practice"
            >
              <Flame className="size-3.5" />
              {streak}
            </span>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button variant="ghost" size="icon-sm" className="rounded-full" />
                }
              >
                <Avatar className="size-7">
                  <AvatarFallback className="text-xs">{initials}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="text-sm font-medium">{session?.user?.name ?? user.name}</div>
                  <div className="truncate text-xs font-normal text-muted-foreground">
                    {user.email}
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem render={<Link href="/settings" />}>
                  <Settings className="size-4" /> Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={onSignOut}>
                  <LogOut className="size-4" /> Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6">{children}</main>
      <footer className="border-t py-4 text-center text-xs text-muted-foreground">
        «Медленно, но верно» — slowly but surely.
      </footer>
    </div>
  );
}
