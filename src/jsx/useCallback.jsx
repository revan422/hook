import React, { useState, useCallback } from "react";

export default function DaftarItem() {
  const [items, setItems] = useState([]);

  const tambahItem = useCallback(() => {
    setItems((prevItems) => [
      ...prevItems,
      'Item ${prevItems.length + 1}',
    ]);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Daftar Item</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={tambahItem}>Tambah Item</button>
    </div>
  );
}