import React from 'react'
import './joinCommunity.css'

const JoinCommunity = () => {
    return (
        <div>

            <div className='h-screen text-center backgroundStyle '>

             <div className='my-20'>

             <a href="https://www.youtube.com/watch?v=ssrNcwxALS4&t=6s&ab_channel=IGN" target="_blank" rel="noopener noreferrer">
                    <div class="flex items-center justify-center">
                        <div class="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors duration-300 ease-in-out">
                            <svg className="w-8 h-8 ps-1  text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 3l14 9-14 9V3z"></path>
                            </svg>
                        </div>
                    </div>
                </a>
             </div>

                <h1 className='text-5xl font-bold'>JOIN THE <span className='text-green-500'> COMMUNITY</span></h1>
                <p className='my-5'>Join our Discord community and choosec onsteur
                </p>

                <button className="btn btn-primary relative overflow-hidden p-10" >
                    <img
                        src="/assets/border.svg"
                        alt="Contact us"
                        className="absolute  top-0 left-0 w-full h-full
                "

                    />
                    <span className="relative text-2xl z-10">JOIN DISCORD</span>
                </button>
            </div>


        </div>
    )
}

export default JoinCommunity