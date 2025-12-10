import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Photo1 from "../assets/pht2.png"
import Photo2 from "../assets/pht1.png"
import Photo3 from "../assets/bookstore.png"

// --- Project Data (No Changes Needed Here, just adding the structure for context) ---
const projects = [
  {
    id: 1,
    title: "Resumind - AI Resume Analyzer",
    description: "A sleek React and Tailwind CSS web app that analyzes resumes and provides accurate ATS (Applicant Tracking System) scores instantly, significantly improving job application success rates.", // Enhanced description
    image: Photo1,
    tags: ["React", "TailwindCSS", "AI Integration", "Puter.js"], // Added an AI tag
    demoUrl: "#",
    githubUrl: "https://github.com/AKDev32/ai-resume-analyzer",
  },
  {
    id: 2,
    title: "DALL·E 2.0 - AI Image Generator",
    description:
      "A modern, full-stack AI image generation platform that creates unique, high-quality visuals from text prompts using advanced DALL·E API integration for creative output.", // Enhanced description
    image: Photo2,
    tags: ["React", "TailwindCSS", "Node.js", "DALL·E API"], // Added Node.js to emphasize full-stack
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Book Store - Full Stack E-commerce",
    description:
      "A robust, full-featured MERN Stack Book Store platform complete with secure user authentication, robust inventory management, and simulated payment processing via Stripe integration.", // Enhanced description
    image: Photo3,
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe API"], // Added Stripe API for impact
    demoUrl: "#",
    githubUrl: "",
  },
];
// --- End Project Data ---

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          <span className="text-primary"> Signature</span> Projects
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Showcasing my capability to deliver full-stack solutions, blending modern technology with a focus on performance, robust architecture, and exceptional user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              // Enhanced Card Styling: subtle border and stronger hover effect
              className="group bg-card rounded-xl overflow-hidden shadow-lg border border-border transition-all duration-300 transform hover:scale-[1.03] hover:shadow-2xl"
            >
              {/* Image Area with Zoom Effect */}
              <div className="h-52 overflow-hidden border-b border-border/70">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.1]" // Increased scale for more dramatic hover
                />
              </div>

              <div className="p-6">
                {/* Title */}
                <h3 className="text-2xl font-bold mb-2"> {project.title}</h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 min-h-16">
                  {project.description}
                </p>
                
                {/* Tags (moved after description, slightly cleaner look) */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-secondary/70 text-secondary-foreground rounded-full border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links (Styled Buttons) */}
                <div className="flex space-x-3 mt-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    // Primary button style for the Demo
                    className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-colors duration-300 shadow-md"
                  >
                    Demo <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    // Secondary button style for GitHub
                    className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full border border-border text-foreground hover:bg-secondary/70 transition-colors duration-300"
                  >
                    Code <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/AKDev32"
          >
            Explore All Projects on GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};