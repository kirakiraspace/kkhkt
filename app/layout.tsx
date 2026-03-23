import type { Metadata } from 'next';
import { GameProvider } from '@/context/GameContext';
import './globals.css';

export const metadata: Metadata = {
  title: '破個冰吧',
  description: '讓每一次相遇，都從一個好問題開始',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <body className="min-h-screen bg-cream antialiased">
        <GameProvider>
          <main className="mx-auto max-w-lg min-h-screen">{children}</main>
        </GameProvider>
      </body>
    </html>
  );
}
