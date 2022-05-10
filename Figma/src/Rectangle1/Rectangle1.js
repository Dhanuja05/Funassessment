import React from 'react'
import './Rectangle1.css'
import dark1 from './dark1.png'
function Rectangle1() {
  return (
    <div>
        <div className='blue'>
           <div className='row'>
               <div className='col-6'>
                 <label className='mt-5 pt-5 mx-5 px-5 adidas1'>
                 Adidas Men Running
                Sneakers
                 </label>
                 <p className='perf pt-5 pb-2 mx-5 px-5'>Performance and design. Taken right to the edge.</p>
                <label className='shop  mx-5 px-5'>SHOP NOW</label>
                <div className='boder2 '></div>
               </div>
               <div className='col-6'>
                   <div className='dark'>
               <img src={dark1} width='100%'/></div>
               </div>
           </div>
        </div>
    </div>
  )
}

export default Rectangle1