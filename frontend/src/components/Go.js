import React, { useState, useEffect } from 'react';
import './Go.css';

function Go() {
  const [timer, setTimer] = useState(30);
  const [wallet, setWallet] = useState(0.0);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 30));
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="container">
      {/* Header */}
      <div className="header">Tiranga</div>

      {/* Wallet Balance */}
      <div className="wallet">
        <div>
          <div className="wallet-amount">₹{wallet.toFixed(2)}</div>
          <div className="wallet-label">Wallet balance</div>
        </div>
        <div className="wallet-buttons">
          <button className="withdraw">Withdraw</button>
          <button className="deposit">Deposit</button>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="welcome">Welcome to the Tiranga Games! Greetings, Gamers and Enthusiasts!</div>

      {/* Game Mode Tabs */}
      <div className="modes">
        {["WinGo 30sec", "WinGo 1 Min", "WinGo 3 Min", "WinGo 5 Min"].map((mode, idx) => (
          <button
            key={idx}
            className={`mode-button ${idx === 0 ? "active" : ""}`}
          >
            {mode}
          </button>
        ))}
      </div>

      {/* Timer + History */}
      <div className="timer-box">
        <div className="left">
          <div className="label">How to play</div>
          <div className="history">
            <span>3</span>
            <span>7</span>
            <span>1</span>
            <span>7</span>
            <span>1</span>
          </div>
        </div>
        <div className="right">
          <div className="label">Time remaining</div>
          <div className="time">{`00:00:${timer.toString().padStart(2, '0')}`}</div>
          <div className="timestamp">20250708100051231</div>
        </div>
      </div>

      {/* Color Buttons */}
      <div className="colors">
        <button className="green">Green</button>
        <button className="violet">Violet</button>
        <button className="red">Red</button>
      </div>

      {/* Number Balls */}
      <div className="numbers">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, idx) => {
          const isGreen = [1, 3, 7, 9].includes(num);
          const isRed = [0, 2, 4, 6, 8].includes(num);
          const color = num === 5 ? "violet" : isGreen ? "green" : isRed ? "red" : "gray";
          return (
            <div key={idx} className={`ball ${color}`}>
              {num}
            </div>
          );
        })}
      </div>
    
    </div>
  );
}

export default Go;
