import { Briefcase, ArrowRight, Calendar, MapPin } from "lucide-react"; // Added Calendar and MapPin for detail

const experiences = [
  {
    id: 1,
    role: "Tech Content Creator",
    company: "YouTube",
    duration: "Nov 2025 - Present",
    location: "Remote/Online", // Added location for professionalism
    description:
      "Produced and published engaging educational content focused on advanced Data Structures & Algorithms (DSA), the MERN Stack, and core programming principles, fostering a community of learners.",
    tags: ["DSA", "MERN Stack", "Content Creation", "Public Speaking"],
  },
  {
    id: 2,
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code",
    duration: "June 2025 - Nov 2025",
    location: "Virtual",
    description:
      "Actively contributed to multiple high-impact open-source repositories. Key responsibilities included debugging critical issues, implementing new developer-centric features, and participating in code reviews.",
    tags: ["Open Source", "Git/GitHub", "Collaboration", "Code Review"],
  },
  {
    id: 3,
    role: "Full Stack MERN Trainee",
    company: "Excellence Technology",
    duration: "June 2025 - Aug 2025",
    location: "New Delhi, India", // Example location
    description:
      "Developed and optimized full-stack web applications, focusing on scalable backend services (Node/Express) and responsive, modern front-ends (React/TailwindCSS). Gained practical experience in database integration (MongoDB).",
    tags: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
  },
];

export const ExperienceSection = () => {
  return (
    <section
      id="experiences"
      className="py-24 px-4 relative scroll-mt-20 bg-secondary/30" // Added light background for contrast
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Professional <span className="text-primary">Journey</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A detailed timeline of my roles, major contributions, and the technologies utilized throughout my development career.
        </p>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-border transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`mb-8 flex w-full ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <div className="relative md:w-1/2 md:p-4">
                {/* Timeline Dot/Marker */}
                <div className="absolute -left-[1.3rem] top-4 md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-primary/20 border-4 border-primary/50 flex items-center justify-center z-10">
                  <Briefcase className="w-3 h-3 text-primary" />
                </div>

                {/* Experience Card */}
                <div
                  className={`bg-card p-6 rounded-xl shadow-lg border border-border card-hover transition-all duration-300 ${
                    index % 2 === 0 ? "ml-12 md:ml-0 md:text-right" : "ml-12 md:text-left"
                  }`}
                >
                  <h3 className="text-xl font-bold text-primary mb-1">{exp.role}</h3>
                  <h4 className="text-md font-semibold mb-3">{exp.company}</h4>

                  {/* Metadata (Duration and Location) */}
                  <div className={`flex items-center gap-4 text-sm text-muted-foreground mb-4 ${
                      index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                  }`}>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>

                  <p className="text-sm text-foreground mb-4">
                    {exp.description}
                  </p>

                  {/* Tags */}
                  <div className={`flex flex-wrap gap-2 mt-3 ${
                      index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                  }`}>
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-secondary/70 text-secondary-foreground rounded-full border border-border shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-16">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/aman32"
          >
            View Full Profile on LinkedIn <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};