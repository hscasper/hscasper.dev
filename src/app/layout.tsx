import type { Metadata } from 'next';
import { Space_Grotesk, DM_Sans, Fira_Code } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});

const dmSans = DM_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
});

const firaCode = Fira_Code({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Shaheer Hassan — Full Stack Developer',
  description:
    'Personal portfolio of Shaheer Hassan — a full stack developer building modern web applications with clean code and thoughtful design.',
  openGraph: {
    title: 'Shaheer Hassan — Full Stack Developer',
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
        className={`${spaceGrotesk.variable} ${dmSans.variable} ${firaCode.variable} font-sans antialiased`}
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
