const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config(); 
require('./connection');
const path = require('path');

const passport = require('passport'); 

const port = process.env.PORT || 1500; 
const authRoutes = require('./routes/routes');

app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(cors({
  origin: ["http://localhost:5173", ""],
  credentials: true
}));
app.use(express.json());

require('./config/Passport')(passport); 
app.use(passport.initialize());

app.use('/api/users/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('API Live');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});