import { useState } from "react";
import { cn } from "@/lib/utils";
import htmlLogo from "../assets/html.svg";
import CSSLogo from "../assets/css.svg";
import JSLogo from "../assets/js.svg";
import ReactLogo from "../assets/react.svg";
import TailWindCSSLogo from "../assets/tcss.svg";
import NodeLogo from "../assets/nodejs.svg";
import ExpressLogo from "../assets/express.svg";
import MongodbLogo from "../assets/mongodb.svg";
import MYSQLLogo from "../assets/mysql.svg";
import GitLogo from "../assets/git.svg";
import FigmaLogo from "../assets/figma.svg";
import VSLogo from "../assets/vs.svg";
import PostmanLogo from "../assets/postman.svg";
import DSALogo from "../assets/dsa.png";
import OOPLogo from "../assets/OOP.svg.png";
import OSLogo from "../assets/os.jpg";
import CNLogo from "../assets/cn.png";
import DBMSLogo from "../assets/dbms.png";

// --- START: Updated Skills Data (Use your actual logo paths/components) ---
const skills = [
  // Frontend
  // *** Replace the 'logo' string with your actual image path or icon component ***
  { name: "HTML", category: "frontend", logo: htmlLogo },
  { name: "CSS", category: "frontend", logo: CSSLogo },
  { name: "JavaScript", category: "frontend", logo: JSLogo },
  { name: "React", category: "frontend", logo: ReactLogo },
  { name: "Tailwind CSS", category: "frontend", logo: TailWindCSSLogo },

  // Backend
  { name: "Node.js", category: "backend", logo: NodeLogo },
  { name: "Express", category: "backend", logo: ExpressLogo },
  { name: "MongoDB", category: "backend", logo: MongodbLogo },
  { name: "MySQL", category: "backend", logo: MYSQLLogo },

  // Tools
  { name: "Git/GitHub", category: "tools", logo: GitLogo },
  { name: "Figma", category: "tools", logo: FigmaLogo },
  { name: "VS Code", category: "tools", logo: VSLogo },
  { name: "Postman" , category: "tools", logo: PostmanLogo },

  // Core CS
  { name: "DSA", category: "Core CS", logo: DSALogo },
  { name: "OOP", category: "Core CS", logo: OOPLogo },
  { name: "Operating System", category: "Core CS", logo: OSLogo },
  { name: "Computer Network", category: "Core CS", logo: CNLogo },
  { name: "DBMS", category: "Core CS", logo: DBMSLogo },
];
// --- END: Updated Skills Data ---

const categories = ["all", "frontend", "backend", "tools", "Core CS"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Expertise</span>
        </h2>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize text-sm font-medium",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-foreground hover:bg-secondary/80 border border-border"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              // Card styling for a clean, professional icon display
              className="bg-card p-6 rounded-xl shadow-md card-hover flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:scale-[1.03] hover:shadow-xl border border-border"
            >
              {/* Skill Logo/Icon Area */}
              <div className="mb-4">
                {/* * IMPORTANT: Replace the 'img' tag below with an actual 
                  * <img src={skill.logo} /> tag or an Icon component 
                  * (e.g., <FaReact size={48} className="text-blue-500" />)
                */}
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                   {/* Placeholder for the actual logo image/component */}
                   <img 
                      src={skill.logo} 
                      alt={`${skill.name} Logo`} 
                      className="w-full h-full object-contain"
                      // Example: You might want to use different icons sizes/styles
                      // based on the icon source.
                   />
                </div>
              </div>

              {/* Skill Name */}
              <h3 className="font-semibold text-base md:text-lg whitespace-nowrap"> 
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};