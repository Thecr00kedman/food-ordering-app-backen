import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()



const Connection =async(DB_USERNAME,DB_PASSWORD) => {
    const MONGO_URL=`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@foodzone.qzj8k9g.mongodb.net/?retryWrites=true&w=majority`;
    try {
       await mongoose.connect(MONGO_URL,{useUnifiedTopology:true, useNewUrlParser:true});
        console.log('Database Connected Successfully')
        
    } catch (error) {
        console.log(error)
        console.log("error while connecting to the database")
    }

}

export default Connection