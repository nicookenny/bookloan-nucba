import { Router } from 'express';
import { BooksController } from '../controllers/books.controller';

const router = Router();

router.post('/', BooksController.create);

export default router;
