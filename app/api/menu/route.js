import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Menu from "@/models/menu";

export async function POST(request) {
    const { menuname, price , description, image} = await request.json();
    await connectMongoDB();
    await Menu.create({
        menuname,
        price,
        description,
        image
    });
    return NextResponse.json({message: "Menu item created successfully"}, {status: 201});
}
    
export async function GET() {
    await connectMongoDB();
    const menuItems = await Menu.find({});
    return NextResponse.json(menuItems, {status: 200});
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Menu.findByIdAndDelete(id);
    return NextResponse.json({message: "Menu item deleted successfully"}, {status: 200});
}