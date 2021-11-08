const Product = require('../models/createProduct')
const { successHandler, errorHandler } = require('../helper/responseHandler')
const constants = require('../constant/allConstants')

const addProduct = async (req, res) => {
    try {
        console.log('req.userData------|>', req.userData)
        const productAdd = await new Product({ userIds: req.userData._id, name: req.body.name, description: req.body.description })
        productAdd.save()
        successHandler(res, constants.PROJECT_CREATE_SUCCESS_MSG)
    } catch (error) {
        errorHandler(res, error)
    }
}

const getProduct = async (req, res) => {
    try {
        const result = await Product.find({})
        successHandler(res, constants.PROJECT_LISTING_SUCCESS, result)
    } catch (error) {
        errorHandler(res, error)
    }
}

const productTruncate = async (req, res) => {
    try {
        await Product.remove({})
        res.status(200).json({ message: 'product truncated' })
    } catch (error) {
        return res.status(500).json({ message: 'something went wrong' })
    }
}


module.exports = { addProduct, getProduct, productTruncate }