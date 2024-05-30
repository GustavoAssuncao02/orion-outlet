import { Router } from 'express';
import * as AdminController from "../controllers/AdminController.js"

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.post('/admin', AdminController.createAdmin);
router.get('/admin', AdminController.readAdmin);
router.put('/admin/', AdminController.updateAdmin);
router.delete('/admin/', AdminController.deleteAdmin);

export default router;
