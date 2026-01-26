import { Briefcase } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      title: "Adminisztrációs gyakornok",
      company: "EGIS Gyógyszergyár Zrt.",
      period: "2025.05 - jelenleg",
      description: "Az automatizálási és metrológia főosztály munkáját segítem, adminisztrációs tevékenységet végzek a belső rendszerekben, valamint Excel táblázatokban dolgozom."
    },
    {
      title: "Supply chain gyakornok",
      company: "Euroapi Hungary Kft.",
      period: "2024.08 - 2024.12",
      description: "A beszerzési osztály munkáját segítettem, anyagáramlással kapcsolatos Excel táblázatokban dolgoztam."
    },
    {
      title: "Back office gyakornok",
      company: "UNIQA Biztosító Zrt.",
      period: "2024.03 - 2024.07",
      description: "Ügyfélszolgálati munkát végeztem, egyszerűbb ügyeket kezeltem és e-mailben kommunikáltam az ügyfelekkel."
    },
    {
      title: "Irodai asszisztens",
      company: "Fedex Express Hungary KFT.",
      period: "2023.05 - 2023.11",
      description: "Import vám osztályon segédkeztem a vámkezelésben, vámkezelési megbízásokat és értesítéseket küldtem ki, ügyfelekkel tartottam kapcsolatot."
    },
    {
      title: "Minőségellenőr, majd gépkezelő",
      company: "CooperVision Kft",
      period: "2021.06 - 2021.09 majd 2022.06-2022.09",
      description: "Kontaktlencse gyártásban vettem részt, minőségellenőri feladatokat láttam el, majd gépkezelőként dolgoztam a gyártósoron diákként."
    },
  ];

  return (
    <section>
      {/* Főcím */}
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2
        text-gray-900 dark:text-white"
      >
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Briefcase className="w-5 h-5 text-primary" />
        </div>
        Munkatapasztalat
      </h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="relative pl-6 pb-6 border-l-2 border-primary/20 last:pb-0"
          >
            {/* Idővonal Pötty */}
            <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-primary" />
            
            {/* --- KÁRTYA --- */}
            <div className="rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300
              bg-white border border-gray-100
              dark:bg-zinc-900 dark:border-zinc-800"
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                {/* Pozíció neve */}
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {exp.title}
                </h3>
                
                {/* Dátum címke (Maradhat primary, az mindenhol jó) */}
                <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                  {exp.period}
                </span>
              </div>
              
              {/* Cégnév */}
              <p className="text-primary font-medium text-sm mb-2">
                {exp.company}
              </p>
              
              {/* Leírás */}
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;