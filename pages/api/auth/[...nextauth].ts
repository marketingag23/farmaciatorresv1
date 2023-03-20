import CredentialsProvider from "next-auth/providers/credentials";
// import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import { toast } from "react-hot-toast";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "jsmith",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        try {
          const { email, password } = credentials as any;
          const res = await fetch(
            "https://www.droguerialaeconomia.com/torres/api/users/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email,
                password,
              }),
            }
          );
          const user = await res.json();
          if (user.success && user) {
            toast.success(
              `Hola. ${user.data.nombres} bienvenido a farmacia torres`
            );
            return user;
          }
          toast.error(`${user.message}`);

          return null;
        } catch (error) {
          return "error en consulta";
        }
      },
    }),
    // GitHubProvider({
    //   clientId: "575befa9d35b08f28274",
    //   clientSecret: "aac3a43f7070d05aa7c9b92c04abb973f71a0275"
    // })
  ],

  jwt: {
    maxAge: 60 * 60 * 24 * 30,
    secret: process.env.NEXTAUTH_SECRET,
  },

  session: {
    strategy: "jwt",
    // maxAge:60,
  },

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.user = token;
      return session;
    },
  },

  pages: {
    signIn: "/",
  },
};

export default NextAuth(authOptions);
