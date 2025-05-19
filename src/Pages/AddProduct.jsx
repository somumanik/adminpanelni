


// 'use client';
// import DropifyInput from '../Dropify/DropifyInput'



// export default function AddProduct() {
//     const [description, setDescription] = useState('');

//     return (
//         <>
//             <section className='mt-5 max-w-full rounded-md  ' id='addProduct'>
//                 {/* <div className=' bg-slate-100 flex p-4 justify-between items-center form-heading' style={{ borderBottom: "1px solid #ccc" }}>
//                     <h3 className='text-[26px] font-semibold'>Add Sub Category</h3>
//                 </div> */}
//                 <div>
//                     <form action="" className='p-2'>
//                         <div className='grid grid-cols-3 gap-5'>
//                             <div>
//                                 <div>
//                                     <label className="font-semibold block mb-2">Choose Image</label>
//                                     <DropifyInput />
//                                 </div>
//                                 <div>
//                                     <label className="font-semibold block mb-2">Choose Image</label>
//                                     <DropifyInput />
//                                 </div>
//                                 <div>
//                                     <label className="font-semibold block mb-2">Choose Image</label>
//                                     <DropifyInput />
//                                 </div>

//                             </div>

//                             <div className='mt-2'>
//                                 <label htmlFor="" className='text-[16px] font-semibold'>Product Name</label>
//                                 <input type="text" placeholder='Product Name' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

//                                 <label htmlFor="" className='text-[16px] font-semibold'>Select Sub Category </label>
//                                 <br />
//                                 <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
//                                     <option value="">Select Category</option>
//                                     <option value="">Mobile Phones</option>
//                                     <option value="">Leptops</option>
//                                     <option value="">Men's Wear</option>
//                                     <option value="">Women's Wear</option>
//                                 </select>

//                                 <label htmlFor="" className='text-[16px] font-semibold'>Select Meterial</label>
//                                 <br />
//                                 <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
//                                     <option value="">Nothing Selected</option>
//                                     <option value="">Neem</option>
//                                     <option value="">Babbul</option>
//                                     <option value="">Neem</option>
//                                     <option value="">Babbul</option>
//                                 </select>

//                                 <label htmlFor="" className='text-[16px] font-semibold'>Select Product Type</label>
//                                 <br />
//                                 <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
//                                     <option value="">Nothing Selected</option>
//                                     <option value="">Featured</option>
//                                     <option value="">New Arrival</option>
//                                     <option value="">OnSale</option>
//                                 </select>

//                                 <label htmlFor="" className='text-[16px] font-semibold'>Is Top Rated</label>
//                                 <br />
//                                 <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
//                                     <option value="">Nothing Selected</option>
//                                     <option value="">Yes</option>
//                                     <option value="">No</option>
//                                 </select>


//                                 <label htmlFor="" className='text-[16px] font-semibold'>Actual Price</label>
//                                 <input type="text" placeholder='Actual Price' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

//                                 <label htmlFor="" className='text-[16px] font-semibold'>Total In Stocks</label>
//                                 <input type="text" placeholder='Total In Stocks' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />
//                             </div>

//                             <div className='mt-2'>
//                                 <label htmlFor="" className='text-[16px] font-semibold'>Select Parent Category</label>
//                                 <br />
//                                 <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
//                                     <option value="">Nothing Selected</option>
//                                     <option value="">Mobile Phones</option>
//                                     <option value="">Leptops</option>
//                                     <option value="">Men's Wear</option>
//                                     <option value="">Women's Wear</option>
//                                 </select>

//                                 <label htmlFor="" className='text-[16px] font-semibold'>Select Sub Sub Category</label>
//                                 <br />
//                                 <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
//                                     <option value="">Nothing Selected</option>
//                                     <option value="">Neem</option>
//                                     <option value="">Babbul</option>
//                                     <option value="">Neem</option>
//                                     <option value="">Babbul</option>
//                                 </select>

//                                 <label htmlFor="" className='text-[16px] font-semibold'>Select Color</label>
//                                 <br />
//                                 <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
//                                     <option value="">Nothing Selected</option>
//                                     <option value="">Red</option>
//                                     <option value="">Green</option>
//                                     <option value="">Blue</option>
//                                 </select>

//                                 <label htmlFor="" className='text-[16px] font-semibold'>Is Best Selling</label>
//                                 <br />
//                                 <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
//                                     <option value="">Nothing Selected</option>
//                                     <option value="">Yes</option>
//                                     <option value="">No</option>
//                                 </select>

//                                 <label htmlFor="" className='text-[16px] font-semibold'>Is Upsell</label>
//                                 <br />
//                                 <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
//                                     <option value="">Nothing Selected</option>
//                                     <option value="">Yes</option>
//                                     <option value="">No</option>
//                                 </select>

//                                 <label htmlFor="" className='text-[16px] font-semibold'>Sale Price</label>
//                                 <input type="text" placeholder='Sale Price' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

//                                 <label htmlFor="" className='text-[16px] font-semibold'>Order</label>
//                                 <input type="text" placeholder='Order' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />
//                             </div>
//                         </div>

//                         <div>
//                             <div className='mt-3 col-span-3'>
//                                 <label className='text-[16px] font-semibold block mb-2'>Product Description</label>
//                                 {/* EditorProvider se wrap kar rahe hain Editor ko */}
//                                 {/* <EditorProvider>
//                                     <Editor
//                                         value={description}
//                                         onChange={(e) => setDescription(e.target.value)}
//                                         style={{ minHeight: '200px' }}
//                                     />
//                                 </EditorProvider> */}
//                                 <div className='mt-5'>
//                                     <label className='text-[16px] font-semibold block mb-2'>Description</label>
//                                     <ReactQuill
//                                         theme="snow"
//                                         value={description}
//                                         onChange={setDescription}
//                                         style={{ height: '250px', marginBottom: '50px' }}
//                                     />
//                                 </div>
//                             </div>


//                         </div>

//                         <button className='text-white bg-purple-700 border-0 my-5 rounded-sm p-2'>Add Category</button>
//                     </form>

//                 </div>
//             </section>
//         </>
//     )
// }


'use client';

import React, { useState } from 'react';
import DropifyInput from '../Dropify/DropifyInput';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';


export default function AddProduct() {
    const [description, setDescription] = useState('');

    const editor = useEditor({
        extensions: [StarterKit],
        content: '',
        onUpdate({ editor }) {
            setDescription(editor.getHTML());
        },
    });


    return (
        <>
            <section className='mt-5 max-w-full rounded-md' id='addProduct'>
                <div>
                    <form action="" className='p-2'>
                        <div className='grid grid-cols-3 gap-5'>
                            {/* LEFT COLUMN - Image Inputs */}
                            <div>
                                <div>
                                    <label className="font-semibold block mb-2">Choose Image</label>
                                    <DropifyInput />
                                </div>
                                <div>
                                    <label className="font-semibold block mb-2">Choose Image</label>
                                    <DropifyInput />
                                </div>
                                <div>
                                    <label className="font-semibold block mb-2">Choose Image</label>
                                    <DropifyInput />
                                </div>
                            </div>

                            {/* MIDDLE COLUMN - Product Info */}
                            <div className='mt-2'>
                                <label className='text-[16px] font-semibold'>Product Name</label>
                                <input type="text" placeholder='Product Name' className='input-field' />

                                <label className='text-[16px] font-semibold'>Select Sub Category</label>
                                <select className='input-field'>
                                    <option value="">Select Category</option>
                                    <option>Mobile Phones</option>
                                    <option>Laptops</option>
                                    <option>Men's Wear</option>
                                    <option>Women's Wear</option>
                                </select>

                                <label className='text-[16px] font-semibold'>Select Material</label>
                                <select className='input-field'>
                                    <option value="">Nothing Selected</option>
                                    <option>Neem</option>
                                    <option>Babbul</option>
                                </select>

                                <label className='text-[16px] font-semibold'>Select Product Type</label>
                                <select className='input-field'>
                                    <option value="">Nothing Selected</option>
                                    <option>Featured</option>
                                    <option>New Arrival</option>
                                    <option>OnSale</option>
                                </select>

                                <label className='text-[16px] font-semibold'>Is Top Rated</label>
                                <select className='input-field'>
                                    <option value="">Nothing Selected</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>

                                <label className='text-[16px] font-semibold'>Actual Price</label>
                                <input type="text" placeholder='Actual Price' className='input-field' />

                                <label className='text-[16px] font-semibold'>Total In Stocks</label>
                                <input type="text" placeholder='Total In Stocks' className='input-field' />
                            </div>

                            {/* RIGHT COLUMN - More Options */}
                            <div className='mt-2'>
                                <label className='text-[16px] font-semibold'>Select Parent Category</label>
                                <select className='input-field'>
                                    <option>Nothing Selected</option>
                                    <option>Mobile Phones</option>
                                    <option>Laptops</option>
                                    <option>Men's Wear</option>
                                    <option>Women's Wear</option>
                                </select>

                                <label className='text-[16px] font-semibold'>Select Sub Sub Category</label>
                                <select className='input-field'>
                                    <option>Nothing Selected</option>
                                    <option>Neem</option>
                                    <option>Babbul</option>
                                </select>

                                <label className='text-[16px] font-semibold'>Select Color</label>
                                <select className='input-field'>
                                    <option>Nothing Selected</option>
                                    <option>Red</option>
                                    <option>Green</option>
                                    <option>Blue</option>
                                </select>

                                <label className='text-[16px] font-semibold'>Is Best Selling</label>
                                <select className='input-field'>
                                    <option>Nothing Selected</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>

                                <label className='text-[16px] font-semibold'>Is Upsell</label>
                                <select className='input-field'>
                                    <option>Nothing Selected</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>

                                <label className='text-[16px] font-semibold'>Sale Price</label>
                                <input type="text" placeholder='Sale Price' className='input-field' />

                                <label className='text-[16px] font-semibold'>Order</label>
                                <input type="text" placeholder='Order' className='input-field' />
                            </div>
                        </div>

                        {/* === WYSIWYG DESCRIPTION FIELD === */}
                        <section className='mt-5 max-w-full rounded-md' id='addProduct'>
                            <div>
                                <form action="" className='p-2'>
                                    <div className='grid grid-cols-3 gap-5'>
                                        {/* ... your other columns exactly same as before ... */}
                                    </div>

                                    {/* === Tiptap DESCRIPTION FIELD === */}
                                    <div className='mt-3 col-span-3'>
                                        <label className='text-[16px] font-semibold block mb-2'>Product Description</label>
                                        <div className="border border-gray-300 rounded-md p-2 min-h-[200px]">
                                            <EditorContent editor={editor} />
                                        </div>
                                    </div>

                                    <button className='text-white bg-purple-700 border-0 my-5 rounded-sm p-2'>
                                        Add Category
                                    </button>
                                </form>
                            </div>
                        </section>
                        <style jsx>{`
                .input-field {
                    width: 100%;
                    border: 2px solid #d1d5db;
                    height: 40px;
                    padding: 8px;
                    font-size: 14px;
                    border-radius: 4px;
                    margin-bottom: 20px;
                    box-shadow: 0 1px 2px rgba(0,0,0,0.1);
                }
            `}</style>
                        <button className='text-white bg-purple-700 border-0 my-5 rounded-sm p-2'>Add Category</button>
                    </form>
                </div>
            </section>

            {/* Tailwind helper class for inputs (optional) */}
            <style jsx>{`
                .input-field {
                    width: 100%;
                    border: 2px solid #d1d5db;
                    height: 40px;
                    padding: 8px;
                    font-size: 14px;
                    border-radius: 4px;
                    margin-bottom: 20px;
                    box-shadow: 0 1px 2px rgba(0,0,0,0.1);
                }
            `}</style>
        </>
    );
}
