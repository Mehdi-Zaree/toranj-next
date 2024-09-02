'use server'
import {desc} from 'drizzle-orm'
import db from './../../db/drizzle'
import {comments} from "../../db/schema";

export async function getAllComments() {
    let data = await db.query.comments.findMany({
        orderBy : [desc(comments.comment_id)],
    })
    return data

}