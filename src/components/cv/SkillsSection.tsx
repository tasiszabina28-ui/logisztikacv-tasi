import { Languages, Users, Target, Palette, Laptop, Star } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    { icon: Star, label: "Monotonitástűrés" },
    { icon: Languages, label: "Angol (középszint)" },
    { icon: Users, label: "Csapatmunka/önálló munkavégzés" },
    { icon: Target, label: "Precizitás" },
    { icon: Palette, label: "Kreativitás" },
    { icon: Laptop, label: "Office programok magabiztos használata" },
  ];

  return (
    <section className="bg-card rounded-2xl p-6 shadow-md">
      <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <div className="w-1 h-6 bg-primary rounded-full" />
        Képességek
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-2">
              <skill.icon className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">{skill.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
