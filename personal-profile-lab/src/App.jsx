import React from 'react';
import ProfileCard from './ProfileCard';

function App() {
    // ข้อมูลโปรไฟล์ตัวอย่าง
const myProfile = {
    name: "สิริ รัตนรินทร์",
    studentId: "67543210024-5", 
    major: "วิศวะกรรมซอฟต์แวร์",
    year: 2,
    age: 19,
    gpa: 4.00,
    email: "rattanarin.siri@gmail.com",
    hobbies: [
        // เพิ่มงานอดิเรกของคุณ 5 อย่าง
        "หายใจ",
        "ทำสัญญากับปีศาจ",
        "Leaf village dancing",
        "ฝึกแร็ปเขมร",
        "นั่งเขียนกรีมัวล์"
    ],
    skills: [
        // เพิ่มทักษะของคุณ 4-6 อย่าง
        "กระสุนวงจักร",
        "หมัดเจ้าพิภพ",
        "อะโดร่าเบิร์สต์",
        "เขียนหนังสือมือซ้าย",
        "ทำLab3.1และ3.2ส่งได้ทันเวลา"
    ],
    socialLinks: [
        { platform: "GitHub", url: "https://github.com/siri-se" },
        { platform: "LinkedIn", url: "https://linkedin.com/in/อึ่ง-โช-0b342937b/" },
        { platform: "Instagram", url: "https://www.instagram.com/babytapeworm/" },
        // เพิ่มเติมตามต้องการ\
        { platform: "Facebook", url: "https://lomando.com/main.html"}
    ]
};

    return (
        <div style={{ 
            minHeight: '100vh', 
            background: 'linear-gradient(45deg, #f0f2f5 0%, #e8eaf6 100%)',
            padding: '20px'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h1 style={{ 
                    color: '#333', 
                    fontSize: '32px',
                    margin: '20px 0'
                }}>
                    🎓 Personal Profile Card
                </h1>
                <p style={{ color: '#666', fontSize: '16px' }}>
                    Lab 3.1 - ทำความรู้จักกับ React.js และ JSX
                </p>
            </div>
            
            <ProfileCard profile={myProfile} />
        </div>
    );
}

export default App;