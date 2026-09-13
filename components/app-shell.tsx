"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  BookOpen,
  Flame,
  GraduationCap,
  LayoutDashboard,
  Library,
  LineChart,
  LogOut,
  PencilLine,
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
  { href: "/handwriting", label: "Writing", icon: PencilLine },
  { href: "/dictionary", label: "Dictionary", icon: Library },
  { href: "/progress", label: "Progress", icon: LineChart },
] as const;

type PillBox = { left: number; top: number; width: number; height: number };

/** Longest-prefix match so /learn/a2/u01 highlights "Learn". */
function activeNavHref(pathname: string): string | null {
  return (
    NAV.filter((l) => pathname === l.href || pathname.startsWith(l.href + "/")).sort(
      (a, b) => b.href.length - a.href.length,
    )[0]?.href ?? null
  );
}

/**
 * Nav links with a sliding "pill" behind the active item. The pill is an
 * absolutely-positioned box measured from the active link's offsets; because
 * left/top/width/height all transition together, it glides between items as
 * you move between pages.
 */
function NavPillLinks({ pathname, className, linkClassName }: {
  pathname: string;
  className?: string;
  linkClassName?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pill, setPill] = useState<PillBox | null>(null);
  const activeHref = activeNavHref(pathname);

  useLayoutEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      const el = container?.querySelector<HTMLElement>(
        `[data-nav-href="${activeHref}"]`,
      );
      if (!container || !activeHref || !el) {
        setPill(null);
        return;
      }
      setPill({
        left: el.offsetLeft,
        top: el.offsetTop,
        width: el.offsetWidth,
        height: el.offsetHeight,
      });
    };
    measure();

    // Keep the active item visible on narrow screens.
    const container = containerRef.current;
    const el = container?.querySelector<HTMLElement>(`[data-nav-href="${activeHref}"]`);
    if (container && el) {
      const target = el.offsetLeft - container.clientWidth / 2 + el.offsetWidth / 2;
      if (target > 0) container.scrollTo({ left: target });
    }

    const ro = new ResizeObserver(measure);
    if (container) ro.observe(container);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [activeHref, pathname]);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute rounded-md bg-primary/10 transition-[left,top,width,height] duration-300 ease-out",
          pill ? "opacity-100" : "opacity-0",
        )}
        style={
          pill
            ? { left: pill.left, top: pill.top, width: pill.width, height: pill.height }
            : undefined
        }
      />
      {NAV.map(({ href, label, icon: Icon }) => {
        const active = activeHref === href;
        return (
          <Link
            key={href}
            href={href}
            data-nav-href={href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "relative z-10 flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm whitespace-nowrap transition-colors",
              active
                ? "font-medium text-primary"
                : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
              linkClassName,
            )}
          >
            <Icon className="size-4" />
            {label}
          </Link>
        );
      })}
    </div>
  );
}

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
          <NavPillLinks
            pathname={pathname}
            className="flex flex-1 items-center gap-1 overflow-x-auto"
          />
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
                  <Button variant="ghost" size="icon-sm" className="rounded-full" aria-label="Profile menu" />
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
