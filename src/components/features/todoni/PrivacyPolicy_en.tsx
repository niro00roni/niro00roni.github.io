import {
  AdSectionEn,
  DataDeletionSectionEn,
  InquiriesSectionEn,
  PolicyChangesSectionEn,
  PrivacyTitleEn,
} from '@/components/ui/PrivacySections_en';

export default function TodoniPrivacyPolicyEn() {
  return (
    <div className="space-y-4">
      <PrivacyTitleEn appName="todoni" />

      <AdSectionEn sectionNumber={1} />

      <section>
        <h2 className="text-xl font-bold text-blue-600 mt-8 mb-3">
          2. Acquisition of Personal Information
        </h2>
        <p className="text-slate-600">
          The App does not collect or store personal information (such as names,
          email addresses, or physical addresses) of users. When using the
          backup feature, data is stored in your own Google Drive (App Folder).
        </p>
      </section>

      <DataDeletionSectionEn sectionNumber={3} appName="todoni" />

      <PolicyChangesSectionEn sectionNumber={4} />

      <InquiriesSectionEn sectionNumber={5} />
    </div>
  );
}
