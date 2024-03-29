 import React from 'react';
 import './footer.css';

 const Footer = ()=>{

  return(
    <>
      <div className='container-fluid bg-black text-light p-5'>
       <div className='footer-box'>
       <div className='row'>
          <div className='col-md-6 d-flex justify-content-center'>
            <div>
              <h5 className='footer-headings'>BE THE FIRST TO KNOW</h5>
              <p className="footer-p">Sign up for updates fromo metta muse.</p>
              <div style={{margin:"40px 0px"}}>
                <input type="text" className='inputEmail' placeholder='Enter your e-mail...'/>
                <button className='btn-subscribe'>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div className='col-md-6 d-flex justify-content-center'>
            <div>
              <h5>CONTACT US</h5>
              <p className="footer-p">+44 221 133 5360</p>
              <p className="footer-p">costomercare@mettamuse.com</p>
              <h5>CURRENCY</h5>
              <div style={{display:"flex"}}>
                <img className='flag' src={"./img/america-flag.jpg"} alt='flag image'/>
                <div className='star'></div>
                <h5>USD</h5>
              </div>
              <p className="footer-p">Transaction will be completed in Euros and a currency reference is available on hover.</p>
            </div>
          </div>
        </div>
        <hr style={{height:"2px",backgroundColor:"white",color:"white",marginLeft:"100px"}}/>
        <div className='row'>
          <div className='col-md-3 d-flex justify-content-center'>
            <div>
            <h5 className='pt-4'>mettā muse</h5>
            <ul className='footer-p' style={{textDecoration:"none",lineHeight:"30px",listStyle:"none",margin:"0px",padding:"0px"}}>
              <li>About Us</li>
              <li>Stories</li>
              <li>Aetisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
            </div>
          </div>
          <div className='col-md-3 d-flex justify-content-center'>
          <div>
          <h5 className='pt-4'>QUICK LINK</h5>
            <ul className='footer-p' style={{textDecoration:"none",lineHeight:"30px",listStyle:"none",margin:"0px",padding:"0px"}}>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          </div>
          <div className='col-md-6 '>
            <div style={{marginLeft:"100px"}}>
              <h5 className='pt-4'>FOLLOW US</h5>
              <div style={{display:'flex',margin:"30px 0px 50px 0px"}}>
                <div className='social-Icon'>
                  <i class="fa-brands fa-instagram"></i>
                </div>
                <div className='social-Icon'>
                  <i class="fa-brands fa-linkedin"></i>
                </div>
              </div>
              <h5>mettā muse ACCEPTS</h5>
              <div>
                <img className="logo-img" src={"../img/logo/g-pay.png"}/>
                <img className="logo-img" src={"../img/logo/Mastercard.jpg"}/>
                <img className="logo-img" src={"../img/logo/pay-pal.png"}/>
                <img className="logo-img" src={"../img/logo/apple-pay.webp"}/>
                <img className="logo-img" src={"../img/logo/shop-pay.webp"}/>
              </div>
            </div>
          </div>
        </div>
       </div>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <p style={{fontSize:"12px",margin:"20px"}}>Copyright © 2023 mettamuse. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  )

 } 

 export default Footer;

