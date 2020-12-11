import express from 'express';

const router =  express.Router();

//localhost:5000/posts | icky, /posts lives in caller
router.get('/', (req,res)=>{
    res.send('This Works!!!');
});

export default router;