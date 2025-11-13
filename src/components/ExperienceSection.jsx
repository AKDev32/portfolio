import { Briefcase, ArrowRight } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Tech Content Creator",
    company: "You Tube",
    duration: "Nov 2025 - Present",
    description:
      "Create educational content on DSA, MERN Stack, and programming concepts to help learners build strong technical skills.",
    tags: ["Programming Languages", "Data Structure & Algorithms", "MERN Stack Projects"],
  },
  {
    id: 2,
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code",
    duration: "June 2025 - Nov 2025",
    description:
      "Contributed to open-source repositories, fixed bugs, and implemented new features for developer tools and educational projects.",
    tags: ["Open Source", "GitHub", "Collaboration"],
  },
  {
    id: 3,
    role: "MERN Trainee",
    company: "Excellence Technology",
    duration: "June 2025 - Aug 2025",
    description:
      "Developed and optimized full-stack web applications using React, Node.js, and MongoDB. Collaborated with the design team to build responsive and user-friendly interfaces.",
    tags: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
  },
];

export const ExperienceSection = () => {
  return (
    <section
      id="experiences"
      className="py-24 px-4 relative scroll-mt-20" // <-- ensures correct scroll offset
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Professional <span className="text-primary">Experience</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here’s a summary of my professional journey, showcasing my roles,
          responsibilities, and the technologies I’ve worked with.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-secondary rounded-full">
                  <Briefcase className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground">
                    {exp.company} • {exp.duration}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-4">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {exp.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://linkedin.com/in/aman32"
          >
            View on LinkedIn <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
