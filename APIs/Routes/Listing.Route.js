import express from 'express';
import { createlisting } from '../Controller/Listing.controlller.js';
import { verifyToken } from '../Utility/verifyUser.js';


const router =express.Router();

router.post('/create',verifyToken ,createlisting);

export default router;