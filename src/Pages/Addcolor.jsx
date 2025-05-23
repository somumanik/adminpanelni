// 

'use client';

import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

export default function Addcolor() {
  const [color, setColor] = useState('#000000');

  return (
    <>
      <section
        className="mt-5 max-w-full rounded-md"
        style={{ border: '1px solid #ccc' }}
        id="addColor"
      >
        <div className="bg-slate-100 flex p-2 justify-between items-center form-heading">
          <h3 className="text-[20px] font-semibold">Add Colors</h3>
        </div>
        <div>
          <form action="" className="p-2">
            <label className="text-[16px] font-semibold">Color Name</label>
            <input
              type="text"
              placeholder="Enter Color Name"
              className="text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1"
            />

            <label className="text-[16px] font-semibold mt-4 block">Order</label>
            <input
              type="number"
              placeholder="Enter Order"
              className="text-sm w-full border-2 shadow-sm border-gray-300 h-[40px] p-2 rounded-sm mt-1"
            />

            {/* 🔴 Color Picker Area */}
            <div className="flex items-center gap-4 mt-4">
              <ChromePicker
                color={color}
                onChange={(updatedColor) => setColor(updatedColor.hex)}
              />
              <div
                className="w-12 h-12 rounded border"
                style={{ backgroundColor: color }}
              />
            </div>

            <button className="text-white bg-purple-700 border-0 my-5 rounded-sm p-2">
              Add Color
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
