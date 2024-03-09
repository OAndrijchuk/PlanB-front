import type { Metadata } from 'next';
import '../assets/styles/globals.css';
import { Button, ButtonScrollToUp } from '@/components';

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
        <main>
          {children}
          <ButtonScrollToUp />
          <Button />
          <div id="modal-root"></div>
        </main>
      </body>
    </html>
  );
}
