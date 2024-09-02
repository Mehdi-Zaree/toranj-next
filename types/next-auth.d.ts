import {DefaultSession} from "next-auth";
declare module 'next-auth'{
    export  interface Session {
        user:{
            email(email: any): unknown;
            name: string;
            role:string
            & DefaultSession['user']
        }
    }
}