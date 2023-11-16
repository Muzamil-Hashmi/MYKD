import React from 'react'

const Card = () => {
    return (
        <div className='' >
            <div className="flex flex-wrap justify-center gap-6">
                <div className="card w-1/3 mt-4 p-5 card-side border-black border-2 flex gap-2 rounded-md justify-around bg-gray-900 hover:border-green-500 hover:shadow-xl">

                    <figure><img src="/assets/10001.jpg" alt="Movie" className='rounded-md' /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-xl font-bold hover:text-yellow-400">WOLF GAMING ART</h2>
                        <div className='flex justify-around gap-1 items-center my-6'>
                            <img src="/assets/10013.png" alt="Movie" className="w-10 h-10 rounded-full" />
                            <h1 className='hover:text-yellow-400'>Alax Max</h1>
                            <h1>|</h1>
                            <h1>CREATOR</h1>
                        </div>
                        <div className='w-full h-16 border rounded-md flex  justify-around items-center'>
                            <h1>1.002 <span className='text-yellow-400'>ETH</span></h1>
                            <button className="btn btn-primary bg-yellow-500 p-2 px-5 rounded-md  hover:bg-green-500 ">Bid</button>


                        </div>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card w-1/3 mt-4 p-5 card-side border-black border-2 flex gap-2 rounded-md justify-around bg-gray-900 hover:border-green-500 hover:shadow-xl">

                    <figure><img src="/assets/10011.jpg" alt="Movie" className='rounded-md' /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-xl font-bold hover:text-yellow-400">FOREST PRINCESS</h2>
                        <div className='flex justify-around gap-1 items-center my-6'>
                            <img src="/assets/10013.png" alt="Movie" className="w-10 h-10 rounded-full" />
                            <h1 className='hover:text-yellow-400'>Alax Max</h1>
                            <h1>|</h1>
                            <h1>CREATOR</h1>
                        </div>
                        <div className='w-full h-16 border rounded-md flex  justify-around items-center'>
                            <h1>1.068 <span className='text-yellow-400'>ETH</span></h1>
                            <button className="btn btn-primary bg-yellow-500 p-2 px-5 rounded-md  hover:bg-green-500 ">Bid</button>


                        </div>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </div>
            <div className=' flex justify-start'>
                <div className="card w-full md:w-1/2 lg:w-1/3 mt-4 p-5 ">


                </div>
                <div className="card w-full md:w-1/2 lg:w-1/3 mt-4 p-5 card-side border-black border-2 flex gap-2 rounded-md justify-around bg-gray-900 hover:border-green-500 hover:shadow-xl">

                    <figure><img src="/assets/10012.jpg" alt="Movie" className='rounded-md' /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-xl font-bold hover:text-yellow-400">
                            GIRL FIREFLY ART</h2>
                        <div className='flex justify-around gap-1 items-center my-6'>
                            <img src="/assets/10013.png" alt="Movie" className="w-10 h-10 rounded-full" />
                            <h1 className='hover:text-yellow-400'>Alax Max</h1>
                            <h1>|</h1>
                            <h1>CREATOR</h1>
                        </div>
                        <div className='w-full h-16 border rounded-md flex  justify-around items-center'>
                            <h1>1.025 <span className='text-yellow-400'>ETH</span></h1>
                            <button className="btn btn-primary bg-yellow-500 p-2 px-5 rounded-md  hover:bg-green-500 ">Bid</button>


                        </div>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Card