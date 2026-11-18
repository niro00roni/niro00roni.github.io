import {
  AdSectionJa,
  DataDeletionSectionJa,
  InquiriesSectionJa,
  PolicyChangesSectionJa,
  PrivacyTitleJa,
} from '@/components/ui/PrivacySections_ja';

export default function SanpoNotePrivacyPolicyJa() {
  return (
    <div className="space-y-4">
      <PrivacyTitleJa appName="sanpo note" />

      <AdSectionJa sectionNumber={1} />

      <section>
        <h2 className="text-xl font-bold text-blue-600 mt-8 mb-3">
          2. 取得する情報および利用目的について
        </h2>
        <p className="text-slate-600 mb-3">
          本アプリは、以下の情報を取得および利用する場合があります。なお、ユーザーの氏名、メールアドレス等の個人情報を直接収集・保存することはありません。
        </p>
        <ul className="list-disc list-inside space-y-2 text-slate-600 pl-2">
          <li>
            <strong className="text-slate-700">位置情報:</strong>{' '}
            ユーザーの現在地に基づいた情報の表示や、特定のスポットに関連する機能を提供するために利用します。
          </li>
          <li>
            <strong className="text-slate-700">通知機能:</strong>{' '}
            アプリからのリマインダーや重要なお知らせを送信するために利用します。
          </li>
          <li>
            <strong className="text-slate-700">Googleドライブデータ:</strong>{' '}
            バックアップ機能を利用する場合、データはユーザー自身のGoogleドライブ（アプリ専用フォルダ）に保存されます。
          </li>
        </ul>
        <p className="text-slate-600 mt-3">
          これらのデータは、アプリの機能提供および改善のためにのみ使用され、個人を特定する目的では使用されません。
        </p>
      </section>

      <DataDeletionSectionJa sectionNumber={3} appName="sanpo note" />

      <PolicyChangesSectionJa sectionNumber={4} />

      <InquiriesSectionJa sectionNumber={5} />
    </div>
  );
}
