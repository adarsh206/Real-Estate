/* eslint-disable no-unused-vars */
import React from 'react'
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi"
import  CountUp  from "react-countup"

const Hero = () => {
  return (
    <section className='hero-wrapper'>
            <div className='paddings innerWidth flexCenter hero-container'>
               
               {/** left side */}

                <div className="flexColStart hero-left">
                    <div className='hero-title'>
                        <div className="circle" />
                        <h1>Get Your <br />
                        Most Suitable <br />
                        & Best Property</h1>
                    </div>
                    <div className='flexColStart hero-des'>
                        <span className='para'>Find a variety of properties that suit you very easily</span>
                        <span className='para'>Forget all difficulties in finding a residence for you.</span>
                    </div>

                    <div className="flexCenter search-bar">
                        <HiLocationMarker color= "var(--blue)" size={25} />
                        <input type='text'/>
                        <button className='button'>Search</button>
                    </div>

                    <div className=" stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={9800} end={10000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondary'>Premium Products</span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={2800} end={3000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondary'>Happy Customers</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp  end={50}  />
                                <span>+</span>
                            </span>
                            <span className='secondary'>Award Winning</span>
                        </div>
                    </div>

                </div>
              
                {/** right side */}

                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src='./hero-image.png' alt='' />
                    </div>
                    </div>
            </div>
    </section>
  )
}

export default Hero