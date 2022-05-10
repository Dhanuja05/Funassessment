import React from 'react'
import './Shipping.css'
import Truck from './Truck.png'
import dollarpath from './dollarpath.png'
import person from './person.png'
function Shipping() {
  return (
    <div>
        <div>
            <div className='d-flex justify-content-around mt-5'>
                <img src={Truck}/>
                <img src={dollarpath}/>
                <img src={person}/>
            </div>
            <div className='d-flex justify-content-around mt-4  label1'>
                <label>FREE SHIPPING</label>
                <label>100% REFUND</label>
                <label>SUPPORT 24/7</label>
            </div>
               <div className='d-flex justify-content-around para1 mt-3'>
                   <p>Lorem Ipsum is simply <br/>dummy text of the <br/>printing and typesetting <br/>industry.</p>
                   <p>Lorem Ipsum is simply <br/>dummy text of the <br/>printing and typesetting <br/>industry.</p>
                   <p>Lorem Ipsum is simply <br/>dummy text of the <br/>printing and typesetting <br/>industry.</p>
               </div>
            
        </div>
    </div>
  )
}

export default Shipping