"use client";
import { useState } from "react";

export default function Page() {
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = () => {};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input
          id="name"
          type="text"
          placeholder="Type your name...."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button type="submit">Predict Data</button>
      </form>
    </div>
  );
}
