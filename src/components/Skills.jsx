import { useState } from "react";
import { cn } from "@/lib/utils";

  const skills = [
  // DevOps
  { name: "Linux Administration", level: 90, category: "devops" },
  { name: "Docker", level: 85, category: "devops" },
  { name: "Kubernetes", level: 75, category: "devops" },
  { name: "CI/CD Pipelines", level: 85, category: "devops" },
  { name: "Jenkins", level: 80, category: "devops" },
  { name: "GitHub Actions", level: 85, category: "devops" },
  { name: "Terraform", level: 70, category: "devops" },
  { name: "Ansible", level: 70, category: "devops" },

  // Cloud
  { name: "AWS", level: 80, category: "cloud" },
  { name: "Microsoft Azure", level: 65, category: "cloud" },
  { name: "Google Cloud", level: 60, category: "cloud" },
  { name: "Cloud Infrastructure", level: 80, category: "cloud" },

  // Security
  { name: "Cybersecurity", level: 80, category: "security" },
  { name: "Network Security", level: 75, category: "security" },
  { name: "System Hardening", level: 70, category: "security" },
  { name: "Identity & Access Management", level: 65, category: "security" },

  // Networking
  { name: "TCP/IP Networking", level: 80, category: "networking" },
  { name: "DNS & DHCP", level: 75, category: "networking" },
  { name: "Firewall Configuration", level: 70, category: "networking" },

  // Monitoring & Tools
  { name: "Prometheus", level: 65, category: "tools" },
  { name: "Grafana", level: 70, category: "tools" },
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Bash Scripting", level: 85, category: "tools" },
  { name: "Python", level: 75, category: "tools" },
];

const categories = ["all", "devops", "cloud", "security", "networking", "tools"];

export const SkillsSection = () => {
  const [ activeCategory, setActiveCategory ] = useState("all");

  const filteredSkills = skills.filter((skills) => activeCategory === "all" || skills.category === activeCategory
 );

  return (
    <section 
    id="skills" 
    className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gb-4 mb-12">
          {categories.map((category, key) => (
            <button 
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary hover:bg-secondary/90"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{width: skill.level + "%"}}
                />
              </div>
              <div className="text-right mt-2">
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )


}