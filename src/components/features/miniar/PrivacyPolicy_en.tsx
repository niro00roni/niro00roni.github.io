import {
  AdSectionEn,
  DataDeletionSectionEn,
  InquiriesSectionEn,
  PolicyChangesSectionEn,
  PrivacyTitleEn,
} from '@/components/ui/PrivacySections_en';

export default function MiniarPrivacyPolicyEn() {
  return (
    <div className="space-y-4">
      <PrivacyTitleEn appName="miniar" />

      <AdSectionEn sectionNumber={1} />

      <section>
        <h2 className="text-xl font-bold text-blue-600 mt-8 mb-3">
          2. Information Collected and Data Handling
        </h2>
        <p className="text-slate-600 mb-3">
          The App handles text, images, and audio data entered and registered as
          diary entries. All of this data is stored entirely on the user&apos;s
          device or in their Google Drive, and is not collected or managed on
          servers operated by the developer.
        </p>
        <p className="text-slate-600 mb-3">
          Additionally, users can use device lock features (such as biometrics
          or passcodes) to protect privacy and data within the device.
        </p>
        <p className="text-slate-600">
          When using the backup feature, data is saved directly to the
          user&apos;s Google Drive (app-specific folder).
        </p>
      </section>

      <DataDeletionSectionEn sectionNumber={3} appName="miniar" />

      <PolicyChangesSectionEn sectionNumber={4} />

      <InquiriesSectionEn sectionNumber={5} />
    </div>
  );
}
