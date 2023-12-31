// Font
import { Inter } from 'next/font/google';

// Style
import './globals.css';

// Components
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Boilerplate NextJS | Tailwind',
  description: 'Created by João Pinheiro',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
