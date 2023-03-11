import express from 'express';

import * as q  from './soldier.management.mjs';
const router = express.Router();

router.get('/:id/ids', q.getIDS );
router.get('/:id/gmushim', q.getGmushim );
router.get('/:id/bonuses', q.getBonuses );
router.get('/:id/courses', q.getCourses );


router.post('/:id/courses/update', q.updateCourse);
router.post('/:id/courses/add', q.addCourse);
router.post('/:id/courses/delete', q.deleteCourse);


export default router