import express from 'express';
import { users } from '../data.js';
import { successResponse, errorResponse } from '../common/response.js';

const router = express.Router();

router.get('/data', (req, res) => {
    res.json(successResponse(users));
});


export default router;