const { response } = require('express')
const orderModel = require('./order.model')

async function getOrder(req, res){
    try{
        const orders = await orderModel.find({})
        return res.status(200).json(orders)
    } catch(err){
        return res.status(400).send(err)
    }
}

async function addOrder(req, res){
    try {
        const order = await orderModel.create(req.body)
        res.status(200).json(order)
    } catch(err){
        return res.status(400).send(err)
    }
}

// async function checkOrder(req, res){
//     try{
//         let order = await orderModel.findOne({username:req.body.username})

//         if(!order){
//             return res.status(400).send('bunday foydalanuvchi yoq')
//         }

//         res.status(200).send(true)

//         const result = await bcrypt.compare(req.body.password, order.password)
//         if(!result){
//           return  res.status(400).send('kodingizni tekshiring')
//         }
//     }catch(err){
//             return res.status(400).send(err)
//     }
// }

// async function updateOrder(req, res){
//     try{
//         const userId = req.params.id
//         await orderModel.findByIdAndUpdate(userId, req.body)
//         res.status(200).send("Malomut yagilandi")
//     }catch(err){
//         return res.status(400).send(err)
//     }
// }  

// async function getElementByIdOrder(req, res){
//     try{
//         const clientId = req.params.clientId
//         await orderModel.findById(clientId, req.body)
//         res.status(200).send("Malomut topildi")
//     }catch(err){
//         return res.status(400).send(err)
//     }
// }

// async function deleteOrder(req, res){
//     try{
//             const userId = req.params.id
//             await orderModel.findByIdAndDelete(userId)
//             res.status(200).send("Malumot ochirilib yuborildi")
//     }catch(err){
//         return res.status(400).send(err)
//     }
// }


module.exports = {
    getOrder,
    addOrder,
    // updateOrder,
    // deleteOrder,
    // checkOrder
    // getElementByIdOrder
}