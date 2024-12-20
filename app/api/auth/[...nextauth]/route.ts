import { prismaClient } from "@/app/lib/db";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ profile, account }) {
      try {
        if (account?.provider === "google") {
          const user = await prismaClient.user.findUnique({
            where: {
              email: profile?.email,
            },
          });

          if (!user) {
            const newUser = await prismaClient.user.create({
              data: {
                email: profile?.email ?? "",
                provider: "Google",
              },
            });
          }
        }
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
