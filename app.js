// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const tourRoutes = require('./routes/tourRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();


const dbURI = process.env.MONGODB_URI;

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/tours', tourRoutes);
app.use('/api/users', userRoutes);

// MongoDB Connection (Cập nhật: bỏ useNewUrlParser và useUnifiedTopology)
mongoose.connect(dbURI)
  .then(() => console.log('Kết nối MongoDB Atlas thành công!'))
  .catch((err) => console.error('Kết nối MongoDB Atlas thất bại:', err));

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
