import React from 'react'
import './Calculator.scss'
import Button from '@mui/material/Button'
import * as math from 'mathjs'

export default function Calculator() {
  const keys = [".", 0, '00', 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operations = ['+', '-', '*', '/'];
  const scientificCalc = ["sin", "cos", "tan", "sqrt", "PI", "Fact"];

  console.log(math)
  return (
    <div id="calculator" className="calculator">
      <div className="calculator-container rounded pb-1">
        <div className="calculator-display rounded-top px-2 pt-1">
          <h1 className='text-end px-2'>123</h1>
        </div>
        <div className="calculator-keys p-2 text-center">
          {
            operations.map((operation, opt) => (
              <Button variant="contained" key={opt} className='operations'>{operation}</Button>
            ))
          }
          {
            keys.reverse().map((key, index) => (
              <Button variant="contained" key={index} className='numbers'>{key}</Button>
            ))
          }
          <div className="wrap-keys d-flex">
            <div className="keys-left">
            {
              scientificCalc.map((scientific, sci) => (
                <Button variant='contained' color='success' key={sci} className='scientific'>{scientific}</Button>
              ))
            }
            </div>
            <div className="keys-right">
              <Button variant="contained" className='calculate me-2'>=</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}