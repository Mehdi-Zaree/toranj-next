'use server'
import {desc} from 'drizzle-orm'
import db from './../../db/drizzle'
import {branches} from "../../db/schema";

export async function getAllBranches() {
    let data = await db.query.branches.findMany({
        orderBy : [desc(branches.branch_id)],
    })
    return data

}