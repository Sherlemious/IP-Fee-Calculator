import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  currentLang: 'en' | 'ar';
  onLanguageChange: (lang: 'en' | 'ar') => void;
}

const LanguageSwitcher = ({ currentLang, onLanguageChange }: LanguageSwitcherProps) => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onLanguageChange(currentLang === 'en' ? 'ar' : 'en')}
        className="flex items-center gap-2 bg-white/90 backdrop-blur-sm border-blue-200 hover:bg-blue-50"
      >
        <Globe className="h-4 w-4" />
        {currentLang === 'en' ? 'العربية' : 'English'}
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
