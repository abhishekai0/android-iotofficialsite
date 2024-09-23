import React, { useState } from 'react';
import './About.css'; // Custom styling for the About Us page
import clubImage from './images/about.jpg'; // Import the club ima
const AboutUs = () => {
  const [selectedRole, setSelectedRole] = useState('President');

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Club Image in the Top Right */}
        <div className="top-right-image">
          <img src={clubImage} alt="Android and IoT Club" className="club-image" />
        </div>
        

        {/* Club Information Section */}
        <div className="club-info">
          <h2>Welcome to Android & IoT Club</h2>
          <p><h1>about us</h1> </p>
          <p> a hub for aspiring developers and innovators passionate about creating smart solutions for a connected world. Our club focuses on Android app <li>development and Internet of Things (IoT) technologies, providing members with opportunities to learn, collaborate, and innovate. Through hands-on workshops, collaborative projects,</li> and real-world challenges, we empower students to build intelligent devices and seamless apps that transform everyday life. Whether you're designing an app or building an IoT system, we foster a learning environment that encourages creativity, problem-solving, and technical excellence. Our goal is to help members develop the skills and knowledge necessary to thrive in the rapidly evolving tech landscape. Join us in shaping the future of technology, where Android and IoT meet to create the smart solutions of tomorrow, and be part of a community driving innovation for a more connected, intelligent, and efficient world.</p>
          <h3>Benefits of the Club</h3>
          <ul className="benefits-list">
            <li>ʟᴇᴀʀɴ ᴀɴᴅʀᴏɪᴅ ᴀɴᴅ ɪᴏᴛ ᴅᴇᴠᴇʟᴏᴘᴍᴇɴᴛ.</li>
            <li>ᴄᴏʟʟᴀʙᴏʀᴀᴛᴇ ᴡɪᴛʜ ɪɴᴅᴜꜱᴛʀʏ ᴇxᴘᴇʀᴛꜱ.</li>
            <li>ʙᴜɪʟᴅ ɪɴɴᴏᴠᴀᴛɪᴠᴇ ᴘʀᴏᴊᴇᴄᴛꜱ.</li>
            <li>ʜᴀɴᴅꜱ-ᴏɴ ᴡᴏʀᴋꜱʜᴏᴘꜱ ᴀɴᴅ ᴛʀᴀɪɴɪɴɢ ꜱᴇꜱꜱɪᴏɴꜱ.</li>
          </ul>
        </div>

         {/* Leadership Team Section with Dropdown */}
         <h3>Leadership Team</h3>
        <div className="team-dropdown">
          <select onChange={handleRoleChange} value={selectedRole}>
            <option value="President">President</option>
            <option value="Vice President">Vice President</option>
            <option value="Coordinator">Coordinator</option>
            <option value="Treasurer">Treasurer</option>
            <option value="Secretary">Secretary</option>
            <option value="Management">Management</option>
            <option value="CO-Member">CO-Member</option>
          </select>

          {/* Conditional Rendering for Leader Details */}
          <div className="team-member-details">
            {selectedRole === 'President' && (
              <div>
                <h4>DEBASISH MISHRA</h4>
                <p>Specializes in Android app development and IoT integrations.</p>
              </div>
            )}
            {selectedRole === 'Vice President' && (
              <div>
                <h4>AYUSHMAN PANIGRAHI</h4>
                <p>Focuses on team management and project coordination.</p>
              </div>
            )}
            {selectedRole === 'Coordinator' && (
              <div>
                <h4>PRIYANKA PANDA, BIKAS</h4>
                <p>Organizes club events and workshops.</p>
              </div>
            )}
            {selectedRole === 'Treasurer' && (
              <div>
                <h4>LALU prasad panda </h4>
                <p>Manages club finances and budgeting.</p>
              </div>
            )}
            {selectedRole === 'Secretary' && (
              <div>
                <h4>PRIYANSHU</h4>
                <p>Manages the club collaborations with companies.</p>
              </div>
            )}
            {selectedRole === 'Management' && (
              <div>
                <h4>NAMRATA</h4>
                <h4>ABHISHEK KUMAR</h4>
                <h4>VINAY KUMAR</h4>
                <h4>RALESAN PRADHAN</h4>
                <h4>LINGRAJ RATH</h4>
                <h4>KUSHAL CHAND</h4>
                <p>Handles overall club operations and logistics.</p>
              </div>
            )}
            {selectedRole === 'CO-Member' && (
              <div className="co-member-grid">
                <h4>Co-Members</h4>
                <div className="member-box">
                  
                  <h4>MANOSMITA BEHARA</h4>
                </div>
                <div className="member-box">
                  
                  <h4>PRIYADARSHNI PATTO</h4>
                </div>
                <div className="member-box">
                  
                  <h4>BUSHRA BANO</h4>
                </div>
                <div className="member-box">
                  
                  <h4>CHITRANSHU SINHA</h4>
                </div>
                <div className="member-box">
                  
                  <h4>SOURAV PATI</h4>
                </div>
                <div className="member-box">
                  
                  <h4>ANSHUMAN</h4>
                </div>
                <div className="member-box">

                  <h4>GYANA MOHANTY</h4>
                </div>
                <div className="member-box">
       
                  <h4>SAI SUBHAM </h4>
              
                </div>
              </div>

            )}
          </div>
        </div>
        {/* Gallery Section */}
        <h3>Gallery</h3>
        <div className="gallery">
          
        <img src="https://media.licdn.com/dms/image/v2/D4E03AQHT7rCq1FWv0Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721664235517?e=1732752000&v=beta&t=I9n_DT0LZ7OASlV_LHSXjbcxmTR1i06cInbaBf7waLU" alt="DEBASISH MISHRA 2" />
        <p>DEBASISH MISHRA</p>
        <img src="https://media.licdn.com/dms/image/v2/D5603AQEP8rqdhVYEUA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1726428793328?e=1732752000&v=beta&t=hHUYcDmC_dUxqV8caE_7xkbogf_-yalJyud6YqnTfcc" alt="AYUSHMAN PANIGRAHI" />
        <p>AYUSHMAN PANIGRAHI</p>
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQFdZ0Zky5OL3Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726992273667?e=1732752000&v=beta&t=-tst_cA18a5m35hRKBTM4oSGg9xxcPr5ug1pXH0dCZk" alt="PRIYANKA PANDA 3" />
          <p>PRIYANKA PANDA</p>
          <img src="https://media.licdn.com/dms/image/v2/D5603AQFmED7IQ6KNgQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724048381607?e=1732752000&v=beta&t=BczwWm-eDb5Qgnd-loV1hZ6MWUY_Q-u9g1opw0ghvRU" alt="ABISHEK KUMAR 1" />
          <p>ABHISHEK KUMAR</p>
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQFK6_TAIhSNUg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726579041265?e=1732752000&v=beta&t=_6nRat-lOHIATceHWCwp3o0J69K2krA9VGq3P_EAccg" alt="PRIYASHU 6" />
          <p>PRIYANSHU NANDA </p>
          <img src="https://media.licdn.com/dms/image/v2/D5603AQHlVpxRICDx-A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1713161451789?e=1732752000&v=beta&t=QA4LoL0pfunLduxMENbLwwSXuRXAOq9fPHIXErBlON8" alt="NAMRATA BHANJA 4" />
          <p>NAMRATA BHANJA</p>
         
          <img src="https://media.licdn.com/dms/image/v2/D5603AQGF4a42h_voAg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720105028706?e=1732752000&v=beta&t=mUFzwOFZHpD7aq5WdOOfPU1cCHDAax0vzEkldNfAdzI" alt="LALU PRASAD PANDA 11" />
          <p>LALU PRASAD PANDA</p>
          <img src="https://media.licdn.com/dms/image/v2/D5603AQHpBZBlnz04Qg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718243834724?e=1732752000&v=beta&t=4Gf4NmKxuGvJyVRQ9yLLVCH9FvwGwF7hDJXZ_NP4l4A" alt="ROHIT KUMAR NAIK 10" />
          <p>ROHIT KUMAR NAIK</p>
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQEjiY8ySDjB7A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726152176669?e=1732752000&v=beta&t=zeJin-gNNJW04RdTjfu4fHNgow7IIP4yiV68BbDh5bA" alt="MANOSHMITA BEHARA" />
          <p>MONOSHMITA BEHARA</p>
          <img src="https://gietuerp.in/StudentDocuments/22CSE444/22CSE444.JPG?v=U14f3bU1bbz6d4-Ssjhh1pTEJsAGzBJu-qD8b9jhxX8" alt="VINAY KUMAR 7" />
          <p>VINAY KUMAR</p>
          <img src="https://media.licdn.com/dms/image/v2/D5603AQG4iLNZx09HMA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725483780379?e=1732752000&v=beta&t=WOel4yqt5RUGQ638E-8WlUDhZgnwv0JEOy-CNCef2EU" alt="RALESHAN PRADHAN" />
          <p>RALESAN PRADHAN</p>
          <img src="https://media.licdn.com/dms/image/v2/D5603AQGJoSzeaAZ8_w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1711181873229?e=1732752000&v=beta&t=gxqB07X-zeRbvGTmmTmouk4bBlhfIb9rrIcRrT7eyFQ" alt="PRIYADARSHNI PATRO" />
          <p>PRIYADARSHANI PATRO</p>
          <img src="https://media.licdn.com/dms/image/v2/D5603AQHs-6UBWf_pSw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712204862480?e=1732752000&v=beta&t=ol4Reh0pP3HeQrRjzvYU8OIIja6OpBO9shwbzz195h8" alt="LINGRAJ RATH" />
          <p>LINGRAJ RATH </p>
          <img src="https://media.licdn.com/dms/image/v2/D5603AQGJejWvoRcNiA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718227334740?e=1732752000&v=beta&t=I_AwXZ19mwqhzHz-FjbCojANMU8xXrYtATyU1z9ZVCo" alt="KUSHAL CHAND" />
          <p>KUSHAL CHAND </p>
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQE7fpCUeUUyEw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1711437800607?e=1732752000&v=beta&t=h1L9VjyXxIli_9rzCAjUD79yO6KngoDY6_Xwe-V16lQ" alt="BUSHRA BANO" />
          <p>BUSHRA BANO  </p>
          <img src="https://media.licdn.com/dms/image/v2/D5603AQGUjGG6_KclXQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718261968160?e=1732752000&v=beta&t=bpOBayJ0TF5PZ5P42IRbiuiCtx1jm5pSoDXEW8UNbI0" alt="BIKASH RANJAN BARIK" />
          <p>BIKASH RANJAN BARIK </p>
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQFBrf7_yXxL8Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1701628178988?e=1732752000&v=beta&t=vB2jUDY-BOv_baiZrzAnPQF6DWx4uaJ0vQK26xBdx3c" alt="CHITRANSHU SHINHA" />
          <p>CHITRANSHU SANKET</p>
          <img src="https://media.licdn.com/dms/image/v2/D4E03AQGvlTwZ5_aORw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726469183347?e=1732752000&v=beta&t=5CE2a-H07oaqM1lg5ZyMQAB4OsGUDfz-w-xXHwX_Nn8" alt="SOURAV KUMAR PATI" />
          <p>SOURAV KUMAR PATI</p>
          <img src="https://media.licdn.com/dms/image/v2/D5603AQHSJkSsxaF4AA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718235308934?e=1732752000&v=beta&t=_SW7S2s8v_6yJWQlSs2b4miWl4PXlErY7DiuJDg4LwA" alt="ANSHUMAN MAHAPATRA" />
          <p>ANSHUMAN MAHANTA </p>
          <img src="https://media.licdn.com/dms/image/v2/D5603AQFWLJ_Jusfcog/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718249716587?e=1732752000&v=beta&t=9h12U1SYOQarjPkHYig1Ws64dqCf39BdLQt-owG3O04" alt="GYAN MOHANTY" />
          <p>GYANA MOHANTI</p>
          <img src="https://gietuerp.in/StudentDocuments/23CSE102/23CSE102.JPG?v=U14f3bU1bbz6d4-Ssjhh1pTEJsAGzBJu-qD8b9jhxX8" alt="SAI SUBHAM SAHU" />
          <p>SAI SUBHAM SAHU</p>
          <img src="" alt="" />
          
          {/* Add the remaining 19 images with URLs */}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
