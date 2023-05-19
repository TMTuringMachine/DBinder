import express from 'express';
const router = express.Router();
import { fileUpload } from '../utils/multer.js';
import {
  fileUploadController,
  getBookFromIPFS,
  getAllBooks,
  getBookData,
  getBooksOfAuthor,
} from '../controllers/book.controller.js';

router.post('/upload', fileUpload.single('book'), fileUploadController);
router.post('/get', getBookFromIPFS);
router.get('/getAll', getAllBooks);
router.get('/get/:ID', getBookData);
router.get('/getBooksOfAuthor/:id', getBooksOfAuthor);

export default router;
