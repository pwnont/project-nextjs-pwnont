import type { NextAuthConfig } from 'next-auth';
//import { signOut } from './auth';
 
export const authConfig = {
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async signIn({ user }) {
      if (user) {
        return true;
      }
      return false;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl+'/dashboard';
    },
    async session({ session}) {
      return session;
    },
  },
  // callbacks: {
  //   authorized({ auth, request: { nextUrl } }) {
  //     const isLoggedIn = !!auth?.user;
  //     const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
  //     if (isOnDashboard) {
  //       if (isLoggedIn) return true;
  //       return false; // Redirect unauthenticated users to login page
  //     } else if (isLoggedIn) {
  //       return Response.redirect(new URL('/dashboard', nextUrl));
  //     }
  //     return true;
  //   },
  // },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;

// export const authConfig = {
//   pages: {
//     signIn: '/login',
//   },
//   callbacks: {},
//   providers: [], // Add providers with an empty array for now
// } satisfies NextAuthConfig;
