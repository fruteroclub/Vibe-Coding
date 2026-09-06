import { useTranslation } from 'react-i18next';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (value: string) => {
    if (value && value !== i18n.language) {
      i18n.changeLanguage(value);
    }
  };

  return (
    <ToggleGroup
      type="single"
      value={i18n.language}
      onValueChange={handleLanguageChange}
      className="gap-0 border border-border rounded-md overflow-hidden"
    >
      <ToggleGroupItem
        value="es"
        aria-label="Cambiar a español"
        className="px-3 py-1.5 text-xs font-medium data-[state=on]:bg-primary data-[state=on]:text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors rounded-none border-r border-border"
      >
        ES
      </ToggleGroupItem>
      <ToggleGroupItem
        value="en"
        aria-label="Switch to English"
        className="px-3 py-1.5 text-xs font-medium data-[state=on]:bg-primary data-[state=on]:text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors rounded-none"
      >
        EN
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export default LanguageSwitcher;
