import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", sectionId: "hero" },
  { label: "About Us", sectionId: "about" },
  { label: "Industries", sectionId: "industries" },
  { label: "Our Partners", sectionId: "partners" },
  { label: "Contact Us", sectionId: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setOpen(false);

    if (location.pathname === "/") {
      if (sectionId === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      navigate("/");
      setTimeout(() => {
        if (sectionId === "hero") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 150);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        {/* Logo */}
        <div className="flex-1 flex justify-center md:justify-start">
          <a
            href="/"
            onClick={(e) => handleNavClick(e, "hero")}
            className="flex flex-col items-center gap-2 cursor-pointer"
          >
            <img src={logo} alt="PT Nova Sindo Raya" className="h-10 md:h-14 w-auto" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.sectionId}
              href={`#${link.sectionId}`}
              onClick={(e) => handleNavClick(e, link.sectionId)}
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <Button
            size="sm"
            variant="ocean"
            onClick={(e) => handleNavClick(e, "contact")}
          >
            Request Quote
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="flex-1 flex justify-end md:hidden">
          <button
            className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-800"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-200 overflow-hidden shadow-lg"
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.sectionId}
                  href={`#${link.sectionId}`}
                  onClick={(e) => handleNavClick(e, link.sectionId)}
                  className="py-3 px-4 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-100 rounded-md transition-colors min-h-[44px] flex items-center cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="ocean"
                className="mt-2"
                onClick={(e) => handleNavClick(e, "contact")}
              >
                Request Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
