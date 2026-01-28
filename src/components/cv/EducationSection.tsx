import { GraduationCap } from "lucide-react";
import { useLanguage } from "../LanguageContext";

const EducationSection = () => {
  const { t } = useLanguage();

  const education = [
    {
      school: t("Budapesti Gazdaságtudományi Egyetem - MÜKK", "Budapest University of Economics and Business - FMBC"),
      degree: t("Kereskedelem-marketing képzés", "Commerce and Marketing"),
      period: t("2022 - jelenleg", "2022 - Present"),
      description: t("Kereskedelem szakirány", "Specialization in Commerce")
    },
    {
      school: t("KSZC Kandó Kálmán Technikum", "Kandó Kálmán Technical School"),
      degree: t("Képzőművészeti szakgimnázium", "Vocational School of Fine Arts"),
      period: "2017 - 2022",
      description: t("Képzőművészeti tagozat, érettségi", "Fine Arts Faculty, Graduation")
    },
  ];

  return (
    <section className="rounded-2xl p-6 shadow-md transition-colors duration-300 bg-white border border-gray-100 dark:bg-zinc-900 dark:border-zinc-800">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
        <div className="w-1 h-6 bg-primary rounded-full" />
        {t("Végzettség", "Education")}
      </h2>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="flex gap-4 p-4 rounded-xl transition-colors bg-gray-50 hover:bg-gray-100 dark:bg-zinc-800/50 dark:hover:bg-zinc-800">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-gray-900 dark:text-white">{edu.school}</h3>
              <p className="text-primary text-sm font-medium">{edu.degree}</p>
              <p className="text-xs mt-1 text-gray-500 dark:text-gray-400">{edu.period}</p>
              {edu.description && (
                <p className="text-xs mt-1 text-gray-500 dark:text-gray-400">{edu.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;