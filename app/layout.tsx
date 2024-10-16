/* eslint-disable @typescript-eslint/no-unused-vars */
import './globals.css';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { GoogleAnalytics } from '@next/third-parties/google'
import { dark } from '@clerk/themes';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'PR-Connect',
  description: 'Innovative Marketing Solutions & QR Code Integration',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark
      }}
      afterSignInUrl="/dashboard"
      afterSignUpUrl="/dashboard"
    >
      <html lang="en">
        <body className={`${inter.className} bg-background text-foreground`}>
          <div className="flex flex-col min-h-screen">
          <GoogleAnalytics gaId="G-XYZ" />
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}