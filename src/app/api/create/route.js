// pages/api/create.js
import connectDB from '@/dbconfig/dbconfig';
import Todo from '@/modles/todoModle';
import { NextResponse } from 'next/server';


connectDB();

export  async function POST(request) {
    try {
   
      const reqBody = await request.json()
        console.log("request body" , reqBody);
      const todo = new Todo(
        {
        text : reqBody.newTodo ,
        status : reqBody.status,
      });
      await todo.save();

      // Send the created todo as a response
      return NextResponse.json({todo} ,{status : 200});
      // return NextResponse.json({reqBody} ,{status : 200});
    } catch (error) {
      console.log(error)
     return NextResponse.json({ error });
    }
  }

