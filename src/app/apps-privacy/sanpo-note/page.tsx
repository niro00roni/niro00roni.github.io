'use client';

import SanpoNotePrivacyPolicyJa from '@/components/features/sanpo-note/PrivacyPolicy_ja';
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

      <SanpoNotePrivacyPolicyJa />

      <Footer lastUpdatedLabel="最終更新日" lastUpdated="2026年7月31日" />
    </div>
  );
}
