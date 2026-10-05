import { type Lang } from '@/constants/apps';
import { LangSwitcher } from '@/components/ui/LangSwitcher';

interface HeaderProps {
  currentLang: Lang;
  title: string;
  description: string;
  onLangChange: (lang: Lang) => void;
}

export default function Header({
  currentLang,
  title,
  description,
  onLangChange,
}: HeaderProps) {
  return (
    <>
      <div className="mb-4">
        <LangSwitcher currentLang={currentLang} onLangChange={onLangChange} />
      </div>

      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-slate-700 mb-2">{title}</h1>
        <p className="text-slate-500 text-sm sm:text-base">{description}</p>
      </header>
    </>
  );
}
