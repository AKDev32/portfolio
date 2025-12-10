import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experiences" }, // Renamed from 'Experiences' for brevity
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // State to track the active section (for professional highlighting)
  const [activeHref, setActiveHref] = useState("#hero");

  // --- Scroll Detection Logic ---
  useEffect(() => {
    const handleScroll = () => {
      // Use window.scrollY instead of window.screenY
      setIsScrolled(window.scrollY > 10);
      
      // Basic Active Link Logic (You should replace this with a proper Intersection Observer hook)
      // For demonstration, we'll check hash changes or use a simple hack:
      const currentScrollY = window.scrollY;
      let currentActive = navItems[0].href;
      
      navItems.forEach(item => {
        const section = document.querySelector(item.href);
        if (section) {
            // Check if the current scroll position is past the section start
            // and apply a small offset (e.g., -100px)
            if (currentScrollY >= section.offsetTop - 150) { 
                currentActive = item.href;
            }
        }
      });
      setActiveHref(currentActive);
    };

    // Initialize state on mount
    handleScroll(); 
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handler for navigation item click
  const handleNavItemClick = (href) => {
    setActiveHref(href);
    setIsMenuOpen(false);
    // Let the browser handle the smooth scroll
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300 border-b border-transparent",
        // Enhanced scroll class: slight border and deeper shadow
        isScrolled 
          ? "py-3 bg-background/95 backdrop-blur-sm shadow-xl border-border/50" 
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo/Brand (Refined Text) */}
        <a
          className="text-2xl font-extrabold text-foreground flex items-center"
          href="#hero"
        >
          {/* Subtle use of primary color for branding */}
          Aman <span className="text-primary">Kumar</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              onClick={(e) => {
                e.preventDefault(); 
                handleNavItemClick(item.href);
              }}
              className={cn(
                "font-medium relative pb-1 transition-colors duration-300",
                activeHref === item.href
                  ? "text-primary after:scale-x-100 after:bg-primary" // Active state
                  : "text-foreground/80 hover:text-primary", // Inactive state
                
                // Underline effect for professional desktop navigation
                "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-bottom-left after:transition-transform after:duration-300 hover:after:scale-x-50"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50 rounded-md hover:bg-secondary/50 transition-colors"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-opacity duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-10 text-2xl font-semibold">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                onClick={(e) => {
                    e.preventDefault(); // Prevent default link action before transition
                    handleNavItemClick(item.href);
                }}
                className={cn(
                  "text-center transition-colors duration-300",
                  activeHref === item.href
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};