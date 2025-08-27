import React from 'react';
import './Result.css';

const Result = ({ tipAmount, totalAmount, handleReset }) => {
  return (
    <div className='result-wrapper'>
      <div>
        <div className='result-item space'>
          <h3 className='result-item-title'>
            Tip Amount
            <span>/ person</span>
          </h3>
          <p className='result-item-amount'>$
            <span data-testid='tip-amount'>{tipAmount}</span>
          </p>
        </div>
        <div className='result-item'>
          <h3 className='result-item-title'>
            Total
            <span>/ person</span>
          </h3>
          <p className='result-item-amount'>$
            <span data-testid='total-amount'>{totalAmount}</span>
          </p>
        </div>
      </div>
      <button 
        className='reset-btn' 
        aria-label='Reset form'
        onClick={() => handleReset()}
        disabled={!(tipAmount !== '0.00' || totalAmount !== '0.00')}
        data-testid='reset-btn'
      >
        Reset
      </button>

    </div>
  )
}

export default Result
