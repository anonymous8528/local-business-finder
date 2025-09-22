const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Import model
const Business = require('./models/Business');

// Seed dummy data (runs once on startup if DB is empty)
const seedData = async () => {
  const count = await Business.countDocuments();
  if (count === 0) {
    await Business.insertMany([
      { name: 'Local Cafe', address: '123 Main St, City' },
      { name: 'Tech Shop', address: '456 Oak Ave, City' },
      { name: 'Bookstore', address: '789 Pine Rd, City' }
    ]);
    console.log('Dummy businesses seeded');
  }
};
seedData();

// Routes
app.get('/businesses', async (req, res) => {
  try {
    const businesses = await Business.find();
    res.json(businesses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(Server running on http://localhost:);
});
