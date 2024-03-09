"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MenuIcon from "./menu-icon";
import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export function Nav() {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
}

function DesktopNav() {
  const pathname = usePathname();
  return (
    <nav className="hidden sm:block w-full p-4 z-40">
      <div className="max-w-[800px] my-0 mx-auto flex items-center justify-center sm:justify-start gap-24">
        <Link
          href="/"
          className={cn(
            "text-xl font-bold",
            pathname === "/" ? "text" : "text-muted-foreground"
          )}
        >
          Hiranmaya Gundu
        </Link>
        <div className="hidden sm:flex items-center justify-between gap-8">
          <Link
            href="/about"
            className={cn(
              "text-xl font-bold",
              pathname === "/about" ? "text" : "text-muted-foreground"
            )}
          >
            About
          </Link>
          <Link
            href="/blog"
            className={cn(
              "text-xl font-bold",
              pathname === "/blog" ? "text" : "text-muted-foreground"
            )}
          >
            Blog
          </Link>
          <Link
            href="/references"
            className={cn(
              "text-xl font-bold",
              pathname === "/references" ? "text" : "text-muted-foreground"
            )}
          >
            References
          </Link>
        </div>
        <div className="hidden sm:flex">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

function MobileNav() {
  const [menu, setMenu] = useState(false);
  const toggler = useCallback(() => setMenu((menu) => !menu), []);
  const pathname = usePathname();
  return (
    <nav className="sm:hidden w-full h-full p-4">
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex justify-between">
          <Button variant="outline" size="icon" onClick={toggler}>
            <MenuIcon isOpened={menu} height="30" width="30" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <Link
            href="/"
            className={cn(
              "text-2xl font-bold",
              pathname === "/" ? "text" : "text-muted-foreground"
            )}
          >
            Hiranmaya Gundu
          </Link>
          <ModeToggle />
        </div>
        <div className={cn(menu ? "block" : "hidden")}>
          <div className="flex flex-col gap-4 items-center">
            <Link
              href="/about"
              className={cn(
                "text-2xl font-bold",
                pathname === "/about" ? "text" : "text-muted-foreground"
              )}
              onClick={toggler}
            >
              About
            </Link>
            <Link
              href="/blog"
              className={cn(
                "text-2xl font-bold",
                pathname === "/blog" ? "text" : "text-muted-foreground"
              )}
              onClick={toggler}
            >
              Blog
            </Link>
            <Link
              href="/references"
              className={cn(
                "text-2xl font-bold",
                pathname === "/references" ? "text" : "text-muted-foreground"
              )}
              onClick={toggler}
            >
              References
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
