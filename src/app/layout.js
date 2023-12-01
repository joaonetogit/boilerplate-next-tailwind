// Font
import { Inter } from 'next/font/google';

// Style
import './globals.css';

// Components
import Footer from '@/components/Footer';
import Header from '@/components/Header';

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
    <html lang="en">
      <body className={`${inter.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
