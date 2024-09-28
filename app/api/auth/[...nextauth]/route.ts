
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/lib/mongodb"
import { Adapter } from "next-auth/adapters"

const handler = NextAuth({
  adapter: MongoDBAdapter(clientPromise) as Adapter,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Add your own logic here to find the user from your database
        // This is just a simple example
        if (credentials?.username === "user" && credentials?.password === "password") {
          return { id: "1", name: "J Smith", email: "jsmith@example.com" }
        }
        return null
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      if (session?.user) {
        session.user = { ...session.user, id: token.sub! };
      }
      return session;
    },
  },
})

export { handler as GET, handler as POST }