import {cwd} from 'node:process'
import {loadEnvConfig} from "@next/env";
import {drizzle} from 'drizzle-orm/node-postgres'
import {Client} from 'pg'
import * as schema from './schema'
import sampleData from './../lib/sampleData'



loadEnvConfig(cwd())

async function main(){
    try{
        const client = new Client({
            connectionString: process.env.POSTGRES_URL!,
        })
        await client.connect();
        const db = drizzle(client)
        await db.delete(schema.categories)
        await db.delete(schema.users)
        await db.delete(schema.accounts)
        await db.delete(schema.products)
        await db.delete(schema.comments)
        await db.delete(schema.branches)
        await db.delete(schema.socials)

        const resCategories = await db
            .insert(schema.categories)
            .values(sampleData.categories)
            .returning()
        console.log({resCategories})

        const resUsers = await db
            .insert(schema.users)
            .values(sampleData.users)
            .returning()

        const resProducts = await db
            .insert(schema.products)
            .values(sampleData.products)
            .returning();
        console.log({ resProducts,resUsers });

        const resComments = await db
            .insert(schema.comments)
            .values(sampleData.comments) // Ensure sampleData.products exists
            .returning();
        console.log({ resComments });

        const resBranches = await db
            .insert(schema.branches)
            .values(sampleData.branches) // Ensure sampleData.products exists
            .returning();
        console.log({ resBranches });

        const resSocials = await db
            .insert(schema.socials)
            .values(sampleData.socials) // Ensure sampleData.products exists
            .returning();
        console.log({ resSocials });

        await db.delete(schema.socials)
        const resServices = await db
            .insert(schema.services)
            .values(sampleData.services) // Ensure sampleData.products exists
            .returning();
        console.log({ resServices });


        await client.end()

    }catch(error){
        console.error(error)
        throw new Error()
    }
}
 main().then(r => console.log(r))
