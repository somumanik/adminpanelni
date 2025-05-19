
'use client';

import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import DropifyInput from '../Dropify/DropifyInput'
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Heading from '@tiptap/extension-heading';
import TextStyle from '@tiptap/extension-text-style';


export default function AddProduct() {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Link,
            TextStyle,
            Heading.configure({
                levels: [1, 2, 3],
            }),
        ],
        content: '',
    });

    const setParagraph = () => editor?.chain().focus().setParagraph().run();
    const setHeading = (level) => editor?.chain().focus().toggleHeading({ level }).run();

    return (
        <>
            <section className='mt-5 max-w-full rounded-md' id='addProduct'>
                <div>
                     <form action="" className='p-2'>
                        <div className='grid grid-cols-3 gap-5'>
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

                            <div>
                                <label htmlFor="" className='text-[16px] font-semibold'>Product Name</label>
                                <input type="text" placeholder='Product Name' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

                                <label htmlFor="" className='text-[16px] font-semibold'>Select Sub Category </label>
                                <br />
                                <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                    <option value="">Select Category</option>
                                    <option value="">Mobile Phones</option>
                                    <option value="">Leptops</option>
                                    <option value="">Men's Wear</option>
                                    <option value="">Women's Wear</option>
                                </select>

                                <label htmlFor="" className='text-[16px] font-semibold'>Select Meterial</label>
                                <br />
                                <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                    <option value="">Nothing Selected</option>
                                    <option value="">Neem</option>
                                    <option value="">Babbul</option>
                                    <option value="">Neem</option>
                                    <option value="">Babbul</option>
                                </select>

                                <label htmlFor="" className='text-[16px] font-semibold'>Select Product Type</label>
                                <br />
                                <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                    <option value="">Nothing Selected</option>
                                    <option value="">Featured</option>
                                    <option value="">New Arrival</option>
                                    <option value="">OnSale</option>
                                </select>

                                <label htmlFor="" className='text-[16px] font-semibold'>Is Top Rated</label>
                                <br />
                                <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                    <option value="">Nothing Selected</option>
                                    <option value="">Yes</option>
                                    <option value="">No</option>
                                </select>


                                <label htmlFor="" className='text-[16px] font-semibold'>Actual Price</label>
                                <input type="text" placeholder='Actual Price' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

                                <label htmlFor="" className='text-[16px] font-semibold'>Total In Stocks</label>
                                <input type="text" placeholder='Total In Stocks' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />
                            </div>


                            <div>
                                <label htmlFor="" className='text-[16px] font-semibold'>Select Parent Category</label>
                                <br />
                                <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                    <option value="">Nothing Selected</option>
                                    <option value="">Mobile Phones</option>
                                    <option value="">Leptops</option>
                                    <option value="">Men's Wear</option>
                                    <option value="">Women's Wear</option>
                                </select>

                                <label htmlFor="" className='text-[16px] font-semibold'>Select Sub Sub Category</label>
                                <br />
                                <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                    <option value="">Nothing Selected</option>
                                    <option value="">Neem</option>
                                    <option value="">Babbul</option>
                                    <option value="">Neem</option>
                                    <option value="">Babbul</option>
                                </select>

                                <label htmlFor="" className='text-[16px] font-semibold'>Select Color</label>
                                <br />
                                <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                    <option value="">Nothing Selected</option>
                                    <option value="">Red</option>
                                    <option value="">Green</option>
                                    <option value="">Blue</option>
                                </select>

                                <label htmlFor="" className='text-[16px] font-semibold'>Is Best Selling</label>
                                <br />
                                <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                    <option value="">Nothing Selected</option>
                                    <option value="">Yes</option>
                                    <option value="">No</option>
                                </select>

                                <label htmlFor="" className='text-[16px] font-semibold'>Is Upsell</label>
                                <br />
                                <select name="" id="" className='w-full text-sm  border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5'>
                                    <option value="">Nothing Selected</option>
                                    <option value="">Yes</option>
                                    <option value="">No</option>
                                </select>

                                <label htmlFor="" className='text-[16px] font-semibold'>Sale Price</label>
                                <input type="text" placeholder='Sale Price' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mb-5' />

                                <label htmlFor="" className='text-[16px] font-semibold'>Order</label>
                                <input type="text" placeholder='Order' name="" id="" className='text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1' />
                            </div>
                        </div>


                        <button className='text-white bg-purple-700 border-0 my-5 rounded-sm p-2'>Add Category</button>
                    </form>
                    {/* === WYSIWYG DESCRIPTION FIELD === */}
                    <div className="w-full">
                        <label className="text-sm font-semibold mb-1 block">Description</label>

                        {/* === Toolbar === */}
                        <div className="flex items-center gap-1 border border-b-0 rounded-t-md bg-white px-2 py-1 text-sm">
                            {/* Dropdown for heading/paragraph */}
                            <select
                                className="text-sm border rounded px-1 py-0.5"
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (value === 'paragraph') setParagraph();
                                    else if (value.startsWith('heading')) setHeading(Number(value.split('-')[1]));
                                }}
                            >
                                <option value="paragraph">Normal</option>
                                <option value="heading-1">Heading 1</option>
                                <option value="heading-2">Heading 2</option>
                                <option value="heading-3">Heading 3</option>
                            </select>

                            {/* Formatting buttons */}
                            <button onClick={() => editor?.chain().focus().toggleBold().run()} className="toolbar-btn">B</button>
                            <button onClick={() => editor?.chain().focus().toggleItalic().run()} className="toolbar-btn italic">I</button>
                            <button onClick={() => editor?.chain().focus().toggleUnderline().run()} className="toolbar-btn underline">U</button>
                            <button onClick={() => {
                                const url = prompt('Enter URL');
                                if (url) {
                                    editor?.chain().focus().setLink({ href: url }).run();
                                }
                            }} className="toolbar-btn">🔗</button>
                            <button onClick={() => editor?.chain().focus().toggleBulletList().run()} className="toolbar-btn">• List</button>
                            <button onClick={() => editor?.chain().focus().toggleOrderedList().run()} className="toolbar-btn">1. List</button>
                            <button onClick={() => editor?.chain().focus().unsetAllMarks().clearNodes().run()} className="toolbar-btn">Tx</button>
                        </div>

                        {/* === Editor Area === */}
                        <div className="border border-gray-300 rounded-b-md p-2 min-h-[200px]">
                            <EditorContent editor={editor} />
                        </div>

                        {/* Tailwind styles */}
                        <style jsx>{`
                                    .toolbar-btn {
                                    padding: 4px 6px;
                                    border: 1px solid #ddd;
                                    border-radius: 4px;
                                    background: #f9f9f9;
                                    cursor: pointer;
                                    }
                                    .toolbar-btn:hover {
                                    background-color: #f1f1f1;
                                    }
                                `}
                        </style>
                    </div>


                </div>
            </section>
        </>
    );
}



// 'use client';

// import React from 'react';
// import { useEditor, EditorContent } from '@tiptap/react';
// import StarterKit from '@tiptap/starter-kit';
// import Underline from '@tiptap/extension-underline';
// import Link from '@tiptap/extension-link';
// import Heading from '@tiptap/extension-heading';
// import TextStyle from '@tiptap/extension-text-style';

// export default function RichTextEditor() {
//   const editor = useEditor({
//     extensions: [
//       StarterKit,
//       Underline,
//       Link,
//       TextStyle,
//       Heading.configure({
//         levels: [1, 2, 3],
//       }),
//     ],
//     content: '',
//   });

//   const setParagraph = () => editor?.chain().focus().setParagraph().run();
//   const setHeading = (level) => editor?.chain().focus().toggleHeading({ level }).run();

//   return (
//     <div className="w-full">
//       <label className="text-sm font-semibold mb-1 block">Description</label>

//       {/* === Toolbar === */}
//       <div className="flex items-center gap-1 border border-b-0 rounded-t-md bg-white px-2 py-1 text-sm">
//         {/* Dropdown for heading/paragraph */}
//         <select
//           className="text-sm border rounded px-1 py-0.5"
//           onChange={(e) => {
//             const value = e.target.value;
//             if (value === 'paragraph') setParagraph();
//             else if (value.startsWith('heading')) setHeading(Number(value.split('-')[1]));
//           }}
//         >
//           <option value="paragraph">Normal</option>
//           <option value="heading-1">Heading 1</option>
//           <option value="heading-2">Heading 2</option>
//           <option value="heading-3">Heading 3</option>
//         </select>

//         {/* Formatting buttons */}
//         <button onClick={() => editor?.chain().focus().toggleBold().run()} className="toolbar-btn">B</button>
//         <button onClick={() => editor?.chain().focus().toggleItalic().run()} className="toolbar-btn italic">I</button>
//         <button onClick={() => editor?.chain().focus().toggleUnderline().run()} className="toolbar-btn underline">U</button>
//         <button onClick={() => {
//           const url = prompt('Enter URL');
//           if (url) {
//             editor?.chain().focus().setLink({ href: url }).run();
//           }
//         }} className="toolbar-btn">🔗</button>
//         <button onClick={() => editor?.chain().focus().toggleBulletList().run()} className="toolbar-btn">• List</button>
//         <button onClick={() => editor?.chain().focus().toggleOrderedList().run()} className="toolbar-btn">1. List</button>
//         <button onClick={() => editor?.chain().focus().unsetAllMarks().clearNodes().run()} className="toolbar-btn">Tx</button>
//       </div>

//       {/* === Editor Area === */}
//       <div className="border border-gray-300 rounded-b-md p-2 min-h-[200px]">
//         <EditorContent editor={editor} />
//       </div>

//       {/* Tailwind styles */}
//       <style jsx>{`
//         .toolbar-btn {
//           padding: 4px 6px;
//           border: 1px solid #ddd;
//           border-radius: 4px;
//           background: #f9f9f9;
//           cursor: pointer;
//         }
//         .toolbar-btn:hover {
//           background-color: #f1f1f1;
//         }
//       `}</style>
//     </div>
//   );
// }
