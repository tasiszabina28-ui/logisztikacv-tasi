import { ExternalLink, PlayCircle, FileSpreadsheet, Image as ImageIcon, Presentation, Smartphone } from "lucide-react";

interface PortfolioProject {
  title: string;
  category: string;
  description: string;
  link?: string;
  image?: string; // Ide jön majd a kép URL-je (pl. "/excel-screen.jpg")
  tags: string[];
  icon: React.ElementType; // Ikon, ha nincs kép
}

const projects: PortfolioProject[] = [
  {
    title: "Prezentációk, egyéb projektek",
    category: "Marketing, Kereskedelem, Beszerzés",
    description: "Deciem piaci elemzés és Unicum kereskedelmi stratégia, költségcsökkentés és döntéselőkészítés Excel modellezéssel, Figyelemfelkeltő 'One-pager' Opel Corsa értékesítési anyag.",
    image: "/prezi-borito-1.jpg", // Cseréld le a saját képedre!
    link: "https://drive.google.com/drive/folders/1oFEzPhNzDHii4ORk8MagDpI5PfUuAVN2?usp=drive_link", 
    tags: ["Marketing","Piackutatás", "PowerPoint", "Kereskedelem", "Beszerzés", "Excel", "Canva"],
    icon: Presentation
  },
  {
    title: "CherryOnTop Webalkalmazás",
    category: "UI/UX design, Webfejlesztés",
    description: "Tanulást segítő applikáció koncepció. Interaktív prototípus és landing page terv.",
    image: "/app-mockup.jpg", 
    link: "https://cherryontopthestudyapp.vercel.app/", 
    tags: ["UI/UX Design", "App Concept"],
    icon: Smartphone
  },
 
];

const PortfolioSection = () => {
  return (
    <section className="bg-card rounded-2xl p-6 shadow-md">
      <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <div className="w-1 h-6 bg-primary rounded-full" />
        Portfólió
      </h2>
      
      {/* Itt kezdődik a RÁCS (Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="flex flex-col bg-background/50 rounded-xl overflow-hidden border border-border/50 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
          >
            {/* KÉP HELYE - Felső rész */}
            <div className="h-48 w-full bg-muted/30 relative overflow-hidden group-hover:opacity-90 transition-opacity">
              {project.image ? (
                // Ha van kép beállítva:
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                // Ha nincs kép, ez a "placeholder" jelenik meg:
                <div className="w-full h-full flex items-center justify-center text-muted-foreground/20">
                  <project.icon className="w-16 h-16" />
                </div>
              )}
              
              {/* Kategória címke a képen */}
              <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-foreground shadow-sm">
                {project.category}
              </div>
            </div>

            {/* TARTALOM - Alsó rész */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 flex-1">
                {project.description}
              </p>
              
              {/* Címkék (Tags) */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Gomb */}
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary hover:text-white text-primary text-sm font-semibold py-2 rounded-lg transition-colors"
                >
                  Megtekintés <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PortfolioSection;