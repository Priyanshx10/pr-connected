/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import { MongoClient } from 'mongodb';
import { MongoDBAdapter } from "@auth/mongodb-adapter";

const clientPromise = async () => {
  const client = new MongoClient(process.env.MONGODB_URI || 'mongodb://localhost:27017/');
  return client;
};

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise() as any),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Add your own logic here to find the user from your database
        if (credentials?.username === "user" && credentials?.password === "password") {
          return { id: "1", name: "J Smith", email: "jsmith@example.com" };
        }
        return null; // Return null if user not found
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    // Add other providers here
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id; // Ensure user ID is added to the token
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub as string; // Cast to string for TypeScript
      }
      return session;
    },
  },
  // Add other NextAuth configurations here
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };