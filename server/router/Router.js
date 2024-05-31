import { Router } from 'express';
import * as AdminController from "../controllers/adminController.js"
import * as UserController from "../controllers/userController.js"
const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.post('/admin', AdminController.createAdmin);
router.get('/admin', AdminController.readAdmin);
router.put('/admin/', AdminController.updateAdmin);
router.delete('/admin/', AdminController.deleteAdmin);

router.post('/user', UserController.createUser);
router.get('/user', UserController.readUser);
router.put('/user/', UserController.updateUser);
router.delete('/user/', UserController.deleteUser);

export default router;
