const billsModel=require('../models/bills-model')


// add biilsa data
 const addBillsController=async(req,res)=>{
    try {
        const newBill=await billsModel(req.body)
        await newBill.save()
        return res.status(200).send("Bills Created Successful")
    } catch (error) {
        console.log(error)
        return res.status(404).send("Unable to Generate bills")
    }
}


// get bills data
const getBillsController=async(req,res)=>{
    try {
        const bills=await billsModel.find()
        return res.status(200).json(bills)
    } catch (error) {
        console.log(error)
    }
}


module.exports={addBillsController,getBillsController};