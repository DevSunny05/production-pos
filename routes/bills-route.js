const express=require('express');
const {addBillsController,getBillsController } = require('../controllers/bills-controller');
const router=express.Router()

// routers
// add bill data

router.post('/add-bills',addBillsController)

// get bill data

router.get('/get-bills',getBillsController)










module.exports=router;