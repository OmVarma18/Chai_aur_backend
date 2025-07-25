import moongose from 'moongose';
import {DB_NAME} from 'src\Constants.js';

const connectDB= async ()=>{
    try {
        const retconnection=await moongose.connect(`${process.env.MONGO_URI}/${DB_NAME}`, )
        console.log(`MongoDB connected: ${retconnection.connection.host}`);
        
    } catch (error) {
        console.log(`Error connecting to database: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;