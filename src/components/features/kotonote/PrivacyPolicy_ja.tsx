import {
  AdSectionJa,
  InquiriesSectionJa,
  PolicyChangesSectionJa,
  PrivacyTitleJa,
} from '@/components/ui/PrivacySections_ja';

export default function KotoNotePrivacyPolicyJa() {
  return (
    <div className="space-y-4">
      <PrivacyTitleJa appName="ことノート" />

      <AdSectionJa sectionNumber={1} />

      <section>
        <h2 className="text-xl font-bold text-blue-600 mt-8 mb-3">
          2. 個人情報の取得について
        </h2>
        <p className="text-slate-600">
          本アプリは、ユーザーの個人情報（名前、メールアドレス、住所など）を収集・保存することはありません。
        </p>
      </section>

      <PolicyChangesSectionJa sectionNumber={3} />

      <InquiriesSectionJa sectionNumber={4} />
    </div>
  );
}
