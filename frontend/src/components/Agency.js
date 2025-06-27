import React from 'react';
import "./Agency.css";

function Agency() {
  return (
    <div>
      <div className='navbar'>
        <h1 className='heading'>Agency</h1>
      </div>

      <div className='main'>
        <div className='color'>
          <p>0</p>
          <p>Yesterday total commission</p>
          <p>Upgrade the level to increase commission income</p>
        </div>

        <div className='arrange'>
          <div className='common'>
            <div className='box-content'>
              <div className='left'>
                <p className='label'>Direct Subordinates</p>
                <p className='label'>Number of register</p>
                <p className='label'>Deposit number</p>
                <p className='label'>Deposit amount</p>
                <p className='label'>Number of people making first Deposit</p>
              </div>
              <div className='right'>
                <p className='value'>0</p>
                <p className='value'>0</p>
                <p className='value'>0</p>
                <p className='value'>0</p>
                <p className='value'>0</p>
              </div>
            </div>
          </div>
        </div>
        <div className='arg'>
        <div className='qr'>
        <h3 className='code'>Download QR code</h3>
        </div>
        
        </div>
        <div className='manage'>
        <div className='qr'>
        <h3 className='code'>Copy invitation code</h3>
        </div>
        </div>

         <div className='manage'>
        <div className='qr'>
        <h3 className='code'>Subordinated Data</h3>
        </div>
        </div>

         <div className='manage'>
        <div className='qr'>
        <h3 className='code'>Commission Details</h3>
        </div>
        </div>

         <div className='manage'>
        <div className='qr'>
        <h3 className='code'>Invitation Rules</h3>
        </div>
        </div>

         <div className='manage'>
        <div className='qr'>
        <h3 className='code'>Agent line customer service</h3>
        </div>
        </div>

         <div className='manage'>
        <div className='qr'>
        <h3 className='code'>Rabate ratio</h3>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Agency;
