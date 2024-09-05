import express from 'express';
import { 
    createlisting, 
    deleteListing, 
    updateListing, 
    getListing 
} from '../Controller/Listing.controlller.js';
import { verifyToken } from '../Utility/verifyUser.js';


const router =express.Router();

router.post('/create', verifyToken ,createlisting);
router.delete('/delete/:id', verifyToken, deleteListing);
router.post('/update/:id', verifyToken, updateListing);
router.get('/get/:id', getListing);

export default router;