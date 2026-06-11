import type { Metadata } from 'next';
import { AppProviders } from '@/providers/app-providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'HelloDit | Financial Management',
  description: 'Futuristic, intuitive, and highly secure personal and business financial tracking ecosystem.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-obsidian text-pure-white font-sans overflow-x-hidden min-h-screen antialiased">
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
