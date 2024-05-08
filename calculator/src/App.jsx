import React from 'react'
import Calculator from './components/Calculator'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className='w-100 vh-100 d-flex justify-content-center align-items-center' style={{backgroundColor: '#dcdcdc'}}>
      <Calculator />
    </div>
  )
}