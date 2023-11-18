import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>


      <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: 'url("/assets/10051.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="hero-content flex justify-around items-center  ">

          <div className=' '>
         <h6 className='bg  w-1/2 font-bold'>
          LIVE GAMING
         </h6>
            <h1 className="text-8xl font-bold">STEAMING</h1>
            <p className="py-6 text-3xl">VIDEO GAMES ONLINE

            </p>
            <button className="btn btn-primary relative overflow-hidden p-10" >
              <img
                src="/assets/border.svg"
                alt="Contact us"
                className="absolute  top-0 left-0 w-full h-full
                "
                
              />
              <span className="relative text-2xl z-10">Contact us</span>
            </button>

<div className='mt-5' >
  <ul className='flex items-center gap-5' >
    <li>
      <a href="">
      <img
                src="/assets/10008.png"
                alt="Contact us"
                className=""
              />
      </a>
    </li>
    <li>
      <a href="">
      <img
                src="/assets/10009.png"
                alt="Contact us"
                className=""
              />
      </a>
    </li>  <li>
      <a href="">
      <img
                src="/assets/10010.png"
                alt="Contact us"
                className=""
              />
      </a>
    </li>
  </ul>
</div>

          </div>
          <div className='transition-transform mt-10 hover:scale-105'>
            <img src="https://themedox.com/mykd/wp-content/uploads/2023/10/slider_img01.png" className="max-w-sm rounded-lg shadow-2xl" />

          </div>

        </div>
        <div className="line"></div>

      </div>

    </>)
}

export default Hero