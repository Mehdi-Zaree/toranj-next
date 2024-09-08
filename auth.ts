import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { compareSync } from "bcrypt-ts";
import { eq } from 'drizzle-orm';
import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import db from './db/drizzle';
import { users } from './db/schema';


export const config = {
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/sign-in',
        error: '/sign-in',
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
    },
    adapter: DrizzleAdapter(db),
    providers: [
        CredentialsProvider({
            credentials: {
                email: { type: 'email' },
                password: { type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials) return null;

                const user = await db.query.users.findFirst({
                    where: eq(users.email, credentials.email as string),
                });

                if (user && user.password) {
                    const isMatch = compareSync(credentials.password as string, user.password);
                    if (isMatch) {
                        return {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                            role: user.role,
                        };
                    }
                }

                return null;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }:any) {

            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }:any) {


            if (token) {
                session.user.id = token.id;
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.token = token.jti;
                session.user.role = token.role;
                session.user.init = token.iat;
            }
            console.log(token)
            return session;
        },
    },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
