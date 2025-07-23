"use client";

import { SignInButton } from '@clerk/nextjs';
import React from 'react';

const SignInPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-blue-500">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Sign In</h1>
        <p className="mb-6 text-gray-600 text-center">
          Dashboard is available for the signed-in user only.
        </p>
        <div className="w-full">
          <SignInButton 
            mode="modal" 
          />
        </div>
        <style jsx>{`
          .sign-in-button {
            @apply w-full py-3 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-200;
          }
        `}</style>
      </div>
    </div>
  );
};

export default SignInPage;
