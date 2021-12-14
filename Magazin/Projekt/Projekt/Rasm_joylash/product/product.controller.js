const productModel = require('./product.model');
const uuid = require('uuid').v4;
const fs = require('fs');


async function getProduct(req, res) {
    try {
        const products = await productModel.find({})
        return res.status(200).json(products)
    } catch (err) {
        return res.status(400).sen(err)
    }
}

async function addProduct(req, res) {
    try {
        const newProduct = new productModel({
            name: req.body.name,
            title: req.body.title,
            category: req.body.category,
            imagePath: req.file.destination + "/" + req.file.filename,
            price: req.body.price
        });
        await newProduct.save();
        res.status(201).json({ xabar: "Rasm muvaffaqiyatli yuklandi!" });
    } catch (err) {
        return res.status(400).send(err)
    }
}

async function updateProduct(req, res) {
    try {
        const productId = req.params.productId;
        const oldImagePath = await productModel.findById(productId).select('imagePath -_id');
        await productModel.findByIdAndUpdate(productId, {
            name: req.body.name,
            title: req.body.title,
            category: req.body.category,
            imagePath: req.file.destination + "/" + req.file.filename,
            price: req.body.price
        })

        fs.unlink(oldImagePath.imagePath,
            function (err) {
                if (err) throw err;
                console.log('File Deleted.');
            }
        );

        res.status(200).send("Malumot yangilandi")
    } catch (err) {
        return res.status(400).send(err)
    }
}


async function deleteProduct(req, res) {
    try {
        const productId = req.params.id
        await productModel.findByIdAndDelete(productId)
        res.status(200).send("Malumot o'chirib yuborildi")
    } catch (err) {
        return res.status(400).send(err)
    }
}

module.exports = {
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct,

}