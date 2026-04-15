const User = require('../models/Schema');

const toggleFavorite = async (req, res) => {
  try {
    const userId = req.user._id;
    const productId = req.params.productId;

    const user = await User.findById(userId);
    const isFavorited = user.favorites.includes(productId);

    if (isFavorited) {
      user.favorites.pull(productId);
    } else {
      user.favorites.push(productId);
    }

    await user.save();
    res.status(200).json(user.favorites);

  } catch (error) {
    console.error("Favorite toggle error:", error);
    res.status(500).json({ message: "Server error toggling favorite" });
  }
};
const getFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate('favorites');
    res.status(200).json(user.favorites);
  } catch (error) {
    res.status(500).json({ message: "Server error fetching favorites" });
  }
};

module.exports = { toggleFavorite, getFavorites };