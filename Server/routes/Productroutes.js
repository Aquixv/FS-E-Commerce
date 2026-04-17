const express = require('express');
const { protect, isSeller } = require('../middleware/authMiddleware'); 
const router = express.Router();
const { createProductReview } = require('../controllers/Productcontroller');
const { getProducts, getProductsByCategory, getSingleProduct, createProduct } = require('../controllers/Productcontroller');
const { upload, cloudinary } = require('../cloudinary');

router.get('/', getProducts);
router.get('/category/:category', getProductsByCategory);
router.get('/:id', getSingleProduct);
router.post('/:id/reviews', protect, createProductReview);
// router.post('/', protect, isSeller, createProduct);
router.post('/', protect, isSeller, upload.single('image'), createProduct);
module.exports = router;