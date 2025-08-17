import { navData } from "@/data/NavBarData";
import CommonBtn from "./custom/commonBtn";
import { useState, useEffect } from "react";

export default function Navbar() {
  const data = navData;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInvert, setIsInvert] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      console.log("SCROLLYY",window.scrollY)
      setIsScrolled(window.scrollY > 10);
      // SET to black on scroll greater then 1000
      setIsInvert(window.scrollY > 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 font-['Inter'] ${
        isScrolled ? "bg-white/10 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto relative">
        {/* Main navbar */}
        <div className="flex items-center justify-between m-4">
          {/* Logo section */}
          <div className="flex items-center gap-3">
            {data.logo && (
                <img
                src={!isInvert ? data.logo.imageBlack : data.logo.imageWhite}
                alt="logo"
                  className="w-30 md:w-38"
                />
            )}
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:block">
            <ul
              className={`flex items-center justify-center gap-6 font-medium ${
                isInvert ? "text-black" : "text-white"
              }`}
            >
              {data.navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.link}
                    className={`transition-colors duration-200 ${
                      isInvert ? "hover:text-black/60" : "hover:text-white/60"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop social icons and button */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {data.social.map(({icon, link}, index) => (
                <a
                  key={index}
                  href={link}
                  className={`transition-opacity hover:opacity-80 ${
                    isInvert ? "bg-black" : "bg-white/10"
                  } rounded-full p-1.5 flex items-center justify-center`}
                >
                  <img src={icon} alt={`social-${index}`} className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Button */}
{/* wrap this button with a link */}
        <a href={data.buttonContent.link} target="_blank" rel="noopener noreferrer">
            <CommonBtn
              className={"bg-blue-600 text-white rounded-full px-4 py-2 hover:cursor-pointer"}
              icon={data.buttonContent.icon}
              >
              {data.buttonContent.text}
            </CommonBtn>
        </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 cursor-pointer"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              } ${isInvert ? "bg-black" : "bg-white"}`}
            ></span>
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              } ${isInvert ? "bg-black" : "bg-white"}`}
            ></span>
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              } ${isInvert ? "bg-black" : "bg-white"}`}
            ></span>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden absolute mt-4 top-full left-0 right-0 bg-white/95 backdrop-blur-xl border border-white/20 shadow-lg transition-all duration-300 overflow-hidden z-50 ${
            isMobileMenuOpen ? "max-h-[450px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-4">
            <ul className="space-y-4">
              {data.navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.link}
                    className="block py-2 font-medium transition-colors duration-200 text-black hover:text-black/70"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            {/* Social Icons for mobile */}
            <div className="mt-4 pt-2 border-t border-gray-200/40">
              <div className="flex items-center gap-4 py-3">
                {data.social.map((socialItem, index) => (
                  <a
                    key={index}
                    href={socialItem.link}
                    className="transition-opacity hover:opacity-80 bg-black rounded-full p-1.5 flex items-center justify-center"
                  >
                    <img
                      src={socialItem.icon}
                      alt={`social-${index}`}
                      className="w-4 h-4 filter brightness-0 invert"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Button for mobile */}
            <div className="mt-2">
              <CommonBtn
                className="w-full bg-blue-600 text-white rounded-full px-4 py-2"
                icon={data.buttonContent.icon}
              >
                {data.buttonContent.text}
              </CommonBtn>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
