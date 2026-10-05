interface FooterProps {
  lastUpdatedLabel: string;
  lastUpdated: string;
}

export default function Footer({ lastUpdatedLabel, lastUpdated }: FooterProps) {
  return (
    <footer className="mt-8 pt-2 border-t border-slate-400 text-center text-slate-400 text-xs sm:text-sm">
      <p>
        <small>
          {lastUpdatedLabel}: {lastUpdated}
        </small>
      </p>
    </footer>
  );
}
