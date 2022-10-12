import { Router } from 'express';
import { UsersController } from '../controllers';

const router = Router();

router.post('/', UsersController.create);
router.get('/', UsersController.findAll);
router.get('/:id', UsersController.findOne);

export default router;
