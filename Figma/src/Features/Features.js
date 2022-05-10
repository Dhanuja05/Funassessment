import React from 'react'
import './Features.css'
import Nikelogo from './Nikelogo.png'
import figma1 from './figma1.png'
import kronos from './kronos.png'
function Features() {
  return (
    <div>
        <div>
        <center><label className='latest my-5'>LATEST NEWS</label></center></div>
        <div className='container'>
        <div className='row'>
        <div className='d-flex justify-content-around'>
            <div className=' col-4'>
         
                <div className='d-flex '>
                <img src={Nikelogo}/>
                <div className='ms-3'>
                    <div className='date'>01 Jan, 2015</div>
                    <div className='fashion'>Fashion Industry</div>
                    <div><p className='lorem2'>Lorem Ipsum is simply<br/> dummy text of the <br/>printing and typesetting <br/>industry.</p></div>
                </div>
               
                </div>
               
               </div>
               <div className=' col-4'>
                <div className='d-flex'>
                <img src={figma1}/>
                <div className='ms-3'>
                    <div className='date'>01 Jan, 2015</div>
                    <div className='fashion'>Fashion Industry</div>
                    <div><p className='lorem2'>Lorem Ipsum is simply<br/> dummy text of the <br/>printing and typesetting <br/>industry.</p></div>
                </div>
               
            
               
               </div></div>
               <div className=' col-4'>
                <div className='d-flex'>
                <img src={kronos}/>
                <div className='ms-3'>
                    <div className='date'>01 Jan, 2015</div>
                    <div className='fashion'>Fashion Industry</div>
                    <div><p className='lorem2'>Lorem Ipsum is simply<br/> dummy text of the <br/>printing and typesetting <br/>industry.</p></div>
                </div>
               
            
               
               </div></div>
            
               </div>
               </div>
        </div>
    </div>
  )
}

export default Features