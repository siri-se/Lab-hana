# HTTP vs Express Cheat Sheet

| Feature                 | HTTP Server           | Express Server          |
|-------------------------|--------------------|------------------------|
| Create Server           | `http.createServer()` | `express()` + `app.listen()` |
| Parsing Request         | ต้อง parse เอง       | JSON / URL params auto |
| Routing                 | เช็ค `req.url` + `req.method` | `app.get()`, `app.post()`, route params |
| Middleware              | ไม่มี ต้องทำเอง     | built-in & custom middleware |
| Error / 404 Handling    | ทำเองทุกอย่าง       | Middleware ง่าย ๆ |
| Boilerplate             | เยอะ               | น้อย & readable |
| Suitable for            | เรียนรู้ Node พื้นฐาน | สร้าง API จริง / production |

## สรุป
- **HTTP Server** เหมาะสำหรับการเรียนรู้พื้นฐานของ Node.js  
- **Express Server** เหมาะสำหรับการสร้าง API จริง ใช้งานสะดวกและโค้ดอ่านง่าย  
- Lab นี้ช่วยให้เห็นความต่างในเรื่อง **ความง่าย, ความยืดหยุ่น, การจัดการ routing และ middleware**  
