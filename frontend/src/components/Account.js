import React from 'react';
import './Account.css';
import { CiWallet } from "react-icons/ci";
import { RiLuggageDepositLine } from "react-icons/ri";
import { PiHandWithdraw } from "react-icons/pi";
import { RiVipCrownFill } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { MdFeedback } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { PiUserFocusThin } from "react-icons/pi";

function Account() {
  return (
    <div>
      <div className="account-navbar">
        <h1 className="account-heading">Account</h1>
      </div>

      <div className="account-main">
        <img
          className="account-img12"
          src="https://tgdream12.com/assets/png/1-a6662edb.png"
          alt="User Avatar"
        />

        <div className="account-information">
          <p className="account-info-item">MEMBERNNGJ93Q3</p>
          <p className="account-info-item">UID: 214362855</p>
          <p className="account-info-item">Last Login: 2025-06-25</p>
        </div>

        <div className="account-border">
          <p>Total Balance 0</p>
          <div className='account-icon-arr'>
            <div>
              <CiWallet />
              <p>wallet</p>
            </div>

            <div>
              <RiLuggageDepositLine />
              <p>Deposit</p>
            </div>

            <div>
              <PiHandWithdraw />
              <p>Withdraw</p>
            </div>

            <div>
              <RiVipCrownFill />
              <p>vip</p>
            </div>
          </div>
        </div>

        <div className='account-border2'>
          
          <p>The daily interest rate is 0.1%, and the income is calculated once every 1 minutes.</p>
        </div>

        {[
          'Game History', 'Transaction', 'Withdraw', 'Deposit',
          'Notification', 'Gifts', 'Game Statistic', 'Language'
        ].map(item => (
          <div className='account-manage' key={item}>
            <div className='account-qr'>
              <h3 className='account-code'>{item}</h3>
            </div>
          </div>
        ))}

        <div className="account-border3">
          <h6>Service center</h6>
          <div className='account-icon-arr'>
            <div>
              <IoIosSettings />
              <p>Setting</p>
            </div>

            <div>
              <MdFeedback />
              <p>Feedback</p>
            </div>

            <div>
              <TfiAnnouncement />
              <p>Announcement</p>
            </div>

            <div>
              <PiUserFocusThin />
              <p>Customer Service</p>
            </div>
          </div>
        </div>

        <div className='account-border2'>
          <h3 className='account-heading3'>Log Out</h3>
        </div>
      </div>
    </div>
  );
}

export default Account;
