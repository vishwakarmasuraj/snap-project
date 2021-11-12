const Product = require('../models/createProduct')
const { successHandler, errorHandler } = require('../helper/responseHandler')
const constants = require('../constant/allConstants')

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */

const addProduct = async (req, res) => {
    try {
        const productAdd = await new Product({ userIds: req.userData._id, name: req.body.name, description: req.body.description })
        await productAdd.save()
        successHandler(res, constants.PRODUCT_CREATE_SUCCESS_MSG, productAdd)
    } catch (error) {
        errorHandler(res, error)
    }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */

const getProduct = async (req, res) => {
    try {
        const result = await Product.find({})
        successHandler(res, constants.PRODUCT_LISTING_SUCCESS, result)
    } catch (error) {
        errorHandler(res, error)
    }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */

const productTruncate = async (req, res) => {
    try {
        await Product.remove({})
        successHandler(res, constants.PRODUCT_TRUNCATE_MSG)
    } catch (error) {
        return errorHandler(res, error)
    }
}

module.exports = { addProduct, getProduct, productTruncate }