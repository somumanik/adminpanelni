import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'dropify/dist/js/dropify.min.js';
import 'dropify/dist/css/dropify.min.css';


export default function DropifyInput({ height = 250 }) {
  const fileInputRef = useRef(null);

  // Initialize dropify after component mounts
  useEffect(() => {
    if (fileInputRef.current) {
      $(fileInputRef.current).dropify({
        messages: {
          default: 'Drag and drop', // ✅ Show only this
          replace: 'Drag and drop', // (Optional) for replace too
          remove: 'Remove',
          error: ''
        }
      }); // Dropify initialization
    }
  }, []);


  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      $(ref.current).dropify();
    }
  }, []);
  return <input type="file" className="dropify" ref={ref} data-height={height} />;
}
