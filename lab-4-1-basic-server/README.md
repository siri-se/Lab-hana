# Lab-4-1-basic-server
การทดลองสร้าง Web server แบบพื้นฐานด้วย Node.js สองวิธีคือ HTTP Module <ins>แบบดั้งเดิม (http-server.js)</ins> และ <ins>Express Framework (express-server.js)</ins>
ซึ่งทดสอบโดยการ GET endpoint ข้อมูลใน postman

## การทดสอบ
เริ่มต้นการทดสอบโดยการเปิดเซิร์ฟเวอร์จากทั้งสองไฟล์ (http-server.js และ express-server.js) ด้วยคำสั่งเหล่านี้

* ```node http-server.js``` รันบนพอร์ต 3000
  <img width="1178" height="205" alt="image" src="https://github.com/user-attachments/assets/72af5b37-d61b-44be-a708-795dde6f82e3" />
  - ตรวจสอบ root (GET http://localhost:3000/)
    
    <img width="522" height="200" alt="image" src="https://github.com/user-attachments/assets/b95c71ae-7692-4589-9898-4e02c7130fb5" />
  - ดูรายชื่อนักศึกษา (GET http://localhost:3000/students)
    
    <img width="476" height="484" alt="image" src="https://github.com/user-attachments/assets/fd4884b9-bad7-4bc1-aaf4-364813638c48" />
  - ดูนักศึกษาตาม ID (GET http://localhost:3000/students/2)
    
    <img width="420" height="166" alt="image" src="https://github.com/user-attachments/assets/8cc63b9b-0eb1-446b-b644-2e725d5aff34" />
  - กรองนักศึกษาตามสาขา (GET http://localhost:3000/students/major/[major])
 
    <img width="456" height="164" alt="image" src="https://github.com/user-attachments/assets/15926485-81df-4509-a685-7abdf7c6e93f" />
* ```node express-server.js``` รันบนพอร์ต 3001
  <img width="1195" height="195" alt="image" src="https://github.com/user-attachments/assets/f1be8117-de2c-42d0-85c4-a25a8a229b70" />
    - ตรวจสอบ root (GET http://localhost:3001/)
    
    <img width="509" height="238" alt="image" src="https://github.com/user-attachments/assets/e122a1ff-5429-4e2e-98b4-331786febc4d" />
    
  - ดูรายชื่อนักศึกษา (GET http://localhost:3001/students)
    
    <img width="584" height="477" alt="image" src="https://github.com/user-attachments/assets/240cdd7a-5c3d-4f0f-9327-005859844f37" />
    
  - ดูนักศึกษาตาม ID (GET http://localhost:3001/students/2)
    
    <img width="430" height="161" alt="image" src="https://github.com/user-attachments/assets/b4c5a40d-b345-4ad0-8205-5961b313f97c" />
    
  - กรองนักศึกษาตามสาขา (GET http://localhost:3001/students/major/[major])
 
    <img width="456" height="164" alt="image" src="https://github.com/user-attachments/assets/15926485-81df-4509-a685-7abdf7c6e93f" />
    


