import {DefaultSession} from "next-auth";
declare module 'next-auth'{
    export  interface Session {
        user:{
            name: string;
            role:string
            & DefaultSession['user']
        }
    }
}