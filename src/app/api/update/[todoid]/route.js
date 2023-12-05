// pages/api/delete.js
import connectDB from '@/dbconfig/dbconfig';
import Todo from '@/modles/todoModle';
import { NextResponse } from 'next/server';

connectDB();

export async function  PUT(request , {params}){
  const {todoid} = params;
  console.log(todoid);
  const id  = todoid;
  try {
    const response = await Todo.findOneAndUpdate({_id : id},{status : 'completed'});
    console.log(response, "put");
    return NextResponse.json({ todos : response},{ status: 200 });
    // return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
