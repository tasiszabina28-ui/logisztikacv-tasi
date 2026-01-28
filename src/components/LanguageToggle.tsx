import { Button } from "@/components/ui/button";
import { useLanguage } from "./LanguageContext";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={toggleLanguage}
      className="font-bold w-12 h-9 border-2 border-black/10 dark:border-white/10"
    >
      {language === 'hu' ? 'HU' : 'EN'}
    </Button>
  );
}