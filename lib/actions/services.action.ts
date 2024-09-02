'use server'
import {desc} from 'drizzle-orm'
import db from './../../db/drizzle'
import {services} from "../../db/schema";

export async function getAllServices() {
    let data = await db.query.services.findMany({
        orderBy : [desc(services.service_id)],
    })
    return data

}