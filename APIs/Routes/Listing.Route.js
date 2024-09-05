import express from 'express';
import { createlisting, deleteListing, updateListing } from '../Controller/Listing.controlller.js';
import { verifyToken } from '../Utility/verifyUser.js';


const router =express.Router();

router.post('/create', verifyToken ,createlisting);
router.delete('/delete/:id', verifyToken, deleteListing);
router.post('/update/:id', verifyToken, updateListing);

export default router;