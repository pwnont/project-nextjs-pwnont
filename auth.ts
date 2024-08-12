import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

//import { ExpressAuth } from "@auth/express";
//import Credentials from "@auth/express/providers/credentials";

import { useMemo } from 'react'
//import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
//import { setContext } from '@apollo/client/link/context';
 
async function getUser(email: string,password: string): Promise<User | undefined> {
  try {
    const data = {
        "username": email,
        "password": password
      };
    
      const res = await fetch('https://candidate-assignment.neversitup.com/auth/login',{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        },
        mode: 'no-cors'
      })
    
    const user = await res.json()
    console.log(user);
    
    //const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
 
export const { auth, signIn ,signOut,} = NextAuth({ 
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        let user = null
        const parsedCredentials = z
          .object({ email: z.string(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email,password);
          //console.log(user);
          if (!user) return null;
          //const passwordsMatch = await bcrypt.compare(password, user.password);
 
          //if (passwordsMatch) 
          return user;
        }
        return null;
      },
    }),
  ],
});

// export const { auth, signIn, signOut } = NextAuth({
//   ...authConfig,
//   providers: [
//     Credentials({
//       async authorize(credentials) {
//         const parsedCredentials = z
//           .object({ email: z.string(), password: z.string().min(6) })
//           .safeParse(credentials);
 
//         if (parsedCredentials.success) {
//           const { email, password } = parsedCredentials.data;
//           const user = await getUser(email,password);
//           if (!user) return null;
//           //const passwordsMatch = await bcrypt.compare(password, user.password);
 
//           //if (passwordsMatch) 
//           return user;
//         }

//         console.log('Invalid credentials');
//         return null;
//       },
//     }),
//   ],
// });




// import express from "express"
// import { saltAndHashPassword } from "@/utils/password"
// import { hash } from 'crypto';
// const app = express()
// app.use(
//     "/auth/*",
//     ExpressAuth({
//       providers: [
//         Credentials({
//           // You can specify which fields should be submitted, by adding keys to the `credentials` object.
//           // e.g. domain, username, password, 2FA token, etc.
//           credentials: {
//             email: {},
//             password: {},
//           },
//           authorize: async (credentials) => {
//             let user = null
   
//             // logic to salt and hash password
//             const pwHash = hash(credentials.password)
   
//             // logic to verify if the user exists
//             user = await getUserFromDb(credentials.email, pwHash)
   
//             if (!user) {
//               // No user found, so this is their first attempt to login
//               // meaning this is also the place you could do registration
//               throw new Error("User not found.")
//             }
   
//             // return user object with the their profile data
//             return user
//           },
//         }),
//       ],
//     })
//   )