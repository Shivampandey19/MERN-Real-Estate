import express from 'express';
import { test, updateUser } from '../Controller/User.controller.js';
import { verifyToken } from '../Utility/verifyUser.js';


const router = express.Router();

router.get('/test', test);
router.post('/update/:id', verifyToken, updateUser);

export default router;