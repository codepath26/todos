import mongoose from "mongoose";
 async function connectBD() {
  try{
     console.log("at he connection connectedDEB")
    await mongoose.connect(`${process.env.MONGO_URL}`);
    
  }
  catch(err){
    console.log('something went qronf')
    console.log(err);
  }
}
export default connectBD;

