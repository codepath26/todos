// pages/api/delete.js
import connectDB from '@/dbconfig/dbconfig';
import Todo from '@/modles/todoModle';
import { NextResponse } from 'next/server';

connectDB();

export async function  GET(){
  try {
    const response = await Todo.find({});
    console.log(response ,"get")
    return NextResponse.json({ todos : response},{ status: 200 });
    // return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
