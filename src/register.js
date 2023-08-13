import React from 'react'
import './register.css'
import Navbar from './component/navbar'
import header from './component/img/header-register.png'

function register() {
  return (
    <div className='layout'>
        <div className='container'>
          <div className='box-register'>
            <div className='box-header'>
              <div className='content'>
                <h2>สร้างบัญชี</h2>
                <p>สมัครสมาชิกและเริ่มใช้งาน</p>
              </div>
            </div>
            <div className='box-body'>
              <div className='register-form'>
                <form className='form-content'>
                  <div className='row-1'>
                    <div className='name'>
                      <div className='label-name'>
                        <label title='ชื่อ'>ชื่อ</label>
                      </div>
                      <div className='input'>
                        <span className='form-item-children'>
                          <input placeholder="กรอกชื่อ" type="text" className='input-box' />
                        </span>
                      </div>
                    </div>
                    <div className='lastname'>
                      <div className='label-lastname'>
                        <label title='นามสกุล'>นามสกุล</label>
                      </div>
                      <div className='input'>
                        <span className='form-item-children'>
                          <input placeholder='กรอกนามสกุล' type="text" className='input-box' />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='row-2'>
                    <div className='phone'>
                      <div className='label-phone'>
                        <label title='เบอร์โทรศัพท์'>เบอร์โทรศัพท์</label>
                      </div>
                      <div className='input'>
                        <span className='form-item-children'>
                          <input placeholder='กรอกเบอร์โทรศัพท์' type="tel" className='input-box' />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='row-3'>
                  <div className='email'>
                    <div className='label-email'>
                      <label title='อีเมล'>อีเมล</label>
                    </div>
                    <div className='input'>
                      <span className='form-item-children'>
                        <input placeholder='กรอกอีเมล' type="email" className='input-box' />
                      </span>
                    </div>
                  </div>
                  </div>
                  <div className='row-4'>
                    <div className='password'>
                      <div className='label-password'>
                        <label title='รหัสผ่าน'>รหัสผ่าน</label>
                      </div>
                      <div className='input'>
                        <span className='form-item-children'>
                          <input placeholder='กรอกรหัสผ่าน' type="password" className='input-box' />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='row-5'>
                    <div className='gender'>
                      <div className='label-gender'>
                        <label title='เพศ'>เพศ</label>
                      </div>
                      <div className='input'>
                        <span className='form-item-children'>
                          <div className='gender-radio'>
                            <label className='radio-button-wrapper'>
                            <div className='male'>
                              <span className='radio-button'>
                                <input type="radio" className='radio-box' name='gender' />
                              </span>
                              <span>ชาย</span>
                              </div>
                              <div className='female'>
                              <span className='radio-button'>
                                <input type="radio" className='radio-box' name='gender' />
                              </span>
                              <span>หญิง</span>
                              </div>
                              <div className='none'>
                              <span className='radio-button'>
                                <input type="radio" className='radio-box' name='gender' />
                              </span>
                              <span>ไม่ระบุ</span>
                              </div>
                            </label>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='row-6'>
                    <div className='birthday'>
                      <div className='label-birthday'>
                        <label title='ของขวัญวันเกิดรอคุณอยู่'>ของขวัญวันเกิดรอคุณอยู่</label>
                      </div>
                        <div className='input'>
                          <span className='form-item-children'>
                            <input placeholder='dd/mm/yyyy' type="date" className='input-box' />
                          </span>
                        </div>
                    </div>
                  </div>
                  <div className='row-7'>
                    <div className='term'>
                      <div className='label-term'>
                        <span className='checkbox'>
                          <input type="checkbox" className='checkbox' />
                        </span>
                        <span className='info'>
                        ฉันได้อ่านและยอมรับข้อกำหนดการใช้งานและนโยบายความเป็นส่วนตัวของสเวนเซ่นส์
                        </span>
                      </div>
                      <div className='marketing'>
                        <span className='checkbox'>
                          <input type="checkbox" className='checkbox' />
                        </span>
                        <span className='info'>
                        ฉันยินยอมรับข้อมูลข่าวสารกิจกรรมส่งเสริมการขายต่างๆจากสเวนเซ่นส์และบริษัทในเครือโดยเราจะเก็บข้อมูลของท่านไว้เป็นความลับสามารถศึกษาเงื่อนไขหรือข้อตกลงนโยบายความเป็นส่วนตัวเพิ่มเติมได้ที่เว็บไซต์ของบริษัทฯ
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='row-8'>
                    <div className='button'>
                      <div className='label-button'>
                        <span className='form-item-children'>
                          <button type='submit' className='button-submit'>
                            <span>สมัครสมาชิก</span>
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default register