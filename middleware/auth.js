const jwt = require('jsonwebtoken')

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
const verifyToken = async (req, res, next) => {
    try {
        const token = await req.headers.authorization
        const { data } = await jwt.verify(token, process.env.SECRET_KEY)
        req.userData = data
        next()
    } catch (error) {
        console.log(error)
        return res.status(404).json({ message: 'Invalid token' })
    }
}

module.exports = { verifyToken }