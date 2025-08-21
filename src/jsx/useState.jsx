import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const tambah = () => setCount(count + 1);
    const kurang = () => setCount(count - 1);

    return (
        <div>
            <h4>Hitungan: {count}</h4>
            <button onClick={tambah}>Tambah</button>
            <button onClick={kurang}>Kurang</button>
        </div>
    );
}

export default Counter;