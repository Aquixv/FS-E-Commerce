const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config(); 
require('./connection');
const path = require('path');
// const User = require('./models/Schema');
const port = process.env.PORT || 1500; 
const authRoutes = require('./routes/routes');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');


app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(cors({
  origin: ["http://localhost:5173", ""],
  credentials: true
}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API Live');
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
app.use('/api/users', authRoutes);