import type { Metadata } from 'next';
import '../assets/styles/globals.css';

export const metadata: Metadata = {
  title: 'Студія PlanB',
  description: 'Лазерна та електро епіляція',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua">
      <body>
        {children}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
