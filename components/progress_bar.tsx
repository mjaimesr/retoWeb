"use client";

import { useState } from "react";

export default function ProgressBar() {
  const [value, setValue] = useState(0);

  return (
    <div className="w-full max-w-xs">
      <p className="mb-2 text-sm font-medium text-gray-700">Progress Bar</p>

      <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-200"
          style={{ width: `${value}%` }}
        />
      </div>

      <label className="text-sm text-gray-700">input progress:</label>
      <input type="number"
        min={0} max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value) || 0)}
        className="border border-black px-3 py-2 text-sm outline-none"
      />
    </div>
  );
}
