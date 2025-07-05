import React from 'react';
import './Agency.css';

function Agency() {
  return (
    <div>
      <div className='agency-navbar'>
        <h1 className='agency-heading'>Agency</h1>
      </div>

      <div className='agency-main'>
        <div className='agency-color'>
          <p>0</p>
          <p>Yesterday total commission</p>
          <p>Upgrade the level to increase commission income</p>
        </div>

        <div className='agency-arrange'>
          <div className='agency-common'>
            <div className='agency-box-content'>
              <div className='agency-left'>
                <p className='agency-label'>Direct Subordinates</p>
                <p className='agency-label'>Number of register</p>
                <p className='agency-label'>Deposit number</p>
                <p className='agency-label'>Deposit amount</p>
                <p className='agency-label'>Number of people making first Deposit</p>
              </div>
              <div className='agency-right'>
                <p className='agency-value'>0</p>
                <p className='agency-value'>0</p>
                <p className='agency-value'>0</p>
                <p className='agency-value'>0</p>
                <p className='agency-value'>0</p>
              </div>
            </div>
          </div>
        </div>

        <div className='agency-arg'>
          <div className='agency-qr'>
            <h3 className='agency-code'>Download QR code</h3>
          </div>
        </div>

        <div className='agency-manage'>
          <div className='agency-qr'>
            <h3 className='agency-code'>Copy invitation code</h3>
          </div>
        </div>

        <div className='agency-manage'>
          <div className='agency-qr'>
            <h3 className='agency-code'>Subordinated Data</h3>
          </div>
        </div>

        <div className='agency-manage'>
          <div className='agency-qr'>
            <h3 className='agency-code'>Commission Details</h3>
          </div>
        </div>

        <div className='agency-manage'>
          <div className='agency-qr'>
            <h3 className='agency-code'>Invitation Rules</h3>
          </div>
        </div>

        <div className='agency-manage'>
          <div className='agency-qr'>
            <h3 className='agency-code'>Agent line customer service</h3>
          </div>
        </div>

        <div className='agency-manage'>
          <div className='agency-qr'>
            <h3 className='agency-code'>Rabate ratio</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agency;
