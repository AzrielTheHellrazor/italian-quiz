import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'İtalyanca 101 - Vize Hazırlık & Quiz Portalı',
  description: 'In alto! A1 ve Chiaro! ders kitaplarına uygun interaktif İtalyanca quiz ve vize çalışma platformu.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="min-h-screen bg-slate-900 text-slate-100 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
