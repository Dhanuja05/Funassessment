import React from 'react'
import './Navbar.css'
import { Dropdown } from 'react-bootstrap';
import { IoPersonOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
function Navbar() {
  return (
    <div className='container '>
      <div className='row '>
      

      
        <div className=' col-8'>
          <div  className='d-flex'>
          <div>
            <Dropdown>
          <Dropdown.Toggle variant="outline-none shadow-none" id="dropdown-basic">
            EN
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/korean">KOREAN</Dropdown.Item>
            <Dropdown.Item href="#/tamil">TAMIL</Dropdown.Item>
            <Dropdown.Item href="#/hindi">HINDI</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown></div>
          <div><Dropdown>
            <Dropdown.Toggle variant="outline-none shadow-none" id="dropdown-basic">
              USD
            </Dropdown.Toggle>

            <Dropdown.Menu variant='outline-none hover-none'>
              <Dropdown.Item href="#/rs">RS</Dropdown.Item>
              <Dropdown.Item href="#/yan">YEN</Dropdown.Item>
              <Dropdown.Item href="#/euro">EURO</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown></div></div>
          </div>
        <div className=' col-4'>
        <div className=' d-flex justify-content-evenly'>
          <div className='d-flex align-items-center'><IoPersonOutline size='20'/>
          <label className='  profile'>Myprofile</label>
          </div>
          
          <div className='mt-1'><FiShoppingCart size='23'/></div> 
          <div>
          <label className='items mt-1'>Items</label></div>
          <div className='d-flex align-items-center'><label className='dollar'>$0.00 </label><div><AiOutlineSearch size='25' className='ms-2 mt-1'/></div></div>
          
          </div>
        </div>
        </div>
       
    </div>
  )
}

export default Navbar