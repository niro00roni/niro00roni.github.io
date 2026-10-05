import {
  AdSectionJa,
  DataDeletionSectionJa,
  InquiriesSectionJa,
  PolicyChangesSectionJa,
  PrivacyTitleJa,
} from '@/components/ui/PrivacySections_ja';

export default function KuratinePrivacyPolicyJa() {
  return (
    <div className="space-y-4">
      <PrivacyTitleJa appName="kuratine" />

      <AdSectionJa sectionNumber={1} />

      <section>
        <h2 className="text-xl font-bold text-blue-600 mt-8 mb-3">
          2. 個人情報の取得について
        </h2>
        <p className="text-slate-600">
          本アプリは、ユーザーの個人情報（名前、メールアドレス、住所など）を収集・保存することはありません。バックアップ機能を利用する場合、データはユーザー自身のGoogleドライブ（アプリ専用フォルダ）に保存されます。
        </p>
      </section>

      <DataDeletionSectionJa sectionNumber={3} appName="kuratine" />

      <PolicyChangesSectionJa sectionNumber={4} />

      <InquiriesSectionJa sectionNumber={5} />
    </div>
  );
}
