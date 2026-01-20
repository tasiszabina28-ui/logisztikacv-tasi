import profilePhoto from "@/assets/profile-photo.jpg";

const ProfileSection = () => {
  return (
    <section className="flex flex-col items-center text-center">
      <div className="relative mb-6">
        <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-xl">
          <img
            src={profilePhoto}
            alt="Tasi Szabina"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium shadow-md">
          Marketing
        </div>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
        Tasi Szabina
      </h1>
      <p className="text-lg text-muted-foreground mb-4">
        Egyetemi hallgató • Kereskedelem-Marketing
      </p>
      <p className="max-w-md text-muted-foreground leading-relaxed">
        23 éves vagyok, a 14. kerületben élek és jelenleg 6. félévemet töltöm 
        kereskedelem-marketing szakon a BGE-KVIK-en. Célom, hogy elhelyezkedhessek 
        egy multinacionális cégnél, betekintést nyerhessek a belső folyamatokba, 
        tapasztalatot szerezhessek.
      </p>
    </section>
  );
};

export default ProfileSection;
