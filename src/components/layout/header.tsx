import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { primaryNav } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";
import { MobileMenu } from "@/components/layout/mobile-menu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-[background-color,border-color] duration-200",
        scrolled
          ? "border-ink-100/10 bg-ink-950/95 backdrop-blur-md"
          : "border-transparent bg-ink-950",
      )}
    >
      <div className="wrap flex h-16 items-center justify-between gap-6 lg:h-[4.25rem]">
        <Logo />
        <nav aria-label="Primary" className="hidden lg:flex lg:items-center lg:gap-1">
          {primaryNav.map((item) =>
            item.children ? (
              <MegaItem
                key={item.href}
                item={item}
                active={pathname === item.href || pathname.startsWith(`${item.href}/`)}
              />
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "rounded-sm px-3 py-2 text-sm text-ink-200 transition-colors duration-150 hover:text-ink-50",
                  pathname === item.href && "text-ink-50",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="flex items-center gap-3">
          <Button to="/consulting" className="hidden sm:inline-flex" variant="primary">
            Request a Consultation
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function MegaItem({
  item,
  active,
}: {
  item: (typeof primaryNav)[number];
  active: boolean;
}) {
  return (
    <div className="group relative">
      <Link
        to={item.href}
        className={cn(
          "inline-flex items-center gap-1 rounded-sm px-3 py-2 text-sm text-ink-200 transition-colors duration-150 hover:text-ink-50 group-hover:text-ink-50 group-focus-within:text-ink-50",
          active && "text-ink-50",
        )}
        aria-haspopup="true"
      >
        {item.label}
        <span aria-hidden="true" className="text-xs">
          ▾
        </span>
      </Link>
      <div className="invisible absolute left-0 top-full z-50 w-[min(36rem,calc(100vw-4rem))] border border-ink-100/10 bg-ink-900 pt-1 opacity-0 shadow-hairline transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="grid gap-px p-2 sm:grid-cols-2">
          {item.children?.map((child) => (
            <Link
              key={child.href}
              to={child.href}
              className="rounded-sm px-3 py-3 transition-colors duration-150 hover:bg-ink-800"
            >
              <span className="block text-sm text-ink-50">{child.label}</span>
              {child.description ? (
                <span className="mt-1 line-clamp-2 block text-xs leading-relaxed text-ink-400">
                  {child.description}
                </span>
              ) : null}
            </Link>
          ))}
        </div>
        <div className="border-t border-ink-100/10 px-5 py-3">
          <Link
            to={item.href}
            className="text-xs tracking-wide text-almond-400 hover:text-almond-300"
          >
            View all {item.label.toLowerCase()}
          </Link>
        </div>
      </div>
    </div>
  );
}
