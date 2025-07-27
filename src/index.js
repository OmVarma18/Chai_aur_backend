import { app } from './app.js';
import connectDB from './db/index.js';
import dotenv from 'dotenv'

dotenv.config({ path: './.env' })
connectDB().then(
    app.onerror((err)=>{
        console.error('Error in Express app:', err);
        throw err; // Re-throw the error to be caught by the catch block below
    }),
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running on port ${process.env.PORT || 3000}`);
    })
).catch((err)=>{
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the process with failure
});


/*
import express from 'express';

const app = express();
;(async()=>{
    try {

        await moongose.conncect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.onerror((err) => {
            console.error('Error in Express app:', err);
            throw err;
        });
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running on port ${process.env.PORT || 3000}`);
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
})()
   */ 