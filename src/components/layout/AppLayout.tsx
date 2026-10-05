import React from 'react';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-50 text-gray-900">
      <main className="flex-1 overflow-auto focus:outline-none ">
        <div className="mx-auto p-4">{children}</div>
      </main>
    </div>
  );
}
