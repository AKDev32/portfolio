import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      // Ensure section takes full viewport height and centers content
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24" // Added pt-24 for padding below fixed navbar
    >
      <div className="container max-w-5xl mx-auto text-center z-10">
        
        {/* Placeholder for Professional Illustration/Avatar */}
        <div className="mb-6 opacity-0 animate-fade-in">
             {/* Replace this div with a professional 3D avatar, illustration, or a stylized icon/logo */}
             <div className="mx-auto w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/10 border-4 border-primary/20 flex items-center justify-center mb-4 shadow-xl">
                 {/* Placeholder for a professional image component */}
                 <span className="text-4xl md:text-5xl text-primary font-bold">AK</span>
             </div>
        </div>


        <div className="space-y-6">
          
          {/* Tagline/Role */}
          <h2 className="text-xl md:text-2xl font-medium text-primary mb-4 opacity-0 animate-fade-in-delay-1">
             SOFTWARE DEVELOPMENT ENGINEER ASPIRANT
          </h2>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight">
            <span className="opacity-0 animate-fade-in-delay-2"> Hi, I'm </span>
            <span className="text-foreground opacity-0 animate-fade-in-delay-3">
              {" "}
              Aman Kumar
            </span>
            <span className="text-gradient block mt-2 md:inline ml-0 md:ml-4 opacity-0 animate-fade-in-delay-4">
              a Full Stack MERN Developer
            </span>
          </h1>

          {/* Subtext/Mission Statement */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto pt-4 opacity-0 animate-fade-in-delay-5">
            I specialize in building **high-performance, scalable, and user-centric web applications**. My focus is on leveraging modern MERN technologies to transform complex concepts into clean, efficient digital solutions.
          </p>

          {/* Call to Action */}
          <div className="pt-8 opacity-0 animate-fade-in-delay-6">
            <a href="#projects" className="cosmic-button">
              Explore My Projects
            </a>
            {/* Optional secondary button for CV */}
             <a href="#contact" className="ml-4 px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 font-semibold">
                Get In Touch
             </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a 
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce group transition-colors duration-300"
      >
        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors mb-1"> Explore </span>
        <ArrowDown className="h-6 w-6 text-primary group-hover:text-primary/80" />
      </a>
    </section>
  );
};