import React from 'react';
import './Download.css';

function Download() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://www.gameloop.com/game/art-design/tiranga-on-pc'; // replace with actual APK URL
    link.setAttribute('download', 'tgdream11.apk');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="menu">
      <button onClick={handleDownload} className="menu-item">
        <span>⬇️</span> Download APP
      </button>
    </div>
  );
}

export default Download;
