import React from 'react'
import './Deal.css'
import momday from './img/momday.jpg'

function Deal() {
  return (
    <div className='pagebody'>
    <div className='container'>
      <div className='head'>
        ดีลสุดคุ้ม
      </div>
      <div className='image'>
        <img src={momday} />
        <img src={momday} />
        <img src={momday} />
      </div>
      <div className='News'>
        <div className='News-head'>
          ข่าว
        </div>
      </div>
    </div>
    </div>
  )
}

export default Deal