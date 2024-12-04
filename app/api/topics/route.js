import connectMongoDB from "../../libs/mongodb";
import Topic from "@/app/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();

  await connectMongoDB();

  await Topic.create({ title, description });
  return NextResponse.json({ message: "Topic has been Created " + title +" .",createdWhat:title,also:description }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message:"Topic Deleted"},{status:200});
}
