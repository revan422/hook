import React from "react";
import "./App.css";

// Import semua file hook di folder jsx
import UseStateDemo from "./jsx/useState";
import UseEffectDemo from "./jsx/useEffect";
import UseCallbackDemo from "./jsx/useCallback";
import UseContextDemo from "./jsx/useContext";
import UseImperativeHandleDemo from "./jsx/useImperativeHandle";
import UseLayoutEffectDemo from "./jsx/useLayoutEffect";
import UseMemoDemo from "./jsx/useMemo";
import UseReducerDemo from "./jsx/useReducer";
import UseRefDemo from "./jsx/useRef";

function App() {
  return (
    <div className="App">
      <h1>Belajar React Hooks</h1>

      <div className="card"><h2>useState</h2><UseStateDemo /></div>
      <div className="card"><h2>useEffect</h2><UseEffectDemo /></div>
      <div className="card"><h2>useCallback</h2><UseCallbackDemo /></div>
      <div className="card"><h2>useContext</h2><UseContextDemo /></div>
      <div className="card"><h2>useImperativeHandle</h2><UseImperativeHandleDemo /></div>
      <div className="card"><h2>useLayoutEffect</h2><UseLayoutEffectDemo /></div>
      <div className="card"><h2>useMemo</h2><UseMemoDemo /></div>
      <div className="card"><h2>useReducer</h2><UseReducerDemo /></div>
      <div className="card"><h2>useRef</h2><UseRefDemo /></div>
    </div>
  );
}

export default App;
