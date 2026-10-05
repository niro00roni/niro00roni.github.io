import { type Lang } from '@/constants/apps';
import { cn } from '@/lib/utils/cn';

interface LangSwitcherProps {
  currentLang: Lang;
  onLangChange: (lang: Lang) => void;
}

export function LangSwitcher({ currentLang, onLangChange }: LangSwitcherProps) {
  return (
    <div className="flex justify-end text-sm">
      <button
        onClick={() => onLangChange('ja')}
        className={cn(
          'cursor-pointer',
          currentLang === 'ja'
            ? 'font-bold text-slate-700'
            : 'text-slate-500 hover:text-blue-600 transition-colors',
        )}
      >
        {currentLang === 'ja' ? '日本語' : 'Japanese'}
      </button>
      <span className="text-slate-300 mx-1">|</span>
      <button
        onClick={() => onLangChange('en')}
        className={cn(
          'cursor-pointer',
          currentLang === 'en'
            ? 'font-bold text-slate-700'
            : 'text-slate-500 hover:text-blue-600 transition-colors',
        )}
      >
        English
      </button>
    </div>
  );
}
