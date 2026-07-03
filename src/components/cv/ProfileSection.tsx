import profilePhoto from "@/assets/profile-photo.jpg";
import { useLanguage } from "../LanguageContext";

const ProfileSection = () => {
  const { t } = useLanguage();
  return (
    <section className="flex flex-col items-center text-center py-8">
      <div className="mb-6">
        <div className="w-40 h-40 rounded-full overflow-hidden ring-4 shadow-xl
          ring-primary/20 bg-gray-200 dark:bg-zinc-800"
        >
          {/* Ha nincs meg a kép, akkor sem lesz csúnya */}
          <img
            src={profilePhoto}
            alt="Profilkép"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Név */}
      <h1 className="text-3xl md:text-4xl font-bold mb-2
        text-gray-900 dark:text-white"
      >
        {t("Tasi Szabina", "Szabina Tasi")}
      </h1>

      {/* Leírás */}
      <p className="max-w-md leading-relaxed
        text-gray-600 dark:text-gray-400"
      >
        {t('Táborfalvi lakosként, többéves irodai és logisztikai gyakornoki múlttal keresek teljes munkaidős pozíciót logisztikai területen. Mivel tanulmányaimat a BGE-n levelező tagozaton folytatom, így teljes állásban szeretnék a továbbiakban  elhelyezkedni. Erősségem a precíz adminisztráció, az önálló munkavégzés és a gyakorlatias problémamegoldás.', 'As a resident of Táborfalva, with several years of office and logistics internship experience, I am looking for a full-time position in the field of logistics. Since I am continuing my studies at BGE on a correspondence basis, I would like to work full-time in the future. My strengths are precise administration, independent work, and practical problem-solving.')}
      </p>
    </section>
  );
};

export default ProfileSection;

