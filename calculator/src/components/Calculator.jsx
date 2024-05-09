import React, { useEffect, useState } from 'react'
import * as math from 'mathjs'
import './Calculator.scss'

import Button from '@mui/material/Button'
import BackspaceIcon from '@mui/icons-material/Backspace';

export default function Calculator() {
  const keys = ['.', 0, '00', 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operations = ['+', '-', '*', <BackspaceIcon sx={{ fontSize: '28px' }} />, '/', '(', ')', '%'];
  const scientificCalc = ["sin", "cos", "tan", "sqrt", "PI", "Fact"];

  const [getNumber, setNumberIndex] = useState(null);
  const [storeNumber, setStoreNumber] = useState([]);

  const handleButtonClick = (index) => {
    setNumberIndex(index.target.innerText);
    setStoreNumber(prevStoreNumber => [...prevStoreNumber, getNumber])
  }

  const calculateValue = () => {

  }

  return (
    <div id="calculator" className="calculator">
      <div className="calculator-container rounded pb-1">
        <div className="calculator-display rounded-top px-2 pt-1">
          <h1 className='text-end px-2'>{getNumber != null ? getNumber : 0}</h1>
        </div>
        <div className="calculator-keys p-2 text-center">
          {
            operations.map((operation, opt) => (
              <Button variant="contained" key={opt} onClick={handleButtonClick} className='operations'>{operation}</Button>
            ))
          }
          {
            keys.reverse().map((key, index) => (
              <Button variant="contained" key={index} onClick={handleButtonClick} className='numbers'>{key}</Button>
            ))
          }
          <div className="wrap-keys d-flex">
            <div className="keys-left">
              {
                scientificCalc.map((scientific, sci) => (
                  <Button variant='contained' color='success' key={sci} onClick={handleButtonClick} className='scientific'>{scientific}</Button>
                ))
              }
            </div>
            <div className="keys-right">
              <Button variant="contained" className='calculate me-2' onClick={calculateValue}>=</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}