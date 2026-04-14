const Product = require('../models/Product');

const getProducts = async (req, res) => {
  try {
    const limit = req.query.limit !== undefined ? parseInt(req.query.limit) : 30;
    const skip = parseInt(req.query.skip) || 0;
    const searchFilter = req.query.keyword
      ? { title: { $regex: req.query.keyword, $options: 'i' } }
      : {};
    const products = await Product.find({ ...searchFilter })
                                  .skip(skip)
                                  .limit(limit);
                                  
    const total = await Product.countDocuments({ ...searchFilter });
      
    res.status(200).json({ 
      products,
      total,
      skip,
      limit
    }); 
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Server error fetching products" });
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    const categoryName = req.params.category;
    const limit = parseInt(req.query.limit) || 30;
    const skip = parseInt(req.query.skip) || 0;

    const products = await Product.find({ category: categoryName })
                                  .skip(skip)
                                  .limit(limit);

    const total = await Product.countDocuments({ category: categoryName });
    
    res.status(200).json({ 
      products,
      total,
      skip,
      limit
    });
  } catch (error) {
    console.error("Error fetching category:", error);
    res.status(500).json({ message: "Server error fetching category" });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    
    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching single product:", error);
    res.status(500).json({ message: "Server error fetching product" });
  }
};

module.exports = { getProducts, getProductsByCategory, getSingleProduct };