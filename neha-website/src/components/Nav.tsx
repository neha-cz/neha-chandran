import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "home" },
  { to: "/work", label: "work" },
  { to: "/recs", label: "recs" },
  { to: "/thoughts", label: "thoughts" },
] as const;

export default function Nav() {
  return (
    <nav
      className="flex items-center justify-start gap-2.5 text-[0.98rem] tracking-wide md:gap-3 md:text-[1.05rem]"
      aria-label="Primary"
    >
      {links.map((link, index) => (
        <span key={link.to} className="flex items-center gap-2.5 md:gap-3">
          {index > 0 && (
            <span className="select-none text-[#f4f5ff]/70" aria-hidden>
              |
            </span>
          )}
          <NavLink
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              cn(
                "cursor-pointer transition-colors duration-200 [text-shadow:0_1px_8px_rgba(24,22,40,0.45)]",
                isActive
                  ? "text-white"
                  : "text-[#f4f5ff]/85 hover:text-white"
              )
            }
          >
            {link.label}
          </NavLink>
        </span>
      ))}
    </nav>
  );
}
