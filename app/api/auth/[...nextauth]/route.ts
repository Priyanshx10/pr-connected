import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoClient } from 'mongodb';
import { MongoDBAdapter } from "@auth/mongodb-adapter";

const clientPromise = async () => {
  const client = new MongoClient('mongodb://localhost:27017/');
  return client;
};

const handler = NextAuth({
  adapter: MongoDBAdapter(await clientPromise()), 
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
});

export { handler as GET, handler as POST };