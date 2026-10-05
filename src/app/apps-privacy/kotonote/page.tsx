'use client';

import KotoNotePrivacyPolicyJa from '@/components/features/kotonote/PrivacyPolicy_ja';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function SanpoNotePrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto leading-relaxed">
      <div className="flex justify-between items-center mb-6">
        <Link
          href="/"
          className="text-sm text-blue-600 hover:underline inline-flex items-center gap-1"
        >
          ← 公開アプリ一覧に戻る
        </Link>
      </div>

      <KotoNotePrivacyPolicyJa />

      <Footer lastUpdatedLabel="最終更新日" lastUpdated="2026年9月30日" />
    </div>
  );
}
