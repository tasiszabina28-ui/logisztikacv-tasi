import { Star, Languages, Users, Target, Palette, Laptop } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    { icon: Star, label: "Monotonitástűrés", level: 90 },
    { icon: Languages, label: "Angol (középszint)", level: 60 },
    { icon: Users, label: "Csapatmunka", level: 85 },
    { icon: Target, label: "Precizitás", level: 90 },
    { icon: Palette, label: "Kreativitás", level: 80 },
    { icon: Laptop, label: "Office programok", level: 85 },
  ];

  return (
    <section className="bg-card rounded-2xl p-6 shadow-md">
      <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <div className="w-1 h-6 bg-primary rounded-full" />
        Képességek
      </h2>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <skill.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{skill.label}</span>
              </div>
              <span className="text-xs text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-accent-foreground rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
