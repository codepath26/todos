"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useState, useEffect } from 'react';
// import axios from 'axios';
export default function NewTodo() {
  const [newTodo, setNewTodo] = useState("");
  const [todoList  , setTodoList] = useState([]);
  useEffect(()=>{
    const getAllTodos = async()=>{
      const response = await axios.get('/api/read');
      // console.log(response.data.todo);
      const arrayTodos = response.data.todos;
      console.log(arrayTodos , "todoarr")
      setTodoList(arrayTodos);
    }
    getAllTodos();
  },[]);
 
  const addTodo = async() => {
    try{
      const todo ={
        newTodo : newTodo , 
        status : "incompleted"
      }
      const response = await axios.post('/api/create' ,todo );
      console.log("From created data",response.data.todo);
      const savedTodo = response.data.todo;
      setTodoList(prevTodos =>{
        return [...prevTodos , savedTodo];
      })
    }catch(err){
      console.log(err , "this  is the error");
    }
  };
  const updateTodo = async(id)=>{

  };
  const deleteTodo =async(id)=>{
      try {
        const remaningTodos = todoList.filter((todo)=> todo._id !== id);
        setTodoList(remaningTodos);
        const response = await axios.delete(`/api/delete/${id}`);
        console.log(response , "delete from database");
        
      } catch (error) {
        
      }
  }
  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Todo App</h1>
      <div className=" flex justify-between ">
        <div className="w-full me-1">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="w-full p-2 border rounded text-black"
            placeholder="Enter new todo"
          />
        </div>
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-2 my-1 rounded "
        >
          Add
        </button>
      </div>
      <ul className="mt-4">
        {todoList.map((todo) => (
          <li
            key={todo._id}
            className={`${todo.status !== 'incompleted' ?  "bg-green-200"  :'bg-red-300' }   flex text-black items-center justify-between border-b py-2`}
          >
            <span>{todo.text}</span>
            <div>
              <button
                onClick={() =>
                  updateTodo(todo._id, prompt("Enter new text:", todo.text))
                }
                className="text-blue-500 mr-2"
              >
                Update
              </button>
              <button
                onClick={() => deleteTodo(todo._id)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
