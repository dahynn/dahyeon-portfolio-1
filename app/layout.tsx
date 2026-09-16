import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '유다현 | 코어뱅킹 개발자 포트폴리오',
  description: '금융 서비스의 상태와 권한을 끝까지 연결하는 유다현의 개발자 포트폴리오',
  icons: {
    icon: [{ url: '/favicon-bankware-transparent.png', type: 'image/png', sizes: '1254x1254' }],
    shortcut: '/favicon-bankware-transparent.png',
    apple: '/favicon-bankware-transparent.png',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
