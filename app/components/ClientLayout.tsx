// app/login/page.js (for the new Next.js app directory)

'use client';

import { SessionProvider } from 'next-auth/react';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from '@clerk/nextjs';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import App from '../page'

export default function LoginPage({ session }) {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useUser(); // Clerk hook for user state

  useEffect(() => {
    // Redirect to the landing page if user is signed in
    if (isLoaded && isSignedIn) {
      router.push('/'); // Redirect to landing page
    }
  }, [isLoaded, isSignedIn, router]);

  return (
    <SessionProvider session={session}>
          <SignedOut>
            <App/>
            </SignedOut>
          <SignedIn>
             <App/>
          </SignedIn>
    </SessionProvider>
  );
}
