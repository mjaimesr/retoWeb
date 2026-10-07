"use client";

import { useState, type ChangeEvent } from "react";

export default function Formulario() {
  const [form, setForm] = useState({
    username: "",
    fullName: "",
    age: "",
  });

  const [result, setResult] = useState<null | typeof form>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label>Username:</label>
        <input
          name="username"
          type="text"
          value={form.username}
          onChange={handleChange}
          className="border border-black"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label>FullName:</label>
        <input
          name="fullName"
          type="text"
          value={form.fullName}
          onChange={handleChange}
          className="border border-black"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label>Age:</label>
        <input
          name="age"
          type="text"
          value={form.age}
          onChange={handleChange}
          className="border border-black"
        />
      </div>

      <button
        type="button"
        onClick={() => setResult(form)}
        className="rounded-md bg-blue-600 px-3 py-1.5 text-white"
      >
        Submit
      </button>

      {result && (
        <div>
          <span>Username: {result.username}</span>
          <span>FullName: {result.fullName}</span>
          <span>Age: {result.age}</span>
        </div>
      )}
    </div>
  );
}