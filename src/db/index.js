import mongoose from 'mongoose';
import {DB_NAME} from '../Constants.js';

const connectDB= async ()=>{
    try {
        const retconnection=await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`, )
        console.log(`MongoDB connected: ${retconnection.connection.host}`);
        
    } catch (error) {
        console.log(`Error connecting to database: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;