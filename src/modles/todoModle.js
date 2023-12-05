import mongoose from "mongoose";


const  todoSchema = new mongoose.Schema({
  text : {
    type : String,
    required : true,
  },
  status : {
    type : String,
    required : true, 
  }
});

const Todo = mongoose.models.Todo || mongoose.model('Todo', todoSchema);
export default Todo;