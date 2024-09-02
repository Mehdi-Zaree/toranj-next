'use server'
import {desc} from 'drizzle-orm'
import db from './../../db/drizzle'
import {categories} from "../../db/schema";

export async function getAllCategories() {
    return (await db.query.categories.findMany({

    }))
}