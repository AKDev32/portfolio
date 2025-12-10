import { Briefcase, Code, User, Rocket, Zap, BookOpen } from "lucide-react"; // Added new icons for variety
import { cn } from "@/lib/utils"; // Assuming you have a cn utility

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Profile & Focus</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Left Column: Personal Summary and Photo */}
          <div className="md:col-span-5 flex flex-col items-center">
            {/* Professional Photo Placeholder */}
            <div className="w-48 h-48 mb-8 rounded-full overflow-hidden shadow-2xl border-4 border-primary/50 bg-secondary/70 flex items-center justify-center">
              {/* Replace this div with your actual <img> tag for your headshot */}
              <User className="w-20 h-20 text-primary opacity-60" />
            </div>

            <h3 className="text-2xl font-bold text-center mb-4">
              Results-Driven <span className="text-primary">Developer</span>
            </h3>

            <p className="text-center text-muted-foreground max-w-sm mx-auto">
              I build full-stack web applications using the MERN stack, focusing on clean, maintainable code and performant, user-focused experiences. I enjoy creating responsive interfaces and reliable backends that scale. 
              As an aspiring Software Development Engineer, I consistently practice problem- solving on platforms like LeetCode to strengthen my DSA skills. Along with full-stack development, I also have a growing interest in Artificial Intelligence and love exploring how AI can enhance modern web applications.
              </p>

            <div className="flex justify-center pt-8">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Column: Key Focus Areas (Highlights) */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1: Full Stack Expertise */}
            <FocusCard
              icon={Code}
              title="Full Stack MERN Expertise"
              description="Proficient in designing and deploying end-to-end applications using React, Node.js, Express, and MongoDB/MySQL."
            />

            {/* Card 2: Core CS & Problem Solving */}
            <FocusCard
              icon={Zap}
              title="Core CS & Algorithm Design"
              description="Specialized in Data Structures & Algorithms (DSA) and fundamental concepts (OS, Networking) to ensure efficient, optimized code."
            />

            {/* Card 3: Performance & Architecture */}
            <FocusCard
              icon={Rocket}
              title="Scalable Architecture"
              description="Committed to architecting clean, maintainable systems that prioritize performance, user experience, and future scalability."
            />
            
            {/* Card 4: Tech Advocacy & Creation */}
            <FocusCard
              icon={BookOpen}
              title="Tech Content Creator"
              description="Creating educational content (YouTube/Blog) to simplify complex development topics and empower the next generation of developers."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// --- New Helper Component for Cleaner Card Rendering ---

const FocusCard = ({ icon: Icon, title, description }) => (
    <div 
        className={cn(
            "p-6 rounded-xl shadow-lg border border-border bg-card/70 transition-all duration-300", 
            "card-hover" // Use your custom hover class
        )}
    >
      <div className="flex flex-col h-full">
        <div className="p-3 rounded-xl bg-primary/10 mb-4 self-start">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        
        <h4 className="font-bold text-lg mb-2"> {title} </h4>
        <p className="text-sm text-muted-foreground grow">
          {description}
        </p>
      </div>
    </div>
);