import express from 'express';
const router = express.Router();
import { fileUpload } from '../utils/multer.js';
import {
    fileUploadController
} from '../controllers/book.controller.js'

router.post('/upload',fileUpload.single('book'),fileUploadController);


export default router;