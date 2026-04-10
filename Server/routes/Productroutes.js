const express = require('express');
const router = express.Router();
const { getProducts, getProductsByCategory, getSingleProduct } = require('../controllers/Productcontroller');

router.get('/', getProducts);
router.get('/category/:category', getProductsByCategory);
router.get('/:id', getSingleProduct);

module.exports = router;