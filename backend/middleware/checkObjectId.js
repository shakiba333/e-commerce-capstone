/**
 * Checks if the req.params.id is a valid Mongoose ObjectId.
 *
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @param {Function} next - The Express next middleware function.
 */
const { isValidObjectId } = require('mongoose');

async function checkObjectId(req, res, next) {
    try {
        if (!isValidObjectId(req.params.id)) {
            res.status(404);
            // throw new Error(`Invalid ObjectId of: ${req.params.id}`);
        }
        next();
    } catch (error) {
        // Handle the error gracefully
        console.error('Error in checkObjectId middleware:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = checkObjectId;
