import type { NextAuthConfig } from 'next-auth';
//import { signOut } from './auth';

export const authConfig = {
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log( user, account, profile, email, credentials);
      if (user) {
        //setCookie('token', account.accessToken, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
        //setCookie('token', '111');
        // const res = credentials.req.res;
        // if (res) {
        //   res.setHeader('Set-Cookie', 'accessToken=1111; Max-Age=2592000; Path=/; HttpOnly');
        // }
        return true;
      }
      return false;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl + '/dashboard';
    },
    // async session({ session, token }) {
    //   return session;
    // },
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
