import express from 'express';
import { google, signin, signout, signup } from '../Controller/Auth.controller.js';

const router = express.Router();

router.post("/signUp",signup);
router.post("/signIn",signin);
router.post("/google",google);
router.get('/signOut',signout)

export default router;