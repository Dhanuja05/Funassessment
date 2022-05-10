import React from 'react'
import './Navbar1.css'
import { NavDropdown } from 'react-bootstrap';
import ecom from './ecom.png'
function Navbar1() {
  return (
    <div className='container'>
      <div className='row '>
        <div className='d-flex mt-2'>
          <div className='col-4'>

            <div className='d-flex align-items-center'>
              <img src={ecom} /><label className='fw-bold mt-3'>E-Comm</label>
            </div>
          </div>
       
          <div>
            <div className='d-flex justify-content-evenly mt-3'>
          <NavDropdown title='HOME' id="nav-dropdown">
          
            <div className='row'>
              
                <span className='col-4'>Category</span>
                <span className='col-4'>Category</span>
                <span className='col-4'>Category</span>
              
              <div className='row'>
                <div className='col-3'>
                <div>Corporate Shoes</div>
                <div>Sneakers</div>
                <div>Sandals</div>
                <div>Sport Shoe</div>
                <div>Trainers</div>                
                </div>

                <div className='col-2'>
                <div>Corporate Shoes</div>
                <div>Sneakers</div>
                <div>Sandals</div>
                <div>SportShoe</div>
                <div>Sneakers</div>                
                </div>

                <div className='col-2'>
                <div>HOTDEAL</div>
                <div>Sun Glasses</div>
                <div>Belts</div>
                <div>Handbags</div>
                <div>Sneakers</div>                
                </div>

                <div className='col-2'>
                <div>HOTDEAL</div>
                <div>Sun Glasses</div>
                <div>Belts</div>
                <div>Handbags</div>
                <div>Sneakers</div>                  
                </div>

                <div className='col-3'>
                <div>Corporate Shoes</div>
                <div>Sneakers</div>
                <div>Sandals</div>
                <div>SportShoe</div>
                <div>Sneakers</div>             
                </div>

              </div>

            </div>

          
          </NavDropdown>
          <div  className='mt-2'>
          <label className='ms-5'>BAGS</label>
          <label className='ms-5'>SNEAKERS</label>
          <label className='ms-5'>BELT</label>
          <label className='ms-5'>CONTACT</label></div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar1