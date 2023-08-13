import React from 'react'
import './Download.css'
import bg from './img/bg.jpg'
import app from './img/phone.webp'
import as from './img/as.png'
import gp from './img/gp.png'

function Download() {
  return (
    <div className='page-bottom'>
        <div className='container'>
            <div className='page-bottom-app'>
                <div>
                    <img src={app} />
                </div>
            </div>
            <div className='app-download'>
                <div className='download-container'>
                <div className='heading'>
                    <h2>ดาวน์โหลดที่</h2>
                </div>
                <div className='download-list'>
                    <div className='google-play'>
                        <img src={gp} />
                    </div>
                    <div className='app-store'>
                    <img src={as} />
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Download