import { Camera, Palette, BookOpen, Dumbbell, Users, Code, Layout } from "lucide-react";

const HobbiesSection = () => {
  const hobbies = [
    { icon: Users, label: "Barátok" },
    { icon: Camera, label: "Fotózás" },
    { icon: Palette, label: "Festés" },
    { icon: BookOpen, label: "Olvasás" },
    { icon: Dumbbell, label: "Fitness" },
    { icon: Code, label: "Webfejlesztés" },
    { icon: Layout, label: "Webdesign" },
  ];

  return (
    <section className="bg-card rounded-2xl p-6 shadow-md">
      <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <div className="w-1 h-6 bg-primary rounded-full" />
        Hobbik
      </h2>
      <div className="flex flex-wrap gap-3">
        {hobbies.map((hobby, index) => (
          <div 
            key={index} 
            className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
          >
            <hobby.icon className="w-4 h-4" />
            <span className="text-sm font-medium">{hobby.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HobbiesSection;
