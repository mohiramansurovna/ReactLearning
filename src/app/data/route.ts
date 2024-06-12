import mainTopics from "@/topics";
import { NextRequest, NextResponse } from "next/server";
export async function GET(request:NextRequest) {
    const searchParams=request.nextUrl.searchParams;
    const query=searchParams.get('query');
    switch(query){
        case 'js':
            return NextResponse.json(mainTopics.js); 
        case 'react':
            return NextResponse.json(mainTopics.react);
        case 'next':
            return NextResponse.json(mainTopics.next);  
    }
}
