import React from 'react';
import './Announcement.css'; // Make sure this path is correct

function Announcement() {
  return (
    <div>
      <div className='navbar'>
        <h1 className='heading'>Announcement</h1>  
      </div>

      <div className='main'>
        <div className='card'>
         <h4 className='paragraph'>Welcome to triranga Game</h4>
         <p className='paragraph'>Welcome to the Tiranga Games!  Greetings, Gamers and Enthusiasts!  The Tiranga Games is more than just a platform for gaming.  We invite you to join us, you'll find a variety of games, promo, bonus, luxury gold awards, Register now and win.</p>
        </div>  

         <div className='card'>
         <h4 className='paragraph'>Avoid Scammer And Phising Link</h4>
         <p className='paragraph'>Please be sure to always use our official website for playing the games with the following link, https://tirangacasino.win. Please always check our official link to access our website and avoid scammers and phishing links</p>
        </div> 

         <div className='card'>
         <h4 className='paragraph'>Beware Of Fraud And Scammer </h4>
         <p className='paragraph'>If your deposit not receive, please send it directly to Tiranga Games Self-service Center (https://www.tirangaservice.com) wait till already get process, do not send to another person and trust anyone claiming to represent Tiranga Games. Always verify our website authenticity through the official community channels. Your safety and trust is our prority.</p>
        </div>
        <p className='prg'>NO More</p> 
      </div>
      
    </div>
  );
}

export default Announcement;
