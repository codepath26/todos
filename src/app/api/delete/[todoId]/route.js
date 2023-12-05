// pages/api/delete.js
import connectDB from '@/dbconfig/dbconfig';
import Todo from '@/modles/todoModle';
import { NextResponse } from 'next/server';

connectDB();

export async function DELETE(request ,{params}){
  console.log("att the delete function");
  console.log(params) 
  const {todoId} = params;
  try {
    console.log(todoId);
    const response = await Todo.deleteOne({_id :todoId});
    console.log("response" , response);
    return NextResponse.json({response},{ status: 200 });
    // return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error } , {status : 500});
  }
}
