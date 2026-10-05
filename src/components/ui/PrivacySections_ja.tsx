import { ContactEmail } from '@/components/ui/ContactEmail';

export function PrivacyTitleJa({ appName }: { appName: string }) {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl font-bold border-b-2 border-slate-300 pb-3 text-slate-800">
        プライバシーポリシー
      </h1>

      <p className="text-slate-600">
        「{appName}
        」（以下「本アプリ」）におけるプライバシーポリシーを以下の通り定めます。
      </p>
    </>
  );
}

export function AdSectionJa({ sectionNumber = 1 }: { sectionNumber?: number }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-blue-600 mt-8 mb-3">
        {sectionNumber}. 広告の配信について
      </h2>
      <p className="text-slate-600 mb-2">
        本アプリでは、第三者配信の広告サービス（Google
        AdMob）を利用しています。広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookie（クッキー）やデバイス識別子を使用することがあります。
      </p>
      <p className="text-slate-600">
        これらのデータは匿名で収集されており、個人を特定するものではありません。
      </p>
    </section>
  );
}

export function DataDeletionSectionJa({
  sectionNumber,
  appName,
}: {
  sectionNumber: number;
  appName: string;
}) {
  return (
    <section>
      <h2 className="text-xl font-bold text-blue-600 mt-8 mb-3">
        {sectionNumber}. データの削除について
      </h2>
      <p className="text-slate-600 mb-3">
        ユーザーは、アプリ内の設定メニューからバックアップデータを削除することができます。アプリをアンインストール済み等の理由で、ユーザーご自身での削除が困難な場合は、以下の手順でGoogleドライブ上のデータを削除可能です。
      </p>
      <ol className="list-decimal list-inside space-y-2 text-slate-600 pl-2">
        <li>
          <a
            href="https://drive.google.com/drive/settings"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Googleドライブの設定
          </a>
          を開く。
        </li>
        <li>「アプリの管理」を選択する。</li>
        <li>
          「{appName}
          」の「オプション」をクリックし、「非表示のアプリデータを削除」を選択する。
        </li>
      </ol>
      <p className="text-slate-600 mt-3">
        なお、開発者から直接ユーザーのGoogleドライブ内のデータを操作・削除することはできません。
      </p>
    </section>
  );
}

export function PolicyChangesSectionJa({
  sectionNumber,
}: {
  sectionNumber: number;
}) {
  return (
    <section>
      <h2 className="text-xl font-bold text-blue-600 mt-8 mb-3">
        {sectionNumber}. 本ポリシーの変更
      </h2>
      <p className="text-slate-600">
        本ポリシーは、必要に応じて変更されることがあります。最新のポリシーはこのページに掲載されます。
      </p>
    </section>
  );
}

export function InquiriesSectionJa({
  sectionNumber,
}: {
  sectionNumber: number;
}) {
  return (
    <section>
      <h2 className="text-xl font-bold text-blue-600 mt-8 mb-3">
        {sectionNumber}. お問い合わせ
      </h2>
      <p className="text-slate-600 mb-2">
        本ポリシーに関するお問い合わせや、アカウントおよび関連データの削除に関するご依頼は、以下のメールアドレスまでご連絡ください。
      </p>
      <ContactEmail label="メールアドレス" />
    </section>
  );
}
