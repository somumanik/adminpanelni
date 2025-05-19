// import React from 'react'

// export default function AddSlider() {
//     return (
//         <>
//             <section className='mt-5 max-w-full rounded-md  ' style={{ border: "1px solid #ccc" }} id='addSlider'>
//                 <div className=' bg-slate-100 flex p-4 justify-between items-center form-heading' style={{ borderBottom: "1px solid #ccc" }}>
//                     <h3 className='text-[26px] font-semibold'>Add Slider</h3>
//                 </div>
//                 <div>
//                     <form action="" className='p-2'>
//                         <div className='grid grid-cols-[35%_auto] gap-5'>
//                             {/* <div className='' style={{ border: "1px solid red" }}>
//                                 <label htmlFor="" className='text-[16px] font-semibold'>Category Image</label>
//                                 <input type="file" />
//                             </div> */}
//                             <div>
//                                 <label htmlFor="" className='text-[16px] font-semibold'>Title</label>
//                                 <input type="text" placeholder='title' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

//                                 <label htmlFor="" className='text-[16px] font-semibold'>Order</label>
//                                 <input type="number" placeholder='Order' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />
//                             </div>
//                         </div>

//                         <button className='text-white bg-purple-700 border-0 my-5 rounded-sm p-2'>Add Slider</button>
//                     </form>

//                 </div>
//             </section>
//         </>
//     )
// }





// 'use client';

// import React, { useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';

// export default function AddSliderForm() {

//   // 📁 State ya handler agar file ko handle karna ho future mein
//   const onDrop = useCallback((acceptedFiles) => {
//     console.log(acceptedFiles); // 📸 Image files yaha milengi
//     // Aage file upload logic yaha add kar sakte ho
//   }, []);

//   // ⚙️ Dropzone config
//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

//   return (
//     <div className="border rounded-md p-4">
//       <div className="bg-slate-100 px-4 py-3 border-b">
//         <h2 className="text-xl font-bold">Add Slider</h2>
//       </div>

//       <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* 🟣 Yahi jagah hai jaha tumhe drag and drop wala input paste karna hai */}
//         <div>
//           <label className="font-semibold block mb-2">Choose Image</label>

//           {/* 👇👇👇 Drag and Drop Zone Starts Here 👇👇👇 */}
//           <div
//             {...getRootProps()}
//             className="border border-gray-300 h-[250px] flex justify-center items-center cursor-pointer bg-white"
//           >
//             <input {...getInputProps()} />
//             {
//               isDragActive
//                 ? <p className="text-gray-500">Drop the files here ...</p>
//                 : <div className="text-center text-gray-400">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V4m0 0L8 8m4-4l4 4" />
//                     </svg>
//                     <p>Drag and drop</p>
//                   </div>
//             }
//           </div>
//           {/* 👆👆👆 Drag and Drop Zone Ends Here 👆👆👆 */}
//         </div>

//         {/* Right side fields */}
//         <div>
//           <label className="font-semibold block mb-2">Title</label>
//           <input type="text" placeholder="Title" className="border w-full p-2 rounded-md mb-4" />

//           <label className="font-semibold block mb-2">Order</label>
//           <input type="number" placeholder="Order" className="border w-full p-2 rounded-md" />
//         </div>
//       </div>

//       <div className="p-4">
//         <button className="bg-purple-700 text-white px-5 py-2 rounded-md">Add Slider</button>
//       </div>
//     </div>
//   );
// }



'use client';

import React from 'react';

import DropifyInput from '../Dropify/DropifyInput';

export default function AddSliderWithDropify() {

    return (
        <>
            <section className='mt-5 max-w-full rounded-md  ' style={{ border: "1px solid #ccc" }} id='addSlider'>
                <div className=' bg-slate-100 flex p-4 justify-between items-center form-heading' style={{ borderBottom: "1px solid #ccc" }}>
                    <h3 className='text-[26px] font-semibold'>Add Slider</h3>
                </div>
                <div>
                    <form action="" className='p-2'>
                        <div className='grid grid-cols-[35%_auto] gap-5'>

                            {/*  Dropify input - image upload */}
                            {/* <div>
                                <label className="font-semibold block mb-2">Choose Image</label>
                                <input type="file"
                                    className="dropify" ref={fileInputRef}
                                    data-height="200"
                                />
                            </div> */}
                            <div>
                                <label className="font-semibold block mb-2">Choose Image</label>
                                <DropifyInput height={250} />
                            </div>

                            {/* 📝 Other form fields */}
                            <div className='mt-1'>
                                <label htmlFor="" className='text-[18px] font-semibold'>Title</label>
                                <input type="text" placeholder='title' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

                                <label htmlFor="" className='text-[18px] font-semibold'>Order</label>
                                <input type="number" placeholder='Order' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />
                            </div>
                        </div>


                        <button className='text-white bg-purple-700 border-0 my-5 rounded-sm p-2'>Add Slider</button>
                    </form>

                </div>
            </section>
        </>
    );
}




