const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const FOODS_FILE = path.join(__dirname, '../data/foods.json');

// Helper function: อ่านข้อมูลอาหาร
const loadFoods = () => {
    try {
        const data = fs.readFileSync(FOODS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error loading foods:', error);
        return [];
    }
};

// GET /api/foods - ดึงรายการอาหารทั้งหมด (พร้อม filtering)
router.get('/', (req, res) => {
    try {
        let foods = loadFoods();
        
        const { search, category, maxSpicy, vegetarian, available, maxPrice } = req.query;
        // TODO: เพิ่ม query parameters สำหรับ filtering:
        // - search: ค้นหาจากชื่อหรือคำอธิบาย
        // - category: กรองตามประเภทอาหาร
        // - maxSpicy: กรองระดับความเผ็ดไม่เกินที่กำหนด
        // - vegetarian: กรองอาหารมังสวิรัติ (true/false)
        // - available: กรองอาหารที่พร้อมเสิร์ฟ (true/false)
        // - maxPrice: กรองราคาไม่เกินที่กำหนด
        if (search)
            foods = foods.filter(f => f.name.includes(search) || f.description.includes(search));
        if (category)
            foods = foods.filter(f => f.category === category);
        if (maxSpicy)
            foods = foods.filter(f => f.spicyLevel <= parseInt(maxSpicy));
        if (vegetarian)
            foods = foods.filter(f => f.vegetarian === (vegetarian === 'true'));
        if (available)
            foods = foods.filter(f => f.available === (available === 'true'));
        if (maxPrice)
            foods = foods.filter(f => f.price <= parseInt(maxPrice));
        
        
        // TODO: ทำ filtering logic ตาม query parameters
        
        res.json({
            success: true,
            data: foods,
            total: foods.length,
            filters: { search, category, maxSpicy, vegetarian, available, maxPrice }
            
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching foods'
        });
    }
});

// TODO: GET /api/foods/:id - ดึงข้อมูลอาหารตาม ID
router.get('/:id', (req, res) => {
    const foods = loadFoods();
    const food = foods.find(f => f.id === parseInt(req.params.id));
    if (!food) return res.status(404).json({ success: false, message: 'Food not found' });
    res.json({ success: true, data: food });
});

// TODO: GET /api/foods/category/:category - ดึงอาหารตามประเภท
router.get('/category/:category', (req, res) => {
    const foods = loadFoods().filter(f => f.category === req.params.category);
    res.json({ success: true, total: foods.length, data: foods });
});

// TODO: GET /api/foods/random - ดึงอาหารแบบสุ่ม 1 จาน
router.get('/random', (req, res) => {
    const foods = loadFoods();
    const randomFood = foods[Math.floor(Math.random() * foods.length)];
    res.json({ success: true, data: randomFood });
});

module.exports = router;