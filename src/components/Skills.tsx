import { Card } from "@/components/ui/card";
import { Code2, Layers, Server, Box, Globe, Settings } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Code2,
      name: "Laravel",
      description: "Framework PHP modern untuk aplikasi web yang robust dan scalable",
      color: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-950/20"
    },
    {
      icon: Layers,
      name: "Frontend Development",
      description: "React, TypeScript, Tailwind CSS, dan modern web technologies",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      icon: Server,
      name: "Backend Development",
      description: "RESTful API, Database Design, dan server-side architecture",
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-950/20"
    },
    {
      icon: Box,
      name: "OOP",
      description: "Object-Oriented Programming dengan clean code principles",
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20"
    },
    {
      icon: Globe,
      name: "WordPress Development",
      description: "Custom themes, plugins, dan WooCommerce development",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/20"
    },
    {
      icon: Settings,
      name: "Cpanel",
      description: "Web hosting management dan deployment optimization",
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-950/20"
    }
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
            Keahlian Teknis
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center justify-center p-6 group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/40 transition-all duration-300" />
                  <div className="relative bg-card border border-border p-5 rounded-2xl group-hover:border-primary group-hover:shadow-glow transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-foreground text-center group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
