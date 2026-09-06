import { Link } from "@tanstack/react-router";
import { footerNav } from "@/data/navigation";
import { site } from "@/data/site";
import { Logo } from "@/components/layout/logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-100/10 bg-ink-950 text-ink-300">
      <div className="wrap py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="eyebrow mb-5 text-almond-400">Company</p>
            <ul className="space-y-3">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="hover:text-ink-50">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-5 text-almond-400">Services</p>
            <ul className="space-y-3">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="hover:text-ink-50">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-5 text-almond-400">Solutions</p>
            <ul className="space-y-3">
              {footerNav.solutions.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="hover:text-ink-50">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-5 text-almond-400">Contact</p>
            <ul className="space-y-3">
              <li>
                <span className="block text-xs uppercase tracking-widest text-ink-500">
                  Phone
                </span>
                <a href={`tel:${site.phone}`} className="hover:text-ink-50">
                  {site.phone}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-widest text-ink-500">
                  Email
                </span>
                <a href={`mailto:${site.email}`} className="hover:text-ink-50">
                  {site.email}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-widest text-ink-500">
                  Address
                </span>
                {site.address}
              </li>
              <li>
                <span className="block text-xs uppercase tracking-widest text-ink-500">
                  Working hours
                </span>
                {site.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-ink-100/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Logo />
            <p className="mt-3 max-w-sm text-sm text-ink-500">{site.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link to="/privacy" className="hover:text-ink-50">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-ink-50">
              Terms
            </Link>
          </div>
        </div>
        <p className="mt-8 font-mono text-xs tracking-wide text-ink-600">
          © {year} {site.legalName}. Contact details are placeholders pending confirmation.
        </p>
      </div>
    </footer>
  );
}
