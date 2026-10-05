import { ContactEmail } from '@/components/ui/ContactEmail';

export function PrivacyTitleEn({ appName }: { appName: string }) {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl font-bold border-b-2 border-slate-300 pb-3 text-slate-800">
        Privacy Policy
      </h1>

      <p className="text-slate-600">
        This Privacy Policy applies to the mobile application &quot;{appName}&quot;
        (hereinafter referred to as the &quot;App&quot;).
      </p>
    </>
  );
}

export function AdSectionEn({ sectionNumber = 1 }: { sectionNumber?: number }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-blue-600 mt-8 mb-3">
        {sectionNumber}. Advertisement Distribution
      </h2>
      <p className="text-slate-600 mb-2">
        The App uses a third-party ad delivery service (Google AdMob). Ad
        delivery operators may use cookies or device identifiers to display
        advertisements tailored to user interests.
      </p>
      <p className="text-slate-600">
        This data is collected anonymously and does not personally identify
        individuals.
      </p>
    </section>
  );
}

export function DataDeletionSectionEn({
  sectionNumber,
  appName,
}: {
  sectionNumber: number;
  appName: string;
}) {
  return (
    <section>
      <h2 className="text-xl font-bold text-blue-600 mt-8 mb-3">
        {sectionNumber}. Data Deletion
      </h2>
      <p className="text-slate-600 mb-3">
        Users can delete their backup data from the settings menu within the
        App. If you are unable to delete the data yourself (e.g., due to
        uninstallation), you can remove it from Google Drive by following the
        steps below:
      </p>
      <ol className="list-decimal list-inside space-y-2 text-slate-600 pl-2">
        <li>
          Open{' '}
          <a
            href="https://drive.google.com/drive/settings"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Google Drive Settings
          </a>
          .
        </li>
        <li>Select &quot;Manage Apps&quot;.</li>
        <li>
          Click &quot;Options&quot; next to &quot;{appName}&quot; and select
          &quot;Delete hidden app data&quot;.
        </li>
      </ol>
      <p className="text-slate-600 mt-3">
        Please note that the developer cannot directly access, modify, or
        delete data stored in the user&apos;s Google Drive.
      </p>
    </section>
  );
}

export function PolicyChangesSectionEn({
  sectionNumber,
}: {
  sectionNumber: number;
}) {
  return (
    <section>
      <h2 className="text-xl font-bold text-blue-600 mt-8 mb-3">
        {sectionNumber}. Changes to This Privacy Policy
      </h2>
      <p className="text-slate-600">
        This Policy may be updated as necessary. The latest version of the
        privacy policy will always be posted on this page.
      </p>
    </section>
  );
}

export function InquiriesSectionEn({
  sectionNumber,
}: {
  sectionNumber: number;
}) {
  return (
    <section>
      <h2 className="text-xl font-bold text-blue-600 mt-8 mb-3">
        {sectionNumber}. Inquiries
      </h2>
      <p className="text-slate-600 mb-2">
        If you have any questions regarding this Privacy Policy or requests
        for account and related data deletion, please contact us at the email
        address below:
      </p>
      <ContactEmail />
    </section>
  );
}
