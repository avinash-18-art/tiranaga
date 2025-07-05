import React from 'react';
import { IoMedalOutline } from "react-icons/io5";
import { FaUsersBetweenLines, FaTrophy, FaGift } from "react-icons/fa6";
import './Activity.css';

function Activity() {
  return (
    <div>
      <div className='activity-navbar'>
        <h1 className='activity-heading'>Activity</h1>
      </div>

      <div className='activity-main'>
        <p className='pop'>Please remember to follow the event page. We will launch user feedback activities from time to time.</p>

        <div className='activity-card-container'>
          <div className='activity-card'>
            <IoMedalOutline className='activity-card-icon' />
            <p className='activity-card-text'>Activity Award</p>
          </div>

          <div className='activity-card'>
            <FaUsersBetweenLines className='activity-card-icon' />
            <p className='activity-card-text'>Betting Rebate</p>
          </div>

          <div className='activity-card'>
            <FaTrophy className='activity-card-icon' />
            <p className='activity-card-text'>Super Jackpot</p>
          </div>

          <div className='activity-card'>
            <IoMedalOutline className='activity-card-icon' />
            <p className='activity-card-text'>Activity Award</p>
          </div>

          <div className='activity-card'>
            <FaGift className='activity-card-icon' />
            <p className='activity-card-text'>First Gift</p>
          </div>
        </div>

        {/* Banner images */}
        <img src="https://ossimg.tirangaagent.com/Tiranga/banner/Banner_20240413193600mlfm.png" alt="Banner 1" className="activity-img" />
        <img src="https://ossimg.tirangaagent.com/Tiranga/banner/Banner_2024041213555556ca.jpg" alt="Banner 2" className="activity-img" />
        <img src="https://ossimg.tirangaagent.com/Tiranga/banner/Banner_20240412162520ynuw.png" alt="Banner 3" className="activity-img" />
        <img src="https://ossimg.tirangaagent.com/Tiranga/banner/Banner_20240413185613x4e5.png" alt="Banner 4" className="activity-img" />
        <img src="https://ossimg.tirangaagent.com/Tiranga/banner/Banner_20240413184039yjlg.png" alt="Banner 5" className="activity-img" />
        <img src="https://ossimg.tirangaagent.com/Tiranga/banner/Banner_20240413184801uacy.png" alt="Banner 6" className="activity-img" />
        <img src="https://ossimg.tirangaagent.com/Tiranga/banner/Banner_202404122053518gg4.png" alt="Banner 7" className="activity-img" />
        <img src="https://ossimg.tirangaagent.com/Tiranga/banner/Banner_20240413194332gji9.png" alt="Banner 8" className="activity-img" />
        <img src="https://ossimg.tirangaagent.com/Tiranga/banner/Banner_202404291748458uf1.png" alt="Banner 9" className="activity-img" />
      </div>
    </div>
  );
}

export default Activity;
