import { Briefcase } from "lucide-react";

interface PortfolioProject {
  title: string;
  description: string;
  technologies: string;
  link?: string;
}

const PortfolioSection = () => {
  const projects: PortfolioProject[] = [
    {
      title: "Elegant CV Showcase",
      description: "Modern, reszponzív CV oldal React és Tailwind CSS-sel készítve",
      technologies: "React, TypeScript, Tailwind CSS, Vite",
      link: "#"
    },
    {
      title: "E-commerce Platform",
      description: "Teljes körű e-commerce megoldás felhasználói és admin panellel",
      technologies: "React, Node.js, MongoDB, Stripe",
      link: "#"
    },
    {
      title: "Marketing Dashboard",
      description: "Valós idejű adatanalitika és riportgenerálás platform",
      technologies: "React, Chart.js, Firebase",
      link: "#"
    },
  ];

  return (
    <section className="bg-card rounded-2xl p-6 shadow-md">
      <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <div className="w-1 h-6 bg-primary rounded-full" />
        Portfólió
      </h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="flex gap-4 p-4 rounded-xl bg-background/50 hover:bg-background transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground text-sm">{project.title}</h3>
              <p className="text-muted-foreground text-xs mt-1">{project.description}</p>
              <p className="text-primary text-xs font-medium mt-2">{project.technologies}</p>
              {project.link && (
                <a 
                  href={project.link} 
                  className="text-primary hover:underline text-xs font-medium mt-2 inline-block"
                >
                  Megtekintés →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
