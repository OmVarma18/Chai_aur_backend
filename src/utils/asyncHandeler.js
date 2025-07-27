const asyncHandeler= (requestHandeler) => {
   (req,res,next)=>{
    Promise.resolve(requestHandeler(req,res,next)).catch((err)=>{next(err)})
   }
}



export {asyncHandeler}

/*
const asyncHandeler = () => {}
const asyncHandeler = (funct) => ()=> {}
const asyncHandeler = (funct) => async ()=> {}
*/

/*
const asyncHandeler = (funct) => async (req, res, next) => {
    try {
        await funct(req, res, next);
    } catch (error) {
        console.error('Error in async handler:', error);
        res.status(error.code || 500).json({success:false , message: 'Internal Server Error' });
        next(error); // Pass the error to the next middleware
    }
}
*/