const CONTACT_EMAIL = 'niro.00.roni@gmail.com';

interface ContactEmailProps {
  label?: string;
}

export function ContactEmail({ label = 'Email' }: ContactEmailProps) {
  return (
    <p className="text-slate-800 font-medium bg-slate-50 py-1 px-3 rounded border border-slate-400 inline-block">
      {label}： {CONTACT_EMAIL}
    </p>
  );
}
