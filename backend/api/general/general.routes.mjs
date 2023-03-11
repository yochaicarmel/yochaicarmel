import express from 'express';
import * as q from './general.management.mjs';

const router = express.Router();

router.get('/', q.getDoch1)
router.get('/:unit', q.getDoch1Unit);

export default router;