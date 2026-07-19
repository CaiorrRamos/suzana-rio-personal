import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { clsx } from "clsx";
import { useEffect, useState } from "react";
import logo from "../../assets/logo-sr.svg";
import { useNavbar } from "../../hooks/useNavbar";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
];

const mobileNavItems = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const { isScrolled } = useNavbar();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme === "dark" || (!savedTheme && prefersDark) ? "dark" : "light";

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem("theme", nextTheme);
  };

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="fixed left-0 right-0 top-3 z-50 px-4 sm:top-4"
    >
      <nav
        className={clsx(
          "mx-auto grid max-w-[1160px] grid-cols-[auto_1fr_auto] items-center gap-2 rounded-full border border-white/15 bg-[linear-gradient(100deg,#111835_0%,#111835_48%,#0261CE_100%)] shadow-[0_16px_30px_rgba(17,24,53,0.28)] backdrop-blur-2xl transition-all duration-300 md:grid-cols-[1fr_auto_1fr] md:gap-0",
          isScrolled ? "min-h-[58px] px-2.5 md:min-h-[64px] md:px-4" : "min-h-[64px] px-3 md:min-h-[76px] md:px-5",
        )}
      >
        <div className="hidden items-center gap-2 md:flex">
          {navItems.slice(0, 3).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-5 py-3.5 text-base font-medium text-white/78 transition hover:bg-primary hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a href="#inicio" aria-label="Suzana Rio" className="justify-self-start md:justify-self-center">
          <img src={logo} alt="Suzana Rio" className={clsx("w-auto transition-all duration-300", isScrolled ? "h-8 md:h-9" : "h-10 md:h-12")} />
        </a>

        <div className="flex min-w-0 items-center justify-center gap-0.5 md:hidden">
          {mobileNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-2 py-2 text-[0.68rem] font-semibold text-white/78 transition hover:bg-primary hover:text-white focus:outline-none focus-visible:bg-primary focus-visible:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center justify-end gap-2">
          <div className="hidden items-center gap-2 md:flex">
            {navItems.slice(3).map((item) => (
              <a key={item.href} href={item.href} className="rounded-full px-5 py-3.5 text-base font-medium text-white/82 transition hover:bg-primary hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
          <button
            type="button"
            aria-label="Alternar tema"
            aria-pressed={theme === "dark"}
            onClick={toggleTheme}
            className={clsx(
              "group flex h-10 w-[4.25rem] items-center rounded-full bg-dark px-1.5 transition hover:scale-[1.04] md:w-20 md:px-2",
              theme === "dark" ? "justify-start" : "justify-end",
            )}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary shadow-md transition">
              {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
            </span>
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
