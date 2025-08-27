import { useEffect, useState } from 'react';
import './App.css';
import InputTips from './components/InputTips';
import Result from './components/Result';
import useTipHandlers from './useTipHandlers';

function App() {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('');
  const [customTip, setCustomTip] = useState('');
  const [people, setPeople] = useState('');
  const [errorForPeople, setErrorForPeople] = useState('');

  const { 
    tipAmount, 
    totalAmount, 
    handleBill, 
    handleTipClick, 
    handleCustomTip, 
    handlePeople, 
    handleReset 
  } = useTipHandlers(
    bill, 
    setBill,
    tip, 
    setTip,
    customTip, 
    setCustomTip,
    people,
    setPeople,
    setErrorForPeople
  );

  return (
    <div className='background'>
      <div className='logo-wrapper'>
        <img src='/images/logo.svg' />
      </div>
      <div className='contents-wrapper'>
        <InputTips
          bill={bill}
          setBill={handleBill}
          tip={tip}
          setTip={handleTipClick}
          customTip={customTip}
          setCustomTip={handleCustomTip}
          people={people}
          setPeople={handlePeople}
          errorForPeople={errorForPeople}
        />
        <Result
          tipAmount={tipAmount}
          totalAmount={totalAmount}
          handleReset={handleReset}
        />
      </div>
    </div>
  )
}

export default App
