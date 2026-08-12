import { useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
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
    <footer className="bg-slate-900 text-white py-12 px-4 border-t border-slate-800">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <a
              href="/"
              onClick={(e) => handleNavClick(e, "hero")}
              className="inline-block mb-3 cursor-pointer"
            >
              <img src={logo} alt="PT Nova Sindo Raya" className="h-12 w-auto brightness-0 invert" />
            </a>
            <p className="text-sm text-slate-400 leading-relaxed">
              High-quality industrial coating and chemical solutions for various industry sectors.
            </p>
          </div>
          <div></div>
          <div>
            <h4 className="font-heading font-semibold text-white mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, "about")}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#industries"
                  onClick={(e) => handleNavClick(e, "industries")}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Industries
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
        <div className="border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} PT Nova Sindo Raya. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
