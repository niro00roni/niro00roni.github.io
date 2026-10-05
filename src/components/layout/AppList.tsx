import { AppItem, type Lang } from '@/constants/apps';
import Image from 'next/image';

interface AppListProps {
  apps: AppItem[];
  lang: Lang;
}

export default function AppList({ apps, lang }: AppListProps) {
  return (
    <ul className="space-y-4">
      {apps.map((app, index) => (
        <li key={index}>
          <a
            href={app.href}
            className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 group"
          >
            <div className="w-14 h-14 relative rounded-lg overflow-hidden shadow-sm flex-shrink-0 bg-slate-100">
              <Image
                src={app.iconSrc}
                alt={app.alt}
                fill
                sizes="56px"
                className="object-cover"
                priority={index < 2}
              />
            </div>
            <div className="flex-grow min-w-0">
              <h2 className="text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors truncate">
                {lang === 'ja' ? app.name : app.name_en}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5 line-clamp-1">
                {lang === 'ja' ? app.description : app.description_en}
              </p>
            </div>
            <svg
              className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
