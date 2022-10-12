import { Router } from 'express';
import { LoansController } from '../controllers/loans.controller';

const router = Router();

router.post('/', LoansController.create);
router.get('/user/:id', LoansController.getUserLoans);

export default router;
