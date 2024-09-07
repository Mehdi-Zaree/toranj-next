import { NextResponse } from 'next/server';
import {getAllServices} from "../../../../lib/actions/services.action";


export async function GET() {
    const products = await getAllServices();
    return NextResponse.json(products);
}
