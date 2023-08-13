import React from 'react';
import './promotion.css';
import banner from './img/banner.svg'
import delivery from './img/delivery.png'

const Promotion = () => {
  return (
    <div className="promotion">
      <div className='text'>
      <h2 className="promotion-header">สมัครเป็นสมาชิก<br />สเวนเซ่นส์วันนี้พร้อมรับ <br /> สิทธิพิเศษมากมายรอคุณ <br />
      อยู่ที่นี่</h2>
      <p className="promotion-subheader">
        พิเศษสุดๆ!&nbsp;สำหรับสมาชิกสเวนเซ่นส์ ยิ่งกิน ยิ่งได้<br />
        ยิ่งคุ้ม ใครๆ ก็สมัครได้<br />
        ใช้ง่ายสะดวกสบายพร้อมสิทธิประโยชน์มากมายเพื่อคนสำคัญเช่นคุณ&nbsp;รอ <br />
        ไม่ได้แล้ว สมัครเลย
                </p>
                <div className='button'>
                <button className="promotion-button">
                <div className='text-button'>
                <img src={delivery} />
                <div>
                <div className='text-online'>
                <span>สั่งออนไลน์</span>
                </div>
                </div>
                </div>
                </button>
                </div>
                </div>
                <img src={banner} className="promotion-image" />
    </div>
  );
};

export default Promotion;