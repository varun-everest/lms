import express from 'express'
import { authRouter } from './authors.routes';
import { bookRouter } from './books.routes';
import { memRouter } from './members.routes';
import { loanRouter } from './loans.routes';
import { reservationRouter } from './reservations.routes';

const router = express.Router();

router.use('/', authRouter);
router.use('/', bookRouter);
router.use('/',loanRouter);
router.use('/', memRouter);
router.use('/', reservationRouter);

export default router;
