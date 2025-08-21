import React, { useState, useLayoutEffect } from "react";

export default function ScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useLayoutEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Posisi Scroll</h2>
      <p>Scroll Y: {scrollY}px</p>

      {/* Tambah konten panjang biar bisa di-scroll */}
      <div style={{ height: "1500px", background: "linear-gradient(#fff, #ccc)" }}>
        <p style={{ position: "sticky", top: 0, background: "white" }}>
          Scroll ke bawah untuk melihat nilai berubah
        </p>
      </div>
    </div>
  );
}