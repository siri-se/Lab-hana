# Lab-4-3-contact-form
เป็นการต่อยอดจาก Lab 4.2 โดยเน้นการสร้าง RESTful API สำหรับจัดการข้อมูลผู้ใช้และรายการอาหาร นักศึกษาจะได้ฝึกทั้งการ สร้าง อ่าน แก้ไข และลบข้อมูล (CRUD) พร้อมการ 
ตรวจสอบความถูกต้องของข้อมูล (Validation) และการใช้ middleware เช่น logger และ error handler สำหรับการจัดการ request/response API นี้ยังรองรับการค้นหาและกรองข้อมูล พร้อม HTML ตัวอย่างเพื่อทดลองเรียกใช้งาน API ได้ง่าย

## การทดสอบ
* ```node http-server.js``` รันบนพอร์ต 3000
<img width="1043" height="283" alt="image" src="https://github.com/user-attachments/assets/89570830-46ac-4d34-b1d0-f8e10b2e9af6" />

จะได้หน้าต่างตามรูป
<img width="1384" height="890" alt="image" src="https://github.com/user-attachments/assets/95ec517c-1dfd-4d3e-b7c3-da288f2c51ec" />

* ตัวอย่างใส่ข้อมูลอย่างถูกต้องตามที่กำหนดไว้ในแต่ละช่องของฝั่ง "ฟอร์มติดต่อเรา"
  <img width="615" height="845" alt="image" src="https://github.com/user-attachments/assets/93020c41-7fa4-4033-ae09-c0c7a686c2e4" />
  
  ซึ่งจะสามารถส่งข้อความได้ปกติ
  <img width="1327" height="94" alt="image" src="https://github.com/user-attachments/assets/1a03ea61-9ad4-4438-912a-24f3e5303f11" />

* ตัวอย่างใส่ข้อมูลอย่างไม่ถูกต้องตามที่กำหนดไว้ในแต่ละช่องของฝั่ง "ฟอร์มติดต่อเรา"
  <img width="568" height="854" alt="image" src="https://github.com/user-attachments/assets/9d0f5282-4b77-4b5d-a137-8ddf99706b9f" />

  ซึ่งจะไม่สามารถส่งข้อมความได้และจะขึ้นคำเตือนต่างกันไปในแต่ละช่องพร้อมเหตุผล
  <img width="543" height="282" alt="image" src="https://github.com/user-attachments/assets/e6b22ff1-396d-46cd-9b11-c403c6c69331" />
  <img width="543" height="375" alt="image" src="https://github.com/user-attachments/assets/4fe9cc2e-17ce-4104-b02e-8b28ba3cf669" />
  <img width="1193" height="230" alt="image" src="https://github.com/user-attachments/assets/2b83fb5f-182a-47d1-9cc3-861ac5bfed8a" />

* ตัวอย่างใส่ข้อมูลอย่างถูกต้องตามที่กำหนดไว้ในแต่ละช่องของฝั่ง "ให้คะแนนและความคิดเห็น"
<img width="589" height="499" alt="image" src="https://github.com/user-attachments/assets/6d7ae32f-a802-4914-838d-236fa1fb7133" />

ซึ่งจะสามารถส่งความคิดเห็นพร้อมให้เรตติ้งได้ปกติ
<img width="1172" height="91" alt="image" src="https://github.com/user-attachments/assets/aaf7639a-90c1-422a-b1e3-53de6cf414ed" />

* ตัวอย่างใส่ข้อมูลอย่างไม่ถูกต้องตามที่กำหนดไว้ในแต่ละช่องของฝั่ง "ให้คะแนนและความคิดเห็น"
<img width="553" height="527" alt="image" src="https://github.com/user-attachments/assets/c899be49-2abf-4b39-ac07-e6b503cf992b" />

ซึ่งจะไม่สามารถส่งความคิดเห็นได้และจะขึ้นคำเตือนพร้อมเหตุผล
<img width="1198" height="166" alt="image" src="https://github.com/user-attachments/assets/7ea9cc8e-6368-4672-9cd1-1268b27919ee" />

* สามารถดูข้อมูลต่างๆได้จากหน้าต่างข้างล่าง
  - ดูข้อมูลติดต่อ
  <img width="1135" height="477" alt="image" src="https://github.com/user-attachments/assets/7aaf8e7f-6883-4ed0-ac32-7b86e605ee80" />
  
  - สถิติความคิดเห็น
    <img width="1128" height="242" alt="image" src="https://github.com/user-attachments/assets/98af3791-33cc-4b3c-985b-d82efd4f8003" />

  - สถานะ API
    <img width="1138" height="309" alt="image" src="https://github.com/user-attachments/assets/738c8e03-8dfe-4685-b656-23a2f804b2c6" />

  - เอกสาร API
    <img width="1123" height="463" alt="image" src="https://github.com/user-attachments/assets/bc7f76a0-f8ea-4a52-a983-d01266dffd7f" />

* Demo Video
  https://drive.google.com/file/d/180wBimPU5LC0hV7uejGNxpxhIiuYpeRo/view?usp=sharing


