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
      
      {/* Alcím */}
      <p className="text-lg mb-4 font-medium
        text-gray-600 dark:text-gray-300"
      >
        {t('Digitális szemléletű marketing gyakornok', 'Marketing trainee with digital focus')}
      </p>
      
      {/* Leírás */}
      <p className="max-w-md leading-relaxed
        text-gray-600 dark:text-gray-400"
      >
        {t('23 éves vagyok, a 14. kerületben élek és jelenleg 6. félévemet töltöm kereskedelem-marketing szakon a BGE-MÜKK-ön. Célom, hogy betekintést nyerhessek egy vállalat belső folyamataiba (kezdve a beszerzéstől a logisztikán, marketingen át egészen a sales-ig, számomra mindez érdekes lehet), tapasztalatot szerezhessek, gyakorlati időm letöltése után elhelyezkedhessek teljes állásban.' ,'I am 23 years old, living in Budapest (14th district). Currently in my 6th semester studying Commerce and Marketing at Budapest University of Economics and Business Faculty of Marketing and Business Communication (BUEB FMBC). My goal is to gain insight into a company\'s internal processes (from procurement and logistics to marketing and sales), acquire professional experience, and transition into a full-time position after completing my internship.')}
      </p>
    </section>
  );
};

export default ProfileSection;

