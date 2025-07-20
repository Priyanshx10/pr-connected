/* eslint-disable @typescript-eslint/no-unused-vars */
import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { GoogleAnalytics } from "@next/third-parties/google";
import { dark } from "@clerk/themes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chatbot from "./chatbot";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Font optimization (avoids CLS)
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

// ✅ SEO-optimized metadata (static, works with App Router)
export const metadata = {
  title: {
    default: "PR-Connect | QR-Powered EU/US Marketing",
    template: "%s | PR-Connect",
  },
  description: "3x engagement with award-winning QR & digital PR for restaurants, SaaS, and fitness brands.",
  keywords: [
    "QR marketing",
    "EU market expansion",
    "US brand growth",
    "digital PR agency",
  ],
  metadataBase: new URL("https://www.pr-connect.com"),
  openGraph: {
    title: "PR-Connect | Cross-Brand QR Marketing",
    description: "Grow in EU/US markets with data-driven PR solutions",
    images: "/og-image.jpg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ✅ Client-side providers (separate component to avoid conflicts)
function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: { colorPrimary: "#2563eb" },
      }}
      afterSignInUrl="/dashboard"
      afterSignUpUrl="/dashboard"
    >
      <GoogleAnalytics gaId="G-EY5LQYMKHV" />
      <SpeedInsights />
      {children}
    </ClerkProvider>
  );
}

// ✅ Root layout (server-side by default)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="bg-background text-foreground min-h-screen flex flex-col">
        <ClientProviders>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}