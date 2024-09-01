import express from 'express';
import { signup } from '../Controller/Auth.controller.js';

const router = express.Router();

router.post("/signUp",signup);

export default router;