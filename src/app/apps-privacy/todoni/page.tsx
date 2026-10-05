'use client';

import TodoniPrivacyPolicyEn from '@/components/features/todoni/PrivacyPolicy_en';
import TodoniPrivacyPolicyJa from '@/components/features/todoni/PrivacyPolicy_ja';
import Footer from '@/components/layout/Footer';
import { LangSwitcher } from '@/components/ui/LangSwitcher';
import { PAGE_TEXT, type Lang } from '@/constants/apps';
import Link from 'next/link';
import { useState } from 'react';

const LAST_UPDATED: Record<Lang, string> = {
  ja: '2026年7月31日',
  en: 'July 31, 2026',
};

export default function TodoniPrivacyPolicy() {
  const [lang, setLang] = useState<Lang>('ja');
  const text = PAGE_TEXT[lang];

  return (
    <div className="max-w-4xl mx-auto leading-relaxed">
      <div className="flex justify-between items-center mb-6">
        <Link
          href="/"
          className="text-sm text-blue-600 hover:underline inline-flex items-center gap-1"
        >
          ← {lang === 'ja' ? '公開アプリ一覧に戻る' : 'Back to App List'}
        </Link>
        <LangSwitcher currentLang={lang} onLangChange={setLang} />
      </div>

      {lang === 'ja' ? <TodoniPrivacyPolicyJa /> : <TodoniPrivacyPolicyEn />}

      <Footer
        lastUpdatedLabel={text.lastUpdated}
        lastUpdated={LAST_UPDATED[lang]}
      />
    </div>
  );
}
