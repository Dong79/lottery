const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/ErrorHandler');

const ItemRoutes = require('./routes/ItemRoutes');
const DrawRoutes = require('./routes/DrawRoutes');
const HistoryRoutes = require('./routes/HistoryRoutes');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/items', ItemRoutes);
app.use('/api/draw', DrawRoutes);
app.use('/api/history', HistoryRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
