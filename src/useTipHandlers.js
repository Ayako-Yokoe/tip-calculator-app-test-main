import React, { useEffect, useState } from 'react';

const useTipHandlers = ( 
  bill, 
  setBill,
  tip, 
  setTip,
  customTip, 
  setCustomTip,
  people,
  setPeople,
  setErrorForPeople 
) => {
  const [tipAmount, setTipAmount] = useState('');
  const [totalAmount, setTotalAmount] = useState('');

  useEffect(() => {
    if (bill > 0 && people > 0 && (tip > 0 || customTip > 0)) {
      const effectiveTip = customTip ? customTip : tip;
      const calculatedTipAmount = (bill * effectiveTip) / 100;
      setTipAmount((calculatedTipAmount / people).toFixed(2));
      
      const calculatedTotalAmount = (bill + calculatedTipAmount) / people;
      setTotalAmount(calculatedTotalAmount.toFixed(2));
    } else {
      setTipAmount('0.00');
      setTotalAmount('0.00');
    }
  }, [bill, tip, customTip, people])

  const handleBill = (e) => {
    const value = e.target.value;
    const regex = /^\d*\.?\d{0,2}$/;
    if (regex.test(value)) {
      setBill(Number(value));
    }
  }

  const handleTipClick = (e) => {
    const value = e.currentTarget.dataset.tip;
    setTip(Number(value));
    setCustomTip('');
  }

  const handleCustomTip = (e) => {
    let value = e.target.value;

    if (parseFloat(value) > 100) {
      value = '100';
    }

    if (value === '' || isNaN(parseFloat(value)) || parseFloat(value) < 0) {
      setCustomTip('');
    } else {
      setCustomTip(Number(value));
      setTip('');
    }
  }

  const handlePeople = (e) => {
    const value = e.target.value;
    const numberValue = parseFloat(value);

    if (value === '' || isNaN(numberValue) || numberValue === 0) {
      setErrorForPeople("Can't be zero");
      setPeople('')
    } else {
      setErrorForPeople('');
      setPeople(Number(numberValue));
    }
  }

  const handleReset = () => {
    setBill('');
    setTip('');
    setCustomTip('');
    setPeople('');
    setErrorForPeople('');
    setTipAmount('');
    setTotalAmount('');
  }

  return { tipAmount, totalAmount, handleBill, handleTipClick, handleCustomTip, handlePeople, handleReset }
}

export default useTipHandlers
