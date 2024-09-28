import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import DynamicCursor from '@/app/components/DynamicCursor';
import Chatbot from '@/app/components/Chatbot';
import SessionProviderWrapper from '@/app/components/SessionProviderWrapper'; // Import the wrapper
import { getServerSession } from 'next-auth'; // Import getServerSession

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
  const session = await getServerSession(); // Fetch the server session

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProviderWrapper session={session}>
          <Header />
          <main>{children}</main>
          <Footer />
          <DynamicCursor />
          <Chatbot />
        </SessionProviderWrapper>
      </body>
    </html>
  );
}