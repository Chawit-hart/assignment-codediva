import React , { useState } from 'react';
import './login.css';
import Footer from './component/footer';
import Navbar from './component/navbar';

function Login() {

  return (
    <section className='layout'>
      <main className='layout-content'>
        <div className='container'>
          <div className='box-login'>
            <div className='box-header-login'>
              <div className='content'>
                <h2>ยินดีต้อนรับ</h2>
                <p>เข้าสู่ระบบเพื่อใช้งาน</p>
              </div>
            </div>
            <div className='box-body-login'>
              <div className='login-form'>
                <form className='form-login'>
                  <div className='input-email'>
                    <div className='login-label-email'>
                      <label title='อีเมล'>อีเมล</label>
                    </div>
                    <div className='form-input'>
                      <div className='form-item-control'>
                        <span className='form-item-children'>
                          <input placeholder='กรอกอีเมล' type="email" className='input-box' />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='input-password'>
                    <div className='login-label-password'>
                      <label title='รหัสผ่าน'>รหัสผ่าน</label>
                    </div>
                    <div className='form-input'>
                      <div className='form-item-control'>
                        <span className='form-item-children'>
                          <input placeholder='กรอกรหัสผ่าน' type="password" className='input-box' />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='form-item-control'>
                    <span className='form-item-children'>
                      <div className='forgot-password'>
                        <a href="#">ลืมรหัสผ่าน</a>
                      </div>
                      <button type='submit' className='button-submit-login'>
                        <span>เข้าสู่ระบบ</span>
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>

  )
}

export default Login