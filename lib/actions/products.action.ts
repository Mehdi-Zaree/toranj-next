'use server'
import {desc} from 'drizzle-orm'
import db from './../../db/drizzle'
import {products} from "../../db/schema";

export async function getAllProducts() {
    let data = await db.query.products.findMany({
        orderBy : [desc(products.productId)],
    })
    return data

}