import React, { useState } from 'react';
import './InputTips.css';

const InputTips = ({ bill, setBill, tip, setTip, customTip, setCustomTip, people, setPeople, errorForPeople }) => {
  const [isEnableCustomTip, setIsEnableCustomTip] = useState(false);

  return (
    <div className='input-tips-wrapper'>
      <div>
        <label htmlFor='bill'>Bill</label>
        <div className='input-wrapper'>
          <img src='/images/icon-dollar.svg' alt='dollar sign' />
          <input
            id='bill'
            type='number'
            step={0.01}
            value={bill}
            placeholder='0'
            className='input-field'
            onChange={setBill}
          />
        </div>
      </div>
      <div>
        <label>Select Tip %</label>
        <ul className='tip-list-wrapper'>
          <li className={`tip-list-item ${tip === 5 ? 'active' : ''}`}><button className='tip-list-item-btn' onClick={setTip} data-tip={5} >5%</button></li>
          <li className={`tip-list-item ${tip === 10 ? 'active' : ''}`}><button className='tip-list-item-btn' onClick={setTip} data-tip={10}>10%</button></li>
          <li className={`tip-list-item ${tip === 15 ? 'active' : ''}`}><button className='tip-list-item-btn' onClick={setTip} data-tip={15}>15%</button></li>
          <li className={`tip-list-item ${tip === 25 ? 'active' : ''}`}><button className='tip-list-item-btn' onClick={setTip} data-tip={25}>25%</button></li>
          <li className={`tip-list-item ${tip === 50 ? 'active' : ''}`}><button className='tip-list-item-btn' onClick={setTip} data-tip={50}>50%</button></li>
          <li className='tip-list-item custom'>
            {isEnableCustomTip ? (
              <input
                id='custom-tip'
                type='number'
                min={0}
                max={100}
                value={customTip}
                placeholder='0'
                className='custom-input'
                onChange={setCustomTip}
                data-testid="custom-tip-amount"
              />
            ) : (
              <button 
                className='tip-list-item-btn custom'
                onClick={() => setIsEnableCustomTip(true)}
              >
                Custom
              </button>
            )}
            
          </li>
        </ul>
      </div>
      <div>
        <div className='people-label'>
          <label htmlFor='people'>Number of People</label>
          {errorForPeople && <p className='error-for-people' data-testid='error-message'>{errorForPeople}</p> }
        </div>
        <div className={`input-wrapper ${errorForPeople ? 'error-people' : ''}`}>
          <img src='/images/icon-person.svg' alt='people icon' />
          <input
            id='people'
            type='number'
            step={1}
            value={people}
            placeholder='0'
            className='input-field'
            onChange={setPeople}
          />
        </div>
      </div>
    </div>
  )
}

export default InputTips
