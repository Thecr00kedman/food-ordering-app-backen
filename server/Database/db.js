import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()

const MONGO_URL=process.env.MONGO_URL;

const Connection =async() => {
    try {
       await mongoose.connect(MONGO_URL,{useUnifiedTopology:true, useNewUrlParser:true});
        console.log('Database Connected Successfully')
        
    } catch (error) {
        console.log("error while connecting to the database")
    }

}

export default Connection