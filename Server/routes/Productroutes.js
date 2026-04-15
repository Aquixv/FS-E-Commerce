const express = require('express');
const { protect } = require('../middleware/authMiddleware'); 
const router = express.Router();
const { createProductReview } = require('../controllers/Productcontroller');
const { getProducts, getProductsByCategory, getSingleProduct } = require('../controllers/Productcontroller');

router.get('/', getProducts);
router.get('/category/:category', getProductsByCategory);
router.get('/:id', getSingleProduct);
router.post('/:id/reviews', protect, createProductReview);
module.exports = router;