import React, { useRef, useImperativeHandle, forwardRef } from "react";

const InputCustom = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    fokusKeInput: () => {
      inputRef.current.focus();
    }
  }));

  return <input ref={inputRef} placeholder="Ketik sesuatu..." />;
});

export default function UseImperativeHandleDemo() {
  const inputRef = useRef();

  return (
    <div>
      <InputCustom ref={inputRef} />
      <button onClick={() => inputRef.current.fokusKeInput()}>
        Fokus ke Input
      </button>
    </div>
  );
}
