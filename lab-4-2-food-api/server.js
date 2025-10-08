const express = require('express');
const cors = require('cors');
const path = require('path');
// TODO: import foodRoutes จาก './routes/foods'
// TODO: import logger middleware จาก './middleware/logger'
const foodRoutes = require('./routes/foods');
const logger = require('./middleware/logger');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
// TODO: ใช้ logger middleware
app.use(logger);
// TODO: ใช้ foodRoutes สำหรับ '/api/foods'
app.use('/api/foods', foodRoutes);

// Routes
app.get('/', (req, res) => {
    res.json({
        message: '🍜 Welcome to Food API!',
        version: '1.0.0',
        endpoints: {
            foods: '/api/foods',
            search: '/api/foods?search=ผัด',
            category: '/api/foods?category=แกง',
            spicy: '/api/foods?maxSpicy=3',
            vegetarian: '/api/foods?vegetarian=true',
            documentation: '/api/docs'
        }
    });
});

// TODO: สร้าง route GET /api/docs
// ส่งข้อมูล API documentation
app.get('/api/docs', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// TODO: สร้าง route GET /api/stats  
// ส่งสถิติต่างๆ เช่น จำนวนเมนูทั้งหมด, จำนวนแต่ละหมวด, etc.
app.get('/api/stats', (req, res) => {
    const foods = require('./data/foods.json');
    const total = foods.length;
    const byCategory = {};
    foods.forEach(f => {
        byCategory[f.category] = (byCategory[f.category] || 0) + 1;
    });
    res.json({ total, byCategory });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'API endpoint not found',
        requestedUrl: req.originalUrl
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Food API Server running on http://localhost:${PORT}`);
    console.log(`📖 API Documentation: http://localhost:${PORT}/api/docs`);
});