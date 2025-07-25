import moongose from 'mongoose';
import {DB_NAME} from 'Constants.js';
import connectDB from './db';

connectDB();


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