import { NextResponse } from 'next/server';
import {getAllComments} from "../../../../lib/actions/comments.action";


export async function GET() {
    const products = await getAllComments();
    return NextResponse.json(products);
}
