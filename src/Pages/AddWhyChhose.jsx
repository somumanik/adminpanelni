import React from 'react'
import DropifyInput from '../Dropify/DropifyInput'

export default function AddWhyChhose() {
    return (
        <>
            <section className='mt-5 max-w-full rounded-md  ' style={{ border: "1px solid #ccc" }} id='addWhyChoose'>
                <div className=' bg-slate-100 flex p-4 justify-between items-center form-heading' style={{ borderBottom: "1px solid #ccc" }}>
                    <h3 className='text-[26px] font-semibold'>Add Why Choose Us</h3>
                </div>
                <div>
                    <form action="" className='p-2'>
                        <div className='grid grid-cols-[35%_auto] gap-5'>
                            <div>
                                <label className="font-semibold block mb-2">Choose Image</label>
                                <DropifyInput />
                            </div>
                            <div className='mt-2'>
                                <label htmlFor="" className='text-[16px] font-semibold'>Title</label>
                                <input type="text" placeholder='Title' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

                                <label htmlFor="" className='text-[16px] font-semibold'>Order</label>
                                <input type="number" placeholder='Order' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

                                <label htmlFor="" className='text-[16px] font-semibold'>Description</label>
                                <textarea className='text-sm w-full border-2 shadow-sm resize-none  border-gray-300 h-[100px] p-2 rounded-sm mt-1' />
                            </div>
                        </div>


                        <button className='text-white bg-purple-700 border-0 my-5 rounded-sm p-2'>Add Category</button>
                    </form>

                </div>
            </section>
        </>
    )
}
