import { NextResponse } from "next/server";
import { connectionSTR } from "../../lib/db";
import mongoose from "mongoose"
export async function GET(){
    await mongoose.connect(connectionSTR)

    return NextResponse.json({result:true})

}