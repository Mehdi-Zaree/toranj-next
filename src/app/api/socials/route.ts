import { NextResponse } from 'next/server';
import {getAllSocials} from "../../../../lib/actions/socials.actions";


export async function GET() {
    const socials = await getAllSocials();
    return NextResponse.json(socials);
}
