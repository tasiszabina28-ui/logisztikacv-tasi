import { Briefcase } from "lucide-react";
import { useLanguage } from "../LanguageContext";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

const ExperienceSection = () => {
  // 1. Behívjuk a fordítót
  const { t } = useLanguage();

  const experiences: Experience[] = [
    {
      title: t("Adminisztrációs gyakornok", "Administration Intern"),
      company: "EGIS Gyógyszergyár Zrt.",
      period: t("2025.05 - jelenleg", "2025.05 - Present"),
      description: t(
        "Adatvezérelt folyamattámogatás és adminisztratív optimalizálás az automatizálási főosztályon.",
        "Data-driven process support and administrative optimization at the automation department."
      )
    },
    {
      title: t("Supply chain gyakornok", "Supply Chain Intern"),
      company: "Euroapi Hungary Kft.",
      period: "2024.08 - 2024.12",
      description: t(
        "Logisztikai adatelemzés és beszerzési folyamatmenedzsment.",
        "Logistics data analysis and procurement process management."
      )
    },
    {
      title: t("Back office gyakornok", "Back Office Intern"),
      company: "UNIQA Biztosító Zrt.",
      period: "2024.03 - 2024.07",
      description: t(
        "Ügyfélélmény-menedzsment (CX) és digitális ügyfélkommunikáció.",
        "Customer Experience (CX) management and digital client communication."
      )
    },
    {
      title: t("Irodai asszisztens", "Office Assistant"),
      company: "Fedex Express Hungary KFT.",
      period: "2023.05 - 2023.11",
      description: t(
        "Nemzetközi logisztikai adminisztráció és vámügyi folyamatmenedzsment.",
        "International logistics administration and customs process management."
      )
    },
    {
      title: t("Minőségellenőr, majd gépkezelő", "Quality Inspector / Machine Operator"),
      company: "CooperVision Kft",
      period: t(
        "2021.06 - 2021.09 majd 2022.06-2022.09", 
        "2021.06 - 2021.09 then 2022.06-2022.09"
      ),
      description: t(
        "Minőségbiztosítási (QA) folyamatok felügyelete és precíziós gyártástámogatás.",
        "Supervision of Quality Assurance (QA) processes and precision manufacturing support."
      )
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
        {/* Cím fordítása */}
        {t("Munkatapasztalat", "Experience")}
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
                
                {/* Dátum címke */}
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