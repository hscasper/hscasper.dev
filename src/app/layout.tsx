import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Shaheer Hassan',
  description:
    'Personal portfolio of Shaheer Hassan — a full stack developer building modern web applications with clean code and thoughtful design.',
  openGraph: {
    title: 'Shaheer Hassan',
    description:
      'Personal portfolio of Shaheer Hassan — a full stack developer building modern web applications.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}
      >
        <a
          href='#main-content'
          className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white'
        >
          Skip to main content
        </a>
        <Navbar />
        <main id='main-content'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
