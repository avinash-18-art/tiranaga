import React from 'react';
import './Wallet.css';

function Wallet() {
  return (
    <div className="wallet-container">
      <div className="wallet-header">
        <h2>Wallet</h2>
        <div className="balance-icon">💼</div>
        <h3>₹0.00</h3>
        <p>Total balance</p>
      </div>

      <div className="wallet-body">
        <div className="wallet-circles">
          <div className="circle">
            <p>0%</p>
            <h4>₹0.00</h4>
            <span>Main wallet</span>
          </div>
          <div className="circle">
            <p>0%</p>
            <h4>₹0.00</h4>
            <span>3rd party wallet</span>
          </div>
        </div>

        <button className="transfer-btn">Main wallet transfer</button>

        <div className="action-buttons">
          <div className="action">
            <span role="img" aria-label="deposit">🟠</span>
            <p>Deposit</p>
          </div>
          <div className="action">
            <span role="img" aria-label="withdraw">🟦</span>
            <p>Withdraw</p>
          </div>
          <div className="action">
            <span role="img" aria-label="history">📘</span>
            <p>Deposit History</p>
          </div>
          <div className="action">
            <span role="img" aria-label="withdraw-history">🟡</span>
            <p>Withdrawal History</p>
          </div>
        </div>

        <div className="game-cards">
          <div className="card">0.00<br/>ARGame</div>
          <div className="card">0.00<br/>Lottery</div>
        </div>
      </div>

      <div className="wallet-footer">
        <div className="nav-item">🏠<br />Home</div>
        <div className="nav-item">📊<br />Activity</div>
        <div className="nav-item center-icon">🔷</div>
        <div className="nav-item">👛<br />Wallet</div>
        <div className="nav-item">👤<br />Account</div>
      </div>
    </div>
  );
}

export default Wallet;
