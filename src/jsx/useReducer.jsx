import React, { useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const tambahTodo = () => {
    if (input.trim() === "") return;
    setTodos([
      ...todos,
      { id: Date.now(), text: input, selesai: false }
    ]);
    setInput("");
  };

  const toggleSelesai = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, selesai: !todo.selesai } : todo
      )
    );
  };

  const hapusTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Todo List</h2>

      {/* Input tambah todo */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Tambah todo..."
      />
      <button onClick={tambahTodo}>Tambah</button>

      {/* Daftar todo */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ margin: "10px 0" }}>
            <span
              style={{
                textDecoration: todo.selesai ? "line-through" : "none",
                marginRight: "10px"
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => toggleSelesai(todo.id)}>
              {todo.selesai ? "Batalkan" : "Selesai"}
            </button>
            <button
              onClick={() => hapusTodo(todo.id)}
              style={{ marginLeft: "5px" }}
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}