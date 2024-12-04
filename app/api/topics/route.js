import connectMongoDB from "../../libs/mongodb";
import Topic from '@/app/models/topic'
import { NextResponse } from "next/server";

export async function POST(request){
    const {title,description} = request.json();

    await connectMongoDB();

    await Topic.create({title,description})
    return NextResponse.json({message:"Topic Create"},{status:201})
}