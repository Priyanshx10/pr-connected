import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/app/components/Footer';
import DynamicCursor from '@/app/components/DynamicCursor';
import Chatbot from '@/app/components/Chatbot';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route'; 
import { ClerkProvider } from '@clerk/nextjs';
import ClientLayout from '@/app/components/ClientLayout';

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
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <ClerkProvider>
        <body className={inter.className}>
          <ClientLayout session={session}>
            <main>{children}</main>
            <Footer />
            <DynamicCursor />
            <Chatbot />
          </ClientLayout>
        </body>
      </ClerkProvider>
    </html>
  );
}