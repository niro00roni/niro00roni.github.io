import {
  AdSectionJa,
  DataDeletionSectionJa,
  InquiriesSectionJa,
  PolicyChangesSectionJa,
  PrivacyTitleJa,
} from '@/components/ui/PrivacySections_ja';

export default function MiniarPrivacyPolicyJa() {
  return (
    <div className="space-y-4">
      <PrivacyTitleJa appName="miniar" />

      <AdSectionJa sectionNumber={1} />

      <section>
        <h2 className="text-xl font-bold text-blue-600 mt-8 mb-3">
          2. 取得する情報とデータの取り扱いについて
        </h2>
        <p className="text-slate-600 mb-3">
          本アプリでは、日記として入力・登録されるテキスト、画像、および音声データを扱います。これらのデータはすべてユーザーの端末内、またはご自身のGoogleドライブに保存され、開発者側のサーバー等で収集・管理することはありません。
        </p>
        <p className="text-slate-600 mb-3">
          また、端末のロック機能（生体認証やパスコード等）を利用して、端末内のプライバシーやデータを保護することもできます。
        </p>
        <p className="text-slate-600">
          バックアップ機能を利用する場合、データはユーザーご自身のGoogleドライブ（アプリ専用フォルダ）に直接保存されます。
        </p>
      </section>

      <DataDeletionSectionJa sectionNumber={3} appName="miniar" />

      <PolicyChangesSectionJa sectionNumber={4} />

      <InquiriesSectionJa sectionNumber={5} />
    </div>
  );
}
