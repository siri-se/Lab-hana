// src/data/products.js
export const categories = [
    { id: 'all', name: 'ทั้งหมด' },
    { id: 'electronics', name: 'อิเล็กทรอนิกส์' },
    { id: 'clothing', name: 'เสื้อผ้า' },
    { id: 'books', name: 'หนังสือ' }
];

// ข้อมูลสินค้าพื้นฐาน - นักศึกษาจะเพิ่มเติมใน Challenge
export const products = [
    {
        id: 1,
        name: 'iPhone 15 Pro',
        category: 'electronics',
        price: 45900,
        image: 'https://placehold.co/300x300/007bff/ffffff?text=iPhone+15',
        description: 'สมาร์ทโฟนล่าสุดจาก Apple',
        inStock: true,
        rating: 4.8
    },
    {
        id: 2,
        name: 'เสื้อยืดผ้าฝ้าย',
        category: 'clothing',
        price: 299,
        image: 'https://placehold.co/300x300/ffc107/000000?text=T-Shirt',
        description: 'เสื้อยืดผ้าฝ้าย 100% นุ่มสบาย',
        inStock: true,
        rating: 4.2
    },
    {
        id: 3,
        name: 'หนังสือ React.js Guide',
        category: 'books',
        price: 650,
        image: 'https://placehold.co/300x300/17a2b8/ffffff?text=React+Book',
        description: 'คู่มือเรียนรู้ React.js ฉบับสมบูรณ์',
        inStock: false,
        rating: 4.7
    },
    {
        id: 4,
        name: 'Black Shiny Latex Suit',
        category: 'clothing',
        price: 100000,
        image: 'https://live.staticflickr.com/4100/4796521451_6dc9b038fc_z.jpg',
        description: 'Shiny black tight and slippery latex suit',
        inStock: true,
        rating: 5.0
    },
    {
        id: 5,
        name: 'Red Glossy Latex Dress',
        category: 'clothing',
        price: 120000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRDFMYB9DOalbLkZSA_guADpHgPL8iyd1N8w&s',
        description: 'Tight-fitting red latex dress, glossy finish',
        inStock: true,
        rating: 4.8
    },
    {
        id: 6,
        name: 'Silver Metallic Latex Pants',
        category: 'clothing',
        price: 95000,
        image: 'https://sissypantyshop.com/cdn/shop/files/S269872ffb568480f9f541b46396f416cL.webp?v=1704960555&width=1445',
        description: 'High-waist silver metallic latex pants, stretchy and shiny',
        inStock: true,
        rating: 4.9
    }
];