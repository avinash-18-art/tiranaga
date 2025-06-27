import React from 'react';
import './Language.css'; // Make sure this file exists in the same directory

const Language = () => {
  return (
    <div>
      {/* Top Navbar */}
      <div className='navbar'>
        <h1 className='lang'>Language</h1>
      </div>

      {/* Centered Dropdown */}
      <div className='middle'>
        <select className='naman'>
          <option value="hindi">Hindi</option>
          <option value="english">English</option>
        </select>
      </div>
    </div>
  );
};

export default Language;
