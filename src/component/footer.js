import React from 'react'
import logo from './img/logo.png'
import './footer.css'
import fb from './img/fb.svg'
import ig from './img/ig.svg'
import yt from './img/yt.svg'

function footer() {
  return (
    <div className='footer'>
        <footer className='primary-footer'>
            <div className='logo'>
                <a href="../app">
                    <img src={logo} />
                </a>
            </div>
            <div className='footer-menu'>
                <div className='footer-item'>
                    <ul className='menu'>
                        <li>ไอศกรีมของเรา</li>
                        <li>สิทธิพิเศษ</li>
                        <li>รีวอร์ด</li>
                        <li>คูปองของฉัน</li>
                        <li>บัตรกำนัลเงินสด</li>
                        <li>บัตรสเวนเซ่นส์การ์ด</li>
                        <li>ข้อมูลของฉัน</li>
                    </ul>
                </div>
            </div>
        </footer>
        <footer className='secondary-footer'>
            <div className='column-social'>
                <div className='footer-item'>
                    <ul className='social'>
                        <li>
                            <a href="https://www.facebook.com/weloveswensens/" target="_blank">
                                <img src={fb} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/we_love_swensens/" target="_blank">
                                <img src={ig} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCZg-uMHcpiqr3z1qiJCurIQ/videos" target="_blank">
                                <img src={yt} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='column'>
                <div className='footer-item-secondary'>
                    <ul className='footer-menu'>
                        <li>
                            <a href="#" target="_blank">คำถามที่พบบ่อย</a>
                        </li>
                        <li>
                            <a href="#" target="_blank">ข้อกำหนดการใช้งาน</a>
                        </li>
                        <li>
                            <a href="#" target="_blank">นโยบายความเป็นส่วนตัว</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default footer