import React, { useState } from 'react'
import './Image.css'
import bag2 from './bag2.jpg'
import multishoe from './multishoe.jpg'
import redshoe1 from './redshoe1.jpg'
function Image() {
  return (
    <div>
        <div className='shoe'>
        <label className='super my-5 mx-5'>Super Flash Sale<br/>50% Off</label>
                   <div className='container margin'>
                <div className='row'>
                  <div className='col-4 px-0'>
                    <div className='card '>
                      <div className='card-body'>
                    <h4 className='card-title title'>FS - QUILTED MAXI <br/>CROSS BAG</h4>
                    <div className='ms-5'>
                    <img src={bag2} width='80%'/></div>
                    <div className='d-flex'>
                    <p className=' five'>$534,33 <label className='off ms-2'> 24% Off</label></p></div>
                    <p className='text-end two'>$299,43</p>
                    </div>
                    </div>
                    </div>
                    <div className='col-4 px-0'>
                    <div className='card'>
                      <div className='card-body'>
                    <h4 className='card-title d-flex justify-content-between title'>FS - Nike Air <br/>Max 270 React... <label className='two'>$299,43</label></h4>
                    <div className='ms-5'>
                    <img src={multishoe} width='70%'/></div>
                    <div className='d-flex'>
                    <p className='five'>$534,33 <label className='off ms-2'> 24% Off</label></p></div>
                    </div>
                    </div>
                    </div>
                    <div className='col-4 px-0'>
                    <div className='card'>
                      <div className='card-body'>
                      
                    <h4 className='card-title title'>FS - Nike Air <br/>Max 270 React... </h4>
                    <div className='d-flex'>
                    <p className='five'>$534,33 <label className=' off ms-2'> 24% Off</label></p></div>
                    <div className='img3'>
                    <img src={redshoe1}  width='77%'/></div>
                    
                    <p className='text-end two'>$299,43</p>
                    </div>
                    </div>
                    </div>
                
                   
                </div>
                </div>
        </div>
        
    </div>
  )
}

export default Image