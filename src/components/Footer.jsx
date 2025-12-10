import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 px-4 relative bg-background/50 border-t border-border">
      <div className="container mx-auto max-w-5xl flex flex-wrap justify-between items-center">
        
        {/* Left Side: Copyright and Branding */}
        <p className="text-sm text-muted-foreground order-2 mt-4 sm:mt-0 sm:order-1">
          &copy; {currentYear} Aman Kumar. All rights reserved.
          {/* Optional: Add a simple link/credit if desired */}
          {/* <span className="ml-2">Built with React & Tailwind CSS.</span> */}
        </p>
        
        {/* Right Side: Scroll to Top Button */}
        <div className="order-1 w-full sm:w-auto sm:order-2 flex justify-center sm:justify-end">
          <a
            href="#hero"
            // Scroll-to-top button styling enhanced for visibility and polish
            className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-colors duration-300 shadow-md transform hover:scale-105"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};