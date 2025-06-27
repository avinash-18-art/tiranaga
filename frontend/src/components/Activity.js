import React from 'react';
import { IoMedalOutline } from "react-icons/io5";
import { FaUsersBetweenLines, FaTrophy, FaGift } from "react-icons/fa6";
import './Activity.css'; // Make sure to import the CSS

function Activity() {
  return (
    <div>
      <div className='navbar'>
        <h1 className='heading'>Activity</h1>
      </div>

      <div className='main'>
        <p>Please remember to follow the event page. We will launch user feedback activities from time to time.</p>

        {/* ✅ Corrected this div — now it wraps all cards */}
        <div className='card-container'>
          <div className='card'>
            <IoMedalOutline className='card-icon' />
            <p className='card-text'>Activity Award</p>
          </div>

          <div className='card'>
            <FaUsersBetweenLines className='card-icon' />
            <p className='card-text'>Betting Rebate</p>
          </div>

          <div className='card'>
            <FaTrophy className='card-icon' />
            <p className='card-text'>Super Jackpot</p>
          </div>

          <div className='card'>
            <IoMedalOutline className='card-icon' />
            <p className='card-text'>Activity Award</p>
          </div>

          <div className='card'>
            <FaGift className='card-icon' />
            <p className='card-text'>First Gift</p>
          </div>
        </div>

        {/* ✅ Image section */}
        <img
          src="https://ossimg.tirangaagent.com/Tiranga/banner/Banner_20240413193600mlfm.png"
          alt="Banner 1"
          className="img"
        />

        <img
          src="https://ossimg.tirangaagent.com/Tiranga/banner/Banner_2024041213555556ca.jpg"
          alt="Banner 2"
          className="img"
        />

        <img
          src="https://ossimg.tirangaagent.com/Tiranga/banner/Banner_20240412162520ynuw.png"
          alt="Banner 2"
          className="img"
        />

        <img
          src="https://ossimg.tirangaagent.com/Tiranga/banner/Banner_20240413185613x4e5.png"
          alt="Banner 2"
          className="img"
        />

        <img
          src="https://ossimg.tirangaagent.com/Tiranga/banner/Banner_20240413184039yjlg.png"
          alt="Banner 2"
          className="img"
        />

        <img
          src="https://ossimg.tirangaagent.com/Tiranga/banner/Banner_20240413184801uacy.png"
          alt="Banner 2"
          className="img"
        />

        <img
          src="https://ossimg.tirangaagent.com/Tiranga/banner/Banner_202404122053518gg4.png"
          alt="Banner 2"
          className="img"
        />

         <img
          src="https://ossimg.tirangaagent.com/Tiranga/banner/Banner_20240413194332gji9.png"
          alt="Banner 2"
          className="img"
        />

         <img
          src="https://ossimg.tirangaagent.com/Tiranga/banner/Banner_202404291748458uf1.png"
          alt="Banner 2"
          className="img"
        />



       
      </div>
    </div>
  );
}

export default Activity;
