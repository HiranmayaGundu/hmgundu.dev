"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MenuIcon from "./menu-icon";
import { useState } from "react";
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
    <nav className="hidden sm:block w-full py-4 z-40">
      <div className="max-w-200 my-0 mx-auto px-4 flex items-center justify-center sm:justify-start gap-24">
        <Link
          href="/"
          className={cn(
            "text-xl font-bold text-foreground",
            pathname === "/" ? "underline underline-offset-4" : "",
          )}
        >
          Hiranmaya Gundu
        </Link>
        <div className="hidden sm:flex items-center justify-between gap-8">
          <Link
            href="/about"
            className={cn(
              "text-xl font-bold text-foreground",
              pathname === "/about" ? "underline underline-offset-4" : "",
            )}
          >
            About
          </Link>
          <Link
            href="/blog"
            className={cn(
              "text-xl font-bold text-foreground",
              pathname === "/blog" ? "underline underline-offset-4" : "",
            )}
          >
            Blog
          </Link>
          <Link
            href="/references"
            className={cn(
              "text-xl font-bold text-foreground",
              pathname === "/references" ? "underline underline-offset-4" : "",
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
  const toggler = () => setMenu((m) => !m);
  const pathname = usePathname();
  return (
    <nav className="sm:hidden w-full h-full p-4">
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex items-center justify-between relative z-120">
          <Button
            variant="outline"
            size="icon"
            onClick={toggler}
            aria-expanded={menu}
            aria-label="Toggle menu"
          >
            <MenuIcon isOpened={menu} height="30" width="30" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <ModeToggle />
        </div>
      </div>
      {menu && (
        <div className="fixed inset-0 z-110 pt-24 px-4 backdrop-blur-md">
          {/* pl-1.5 lines links up with the hamburger icon above (button inset) */}
          <div className="flex flex-col gap-4 items-start text-left pl-1.5">
            <Link
              href="/"
              className={cn(
                "text-xl font-bold text-foreground",
                pathname === "/" ? "underline underline-offset-4" : "",
              )}
              onClick={toggler}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={cn(
                "text-xl font-bold text-foreground",
                pathname === "/about" ? "underline underline-offset-4" : "",
              )}
              onClick={toggler}
            >
              About
            </Link>
            <Link
              href="/blog"
              className={cn(
                "text-xl font-bold text-foreground",
                pathname === "/blog" ? "underline underline-offset-4" : "",
              )}
              onClick={toggler}
            >
              Blog
            </Link>
            <Link
              href="/references"
              className={cn(
                "text-xl font-bold text-foreground",
                pathname === "/references"
                  ? "underline underline-offset-4"
                  : "",
              )}
              onClick={toggler}
            >
              References
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
