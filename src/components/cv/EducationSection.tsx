import { GraduationCap } from "lucide-react";

interface Education {
  school: string;
  degree: string;
  period: string;
  description?: string;
}

const EducationSection = () => {
  const education: Education[] = [
    {
      school: "Budapesti Gazdaságtudományi Egyetem - MÜKK",
      degree: "Kereskedelem-marketing képzés",
      period: "2022 - jelenleg",
      description: "Kereskedelem szakirány"
    },
    {
      school: "KSZC Kandó Kálmán Technikum",
      degree: "Képzőművészeti szakgimnázium",
      period: "2017 - 2022",
      description: "Képzőművészeti tagozat, érettségi"
    },
  ];

  return (
    // 1. KÁRTYA STÍLUS (Világos / Sötét)
    <section className="rounded-2xl p-6 shadow-md transition-colors duration-300
      bg-white border border-gray-100
      dark:bg-zinc-900 dark:border-zinc-800"
    >
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2
        text-gray-900 dark:text-white"
      >
        <div className="w-1 h-6 bg-primary rounded-full" />
        Végzettség
      </h2>

      <div className="space-y-4">
        {education.map((edu, index) => (
          <div 
            key={index} 
            // 2. LISTA ELEMEK HÁTTERE (Kicsit eltér a kártyától)
            className="flex gap-4 p-4 rounded-xl transition-colors
              bg-gray-50 hover:bg-gray-100
              dark:bg-zinc-800/50 dark:hover:bg-zinc-800"
          >
            {/* Ikon háttere (maradhat primary, az mindenhol jó) */}
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            
            <div>
              {/* Iskola neve */}
              <h3 className="font-semibold text-sm text-gray-900 dark:text-white">
                {edu.school}
              </h3>
              
              {/* Szak megnevezése (Primary szín maradhat) */}
              <p className="text-primary text-sm font-medium">
                {edu.degree}
              </p>
              
              {/* Időszak (Szürke -> Világosszürke) */}
              <p className="text-xs mt-1 text-gray-500 dark:text-gray-400">
                {edu.period}
              </p>
              
              {/* Leírás (Szürke -> Világosszürke) */}
              {edu.description && (
                <p className="text-xs mt-1 text-gray-500 dark:text-gray-400">
                  {edu.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;