import React from 'react'


export default function Error() {
    return (
        <div>

            <div className='max-w-full grid grid-cols-1'>

                <div class="bg-amber-300 w-fit   py-4 px-4 mx-auto  lg:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-sm text-center">
                        <h1 class="mb-4 text-7xl  tracking-tight font-extrabold lg:text-9xl text-black">404</h1>
                        <p class="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">Page not found currently</p>
                        <p class="mb-4 text-lg font-light text-gray-800">Sorry, we can't find such page.</p>

                        <button type="button" class="text-white  bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-1 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Back To Home</button>
                    </div>
                </div>

            </div >
        </div >
    )
}
