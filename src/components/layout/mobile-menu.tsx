import { useEffect, useId, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { primaryNav } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex size-11 items-center justify-center rounded-sm text-ink-50"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
          <span
            className={cn(
              "block h-px w-full bg-current transition-transform duration-200",
              open && "translate-y-2 rotate-45",
            )}
          />
          <span className={cn("block h-px w-full bg-current", open && "opacity-0")} />
          <span
            className={cn(
              "block h-px w-full bg-current transition-transform duration-200",
              open && "-translate-y-2 -rotate-45",
            )}
          />
        </span>
      </button>
      {open ? (
        <div
          id={panelId}
          className="fixed inset-x-0 top-16 bottom-0 z-50 overflow-y-auto bg-ink-950 px-5 py-6"
        >
          <nav aria-label="Mobile">
            <ul className="space-y-1">
              {primaryNav.map((item) => (
                <li key={item.href} className="border-b border-ink-100/10">
                  {item.children ? (
                    <details className="group">
                      <summary className="min-h-12 cursor-pointer list-none py-3 text-base text-ink-50 marker:content-none [&::-webkit-details-marker]:hidden">
                        <span className="flex items-center justify-between">
                          {item.label}
                          <span
                            className="text-ink-400 transition-transform duration-200 group-open:rotate-45"
                            aria-hidden="true"
                          >
                            +
                          </span>
                        </span>
                      </summary>
                      <ul className="mb-4 space-y-1 pb-2 pl-1">
                        <li>
                          <Link
                            to={item.href}
                            className="block py-2 text-sm text-almond-300"
                          >
                            View all {item.label.toLowerCase()}
                          </Link>
                        </li>
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              to={child.href}
                              className="block py-2 text-sm text-ink-300 hover:text-ink-50"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex min-h-12 items-center text-base text-ink-50"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button to="/consulting" className="w-full">
                Request a Consultation
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
