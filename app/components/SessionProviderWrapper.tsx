// SessionProviderWrapper.tsx
"use client"; // This line makes this component a client component

import { SessionProvider } from "next-auth/react";

interface SessionProviderWrapperProps {
  children: React.ReactNode;
  session: any; // Adjust the type as needed
}

const SessionProviderWrapper = ({ children, session }: SessionProviderWrapperProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default SessionProviderWrapper;