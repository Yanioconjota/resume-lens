import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AppShell } from '@/components/layout/AppShell';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ResumeLens - AI-Powered Resume Analysis',
  description:
    'Upload your resume and get AI-powered feedback tailored to your target engineering role. Get actionable suggestions and rewrites to land your next job.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
