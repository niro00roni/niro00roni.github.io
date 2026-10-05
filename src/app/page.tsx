'use client';

import AppList from '@/components/layout/AppList';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { APPS, PAGE_TEXT, type Lang } from '@/constants/apps';
import { useState } from 'react';

const LAST_UPDATED: Record<Lang, string> = {
  ja: '2026年9月30日',
  en: 'September 30, 2026',
};

export default function Home() {
  const [lang, setLang] = useState<Lang>('ja');
  const text = PAGE_TEXT[lang];

  return (
    <main className="bg-slate-50 text-slate-800 min-h-screen py-10 px-4">
      <div className="max-w-xl mx-auto">
        <Header
          currentLang={lang}
          title={text.title}
          description={text.description}
          onLangChange={setLang}
        />
        <AppList apps={APPS} lang={lang} />
        <Footer
          lastUpdatedLabel={text.lastUpdated}
          lastUpdated={LAST_UPDATED[lang]}
        />
      </div>
    </main>
  );
}
