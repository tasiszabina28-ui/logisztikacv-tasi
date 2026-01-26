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
    // FŐ KERET
    <section className="rounded-2xl p-6 shadow-md transition-colors duration-300
      bg-white border border-gray-100
      dark:bg-zinc-900 dark:border-zinc-800"
    >
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2
        text-gray-900 dark:text-white"
      >
        <div className="w-1 h-6 bg-primary rounded-full" />
        Képességek
      </h2>
      
      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-3 p-3 rounded-lg transition-colors
            bg-gray-50 dark:bg-zinc-800/50"
          >
            <div className="flex items-center gap-2">
              <skill.icon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {skill.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;