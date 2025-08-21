import React, { useRef, useEffect } from 'react';

export default function FocusInput() {
  const inputRef = useRef(null); 

  useEffect(() =>{
    inputRef.current.focus();
  }, []);

  const fokusKeInput = () => {
    inputRef.current.focus(); 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <input
        ref={inputRef} 
        type="text"
        placeholder="Klik tombol untuk fokus"
      />
      <br /><br />
      <button onClick={fokusKeInput}>Fokus ke Input</button>
    </div>
  );
}