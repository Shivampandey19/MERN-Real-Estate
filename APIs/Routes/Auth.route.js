import express from 'express';
import { signin, signup } from '../Controller/Auth.controller.js';

const router = express.Router();

router.post("/signUp",signup);
router.post("/signIn",signin);

export default router;