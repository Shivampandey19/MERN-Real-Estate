import express from 'express';
import { google, signin, signup } from '../Controller/Auth.controller.js';

const router = express.Router();

router.post("/signUp",signup);
router.post("/signIn",signin);
router.post("/google",google);


export default router;