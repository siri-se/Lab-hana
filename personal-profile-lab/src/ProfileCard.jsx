import "./ProfileCard.css";
import React, { useState } from "react";

function ProfileCard({ profile }) {
  //interactive
  const [viewCount, setViewCount] = useState(0);
  const [favoriteHobbies, setFavoriteHobbies] = useState([]);
  const [showContactForm, setShowContactForm] = useState(false);

  const handleCardClick = () => {
    // TODO: เพิ่ม view count
    setViewCount(prev => prev + 1);
  };

  const toggleFavoriteHobby = (hobby) => {
    // TODO: เพิ่ม/ลบ hobby จาก favorites
    setFavoriteHobbies(prev =>
        prev.includes(hobby)
            ? prev.filter(h => h !== hobby)
            : [...prev, hobby]
    );
  };

  //form subnit
  const handleSubmitContact = (e) => {
    e.preventDefault();
    alert("ส่งข้อความเรียบร้อยแล้ว!");
    setShowContactForm(false);
 };

  // ฟังก์ชันสำหรับแสดง Avatar (ตัวอักษรแรกของชื่อ)
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  //Darkmode
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // ฟังก์ชันจัดการเมื่อคลิกปุ่ม Contact
  const handleContactClick = (e) => {
    // TODO: แสดง contact form แทน alert
     e.stopPropagation();
    setShowContactForm(true);
};

  // TODO: เพิ่ม className conditionally
  const cardClassName = `profile-card ${isDarkMode ? "dark-mode" : ""}`;

  // ฟังก์ชันจัดการเมื่อคลิกที่ skill
  const handleSkillClick = (skill) => {
    alert(`${profile.name} มีความเชี่ยวชาญใน ${skill}!`);
  };

  // TODO: นักศึกษาจะเพิ่ม state และ functions เพิ่มเติมในส่วน Challenge

  return (
    <div className={cardClassName} onClick={handleCardClick}>
      {/* ส่วนหัว - รูปและชื่อ */}
      <div className="profile-header">
        {/* Dark Mode Toggle */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? "🌙" : "☀️"}
        </button>

        <div className="profile-avatar">{getInitials(profile.name)}</div>
        <h1 className="profile-name">{profile.name}</h1>
        <div className="student-id">{profile.studentId}</div>
      </div>

      {/* ข้อมูลพื้นฐาน */}
      <div className="profile-info">
        <div className="info-item">
          <div className="info-label">สาขา</div>
          <div className="info-value">{profile.major}</div>
        </div>
        <div className="info-item">
          <div className="info-label">ชั้นปี</div>
          <div className="info-value">{profile.year}</div>
        </div>
        <div className="info-item">
          <div className="info-label">อายุ</div>
          <div className="info-value">{profile.age} ปี</div>
        </div>
        <div className="info-item">
          <div className="info-label">เกรด</div>
          <div className="info-value">
            {profile.gpa.toFixed(2)}
            {profile.gpa >= 3.5 && " 🌟"}
          </div>
        </div>
      </div>

      {/* Achievement Badges - หลัง info section */}
      <div className="profile-section">
        <h3>🏆 Achievements</h3>
        <div className="achievements">
          {/* TODO: เพิ่มเงื่อนไขแสดง badges */}
          {profile.gpa >= 3.5 && (
            <span className="achievement-badge" title="GPA ≥ 3.5">
              🌟 เกียรตินิยม
            </span>
          )}
          {profile.skills.length >= 5 && (
            <span
              className="achievement-badge"
              title="Mastered 5 or more skill"
            >
              💪 Multi-skilled
            </span>
          )}
          {/* เพิ่ม achievement เงื่อนไขอื่นๆ */}
          {profile.major === "วิศวะกรรมซอฟต์แวร์" && (
            <span className="achievement-badge" title="Start a cruel destiny">
              ⛓️ Software Slave
            </span>
          )}
          {profile.year === 2 && (
            <span className="achievement-badge" title="Survived untill year 2">
              🔥 High way to hell
            </span>
          )}
        </div>
      </div>

      {/* งานอดิเรก */}
      <div className="profile-section">
        <h3>🎯 งานอดิเรก</h3>
        <ul className="hobbies-list">
          {profile.hobbies.map((hobby, index) => (
            <li 
                key={index} 
                className={`hobby-item ${favoriteHobbies.includes(hobby) ? 'favorite' : ''}`}
                onClick={(e) => { e.stopPropagation(); toggleFavoriteHobby(hobby); }}
            >
              {hobby} {favoriteHobbies.includes(hobby) && '💖'}
            </li>
          ))}
        </ul>
      </div>

      {/* ทักษะ */}
      <div className="profile-section">
        <h3>💻 ทักษะ</h3>
        <div className="skills">
          {profile.skills.map((skill, index) => (
            <div
              key={index}
              className="skill-tag"
              onClick={() => handleSkillClick(skill)}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* TODO: นักศึกษาจะเพิ่ม sections เพิ่มเติมใน Challenge */}
      {/* Social Links - นักศึกษาเพิ่มเอง */}
      {profile.socialLinks && profile.socialLinks.length > 0 && (
        <div className="profile-section">
          <h3>🌐 Social Media</h3>
          <div className="social-links">
            {profile.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                {link.platform}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* ปุ่ม Contact */}
      <button className="contact-button" onClick={handleContactClick}>
        📧 ติดต่อ {profile.name}
      </button>
      {showContactForm && (
        <div className="contact-form">
          <form onSubmit={handleSubmitContact}>
            <input type="text" placeholder="ชื่อ" required />
            <input type="email" placeholder="อีเมล" required />
            <textarea placeholder="ข้อความ" required></textarea>
            <button type="submit">ส่งข้อความ</button>
          </form>
        </div>
      )}

      <div className="view-counter">
        👁️ Views: {viewCount}
      </div>
    </div>
  );
}

export default ProfileCard;
