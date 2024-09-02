'use server'
import {desc} from 'drizzle-orm'
import db from './../../db/drizzle'
import {socials} from "../../db/schema";

export async function getAllSocials() {
    return db.query.socials.findMany({
        orderBy: [desc(socials.social_id)],
    });

}