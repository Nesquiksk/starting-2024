<<<<<<< HEAD
=======

>>>>>>> 03fc1eca8a8cb7ed923428143d4dc6f42e12a175
// src\app\api\auth\[...nextauth]\authOptions.ts

import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

<<<<<<< HEAD
export const authOptions: NextAuthOptions = {

    providers: [
=======

export const authOptions: NextAuthOptions = {
  
  providers: [
>>>>>>> 03fc1eca8a8cb7ed923428143d4dc6f42e12a175
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/prihlasenie',
    signOut: '/auth/odhlasenie',
  },
  callbacks: {
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      // Redirect to home page after sign-in
      return baseUrl || url; // baseUrl is automatically set from NEXTAUTH_URL in .env
    },
  },
};
<<<<<<< HEAD
=======



>>>>>>> 03fc1eca8a8cb7ed923428143d4dc6f42e12a175
