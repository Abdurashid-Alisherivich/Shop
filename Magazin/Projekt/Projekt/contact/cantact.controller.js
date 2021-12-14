const cantactModel = require('./cantact.modle')

// get
async function getCantact(req, res) {
    try {
        const client = await cantactModel.find({})
        return res.status(200).json(client)
    } catch (error) {
        return res.status(400).send(error)
    }
}

// post
async function addClient(req, res) {
    try {
        const client = await cantactModel.create(req.body)
        return res.status(200).json(client)
    } catch (error) {
        return res.status(400).send(error)
    }
}

// delete
async function deleteClient(req, res) {
    try {
        const clientId = req.params.client_id
        await cantactModel.findByIdAndDelete(clientId)
        return res.status(200).send("Ma'lumot o'chirildi")
    } catch (error) {
        return res.status(400).send(error)
    }
}

module.exports = {
    getCantact,
    addClient,
 
    deleteClient
}
