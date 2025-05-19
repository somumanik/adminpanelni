'use client';

import React, { useState } from 'react';
import { FaFilter, FaSearch, FaTimes } from "react-icons/fa";
import { RiFilterOffFill } from "react-icons/ri";

import { MdEdit } from "react-icons/md";
export default function Newslatter() {
    const [showSearchBar, setShowSearchBar] = useState(false); // 🔁 toggle input visibility
    const [searchText, setSearchText] = useState(''); // 📄 input value

    return (
        <>
            {/* 🔍 Top search box - only visible when toggled */}
            {showSearchBar && (
                <div className='flex items-center gap-2 px-5 mt-5'>
                    <input
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="Search Name"
                        className='w-[300px] border border-gray-400 p-2 rounded-md'
                    />
                    {/* 🔍 Search icon button (just like image) */}
                    <button className='bg-blue-700 text-white p-3 rounded-md'>
                        <FaSearch />
                    </button>
                </div>
            )}

            {/* Table section */}
            <section className='mt-5 max-w-full rounded-md' style={{ border: "1px solid #ccc" }} id='userForm'>
                {/* Table header area */}
                <div className='bg-slate-100 flex p-4 justify-between items-center form-heading'>
                    <div>
                        <h3 className='text-[26px] font-semibold'>View Sub Sub Category</h3>
                    </div>

                    {/* Action buttons */}
                    <div className='flex items-center gap-2 mr-3'>
                        {/* Toggle Search bar - uses FaFilter / FaTimes icon */}
                        <button
                            onClick={() => setShowSearchBar(!showSearchBar)}
                            className='text-white font-bold w-[40px] h-[40px] rounded-sm flex justify-center items-center bg-blue-700'
                        >
                            {showSearchBar ? <RiFilterOffFill /> : <FaFilter />}
                        </button>

                        <button className='bg-green-700 rounded-sm py-2 px-4 font-semibold text-sm text-white'>
                            Change Status
                        </button>
                        <button className='bg-red-700 rounded-sm py-2.5 px-5 font-semibold text-sm text-white'>
                            Delete
                        </button>
                    </div>
                </div>

                {/* Table content */}
                <div className='form px-4 '>
                    <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                        <thead className='text-xs h-[40px] text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                            <tr className=''>
                                <th className='lg:w-[3%] sm:w-[8%]'>
                                    <div className='flex items-center'>
                                        <input type="checkbox" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ' />
                                    </div>
                                </th>

                                <th scope='col' className='lg:w-[25%] sm:w-[18%]'>Parent Category Name</th>
                                <th scope='col' className='lg:w-[20%] sm:w-[17%]'>Sub Category Name</th>
                                <th scope='col' className='w-[20%]'>Category Name</th>
                                <th scope='col' className='w-[10%]'>image</th>
                                <th scope='col' className='lg:w-[8%] sm:w-[10%]' >order</th>
                                <th scope='col' className='lg:w-[11%] sm:w-[13%]' >status</th>
                                <th scope='col' className='w-[15%]'>action</th>

                            </tr>
                        </thead>
                        <tbody>


                            <tr className='bg-white  border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600'>
                                <td className='w-[3%] py-7'>
                                    <input type="checkbox" className='w-4 h-4' name="" id="" />
                                </td>
                                <td className='text-base font-semibold text-black '>Men</td>
                                <td className='text-base font-semibold text-black '>Men</td>
                                <td className='text-base font-semibold text-black '>Shoe</td>
                                <td><img src="https://packshifts.in/images/iso.png" width={40} height={40} alt="" /></td>
                                <td className='text-start'>1</td>
                                <td className=''><button className=' bg-gradient-to-r from-green-400 via-green-500 to-green-600 py-1.5 text-white font-semibold px-5 rounded-sm'>Active</button></td>
                                <td><button className=' flex justify-center items-center text-white bg-blue-500 w-[40px] h-[40px] rounded-[50%]'>
                                    <MdEdit className='text-[18px]' />
                                </button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}
