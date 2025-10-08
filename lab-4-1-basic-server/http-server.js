const http = require('http');
const url = require('url');

const PORT = 3000;

// TODO: สร้างข้อมูลจำลอง students array
// ควรมี id, name, major, year อย่างน้อย 3 คน
const students = [
  { id: 1, name: 'Klu', major: 'Software Engineering', year: 2 },
  { id: 2, name: 'Klux', major: 'Computer Engineering', year: 3 },
  { id: 3, name: 'Klan', major: 'Computer Engineering', year: 1 }
];


const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const method = req.method;
    
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    // TODO: จัดการ route GET /
    // ส่งข้อความต้อนรับและรายการ endpoints ที่มี
    if (method === 'GET' && pathname === '/') {
        res.end(JSON.stringify({
            message: 'Welcome to the HTTP Server!',
            endpoints: [
                'GET /students',
                'GET /students/:id',
                'GET /students/major/:major'
            ]
        }));
    } 
    // TODO: จัดการ route GET /students
    // ส่งรายการนักศึกษาทั้งหมด
    else if (method === 'GET' && pathname === '/students') {
        res.end(JSON.stringify(students));
    } 
    // TODO: จัดการ route GET /students/:id  
    // ส่งข้อมูลนักศึกษาตาม ID
    // ตัวอย่าง: /students/1
    else if (method === 'GET' && pathname.startsWith('/students/major/')) {
        const major = decodeURIComponent(pathname.split('/')[3]);
        const filtered = students.filter(s => s.major === major);
        res.end(JSON.stringify(filtered));
    } 
    // TODO: จัดการ route GET /students/major/:major
    // กรองนักศึกษาตามสาขา
    // ตัวอย่าง: /students/major/วิศวกรรม
    else if (method === 'GET' && pathname.startsWith('/students/')) {
        const id = parseInt(pathname.split('/')[2]);
        const student = students.find(s => s.id === id);
        if (student) {
            res.end(JSON.stringify(student));
        } else {
            res.statusCode = 404;
            res.end(JSON.stringify({ error: 'Student not found' }));
        }
    } 
    // TODO: จัดการกรณี 404 Not Found
    // ส่ง status 404 และข้อความที่เหมาะสม
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Route not found' }));
    }
});

server.listen(PORT, () => {
    console.log(`🌐 HTTP Server running on http://localhost:${PORT}`);
    console.log('Available endpoints:');
    console.log('  GET /');
    console.log('  GET /students');
    console.log('  GET /students/:id');
    console.log('  GET /students/major/:major');
});