// Navbar.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  // optional: close on Escape
  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && closeMenu();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <img src="/assets/logo.png" alt="Logo" />
        </div>

        {/* Desktop links */}
        <ul className="nav-links desktop">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#products">Our Products</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>

        {/* Toggle (mobile) */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <motion.span
            key={isOpen ? "close" : "open"}
            initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.18 }}
          >
            {isOpen ? "✕" : "☰"}
          </motion.span>
        </button>
      </div>

      {/* Mobile dropdown animation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* optional overlay */}
            <motion.div
              className="nav-overlay"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />

            <motion.ul
              className="nav-links mobile active"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About Us" },
                { href: "#products", label: "Our Products" },
                { href: "#contact", label: "Contact Us" },
              ].map((item) => (
                <motion.li
                  key={item.href}
                  initial={{ y: -8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -8, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <a href={item.href} onClick={closeMenu}>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}