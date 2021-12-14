const clientModel = require('./client.model')

// get
async function getClient(req, res) {
    try {
        const client = await clientModel.find({})
        return res.status(200).json(client)
    } catch (error) {
        return res.status(400).send(error)
    }
}

// post
async function addClient(req, res) {
    try {
        const client = await clientModel.create(req.body)
        return res.status(200).json(client)
    } catch (error) {
        return res.status(400).send(error)
    }
}

// update
async function updateClient(req, res) {
    try {
        const clientId = req.params.client_id
        await clientModel.findByIdAndUpdate(clientId, req.body)
        return res.status(200).send("Ma'lumot yangilandi")
    } catch (error) {
        return res.status(400).send(error)
    }
}

// delete
async function deleteClient(req, res) {
    try {
        const clientId = req.params.client_id
        await clientModel.findByIdAndDelete(clientId)
        return res.status(200).send("Ma'lumot o'chirildi")
    } catch (error) {
        return res.status(400).send(error)
    }
}

module.exports = {
    getClient,
    addClient,
    updateClient,
    deleteClient
}