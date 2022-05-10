import React from 'react'
import leather from './leather.png'
import { MdStar } from "react-icons/md";
import './Product.css'
function Product() {
  return (
    <div>
        

        <center><label className='features my-5'>FEATURED PRODUCTS</label></center>
            <br />
            <br />
            <div className='d-flex justify-content-around'>
                <div className='d-flex'>
                    <img src={leather} />
                    <div className='ms-4'>
                        <label className='titlea'> Blue Swade Nike <br />Sneakers</label>
                        <br/>
                        <div className='mt-2' >
                            <MdStar color='#FFC600' />
                            <MdStar color='#FFC600' />
                            <MdStar color='#FFC600' />
                            <MdStar color='#FFC600' />
                            <MdStar color=' #C1C8CE' />

                        </div>
                        <br/>
                        <div>
                            <label className='four'>$499</label>
                            <span className='five ms-2'>$599</span>
                        </div>
                    </div>
                </div>
                <div className='d-flex'>
                    <img src={leather} />
                    <div className='ms-4'>
                        <label className='titlea'> Blue Swade Nike <br />Sneakers</label>
                        <br/>
                     
                        <div className='mt-2'>
                            <MdStar color='#FFC600' />
                            <MdStar color='#FFC600' />
                            <MdStar color='#FFC600' />
                            <MdStar color='#FFC600' />
                            <MdStar color=' #C1C8CE' />

                        </div>
                        <br/>
                     
                        <div>
                            <label className='four'>$499</label>
                            <span className='five ms-2'>$599</span>
                        </div>
                    </div>
                </div>
                <div className='d-flex'>
                    <img src={leather} />
                    <div className='ms-4'>
                        <label className='titlea'> Blue Swade Nike <br />Sneakers</label>
                        <div className='mt-2'>
                            <MdStar color='#FFC600' />
                            <MdStar color='#FFC600' />
                            <MdStar color='#FFC600' />
                            <MdStar color='#FFC600' />
                            <MdStar color=' #C1C8CE' />

                        </div>
                        <br/>
                   
                        <div>
                            <label className='four'>$499</label>
                            <span className='five ms-2'>$599</span>
                        </div>
                    </div>
                </div>
               
            </div>

            <br/>
    </div>
  )
}

export default Product


