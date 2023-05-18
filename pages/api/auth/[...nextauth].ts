import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter, initFirestore } from "@next-auth/firebase-adapter";
import { cert } from "firebase-admin/app";

const init = initFirestore({
  credential: cert({
    privateKey: process.env.FIREBASE_KEYS?.replace(/\\n/g, "\n"),
    clientEmail: process.env.CLIENT_EMAIL,
    projectId: process.env.PROJECT_ID,
  }),
});

export default NextAuth({
  adapter: FirestoreAdapter(init),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    signIn: async ({ user }) => {
      return true;
    },
    session: async ({ session, token, user }) => {
      return session;
    },
  },
});
