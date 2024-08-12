import { Router } from 'express';
import * as AdminController from "../controllers/adminController.js"
import * as UserController from "../controllers/userController.js"
import * as ItemController from "../controllers/itemController.js"
import * as imgController from "../controllers/imgController.js"
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

router.post('/item', ItemController.createItem);
router.get('/item', ItemController.readItem);
router.put('/item/', ItemController.updateItem);
router.delete('/item/', ItemController.deleteItem);


router.post('/img/', imgController.uploadCamisaPremium);
export default router;
