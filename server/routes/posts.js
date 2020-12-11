import express from 'express';
import { getPosts } from '../controllers/posts.js'

const router =  express.Router();

//localhost:5000/posts | icky, /posts lives in caller
router.get('/', getPosts);

export default router;