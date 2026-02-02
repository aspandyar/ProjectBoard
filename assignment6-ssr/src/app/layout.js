import { Inter } from 'next/font/google';
import './globals.css';
import Layout from '@/components/Layout';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata = {
  title: 'Roasters Blog — SSR',
  description: 'SSR, Hydration & Core Web Vitals — same content as SPA.',
  openGraph: {
    title: 'Roasters Blog — SSR',
    description: 'SSR, Hydration & Core Web Vitals.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="layout antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
