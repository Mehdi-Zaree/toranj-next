import { NextResponse } from 'next/server';
import {getAllCategories} from "../../../../lib/actions/category.action";


export async function GET() {
    const products = await getAllCategories();
    return NextResponse.json(products);
}
