const { Router } = require('express');
const adminController = require('../controllers/adminController');

const adminRouter = Router();

adminRouter.get('/admin/panel', adminController.adminPanelGet);
adminRouter.post('/admin/delete/:postID', adminController.deletePost);

module.exports = adminRouter;
