/*eslint-disable*/

import React, { useState } from "react";

export default function Counter() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          if (value === 0) return;
          setValue(value - 1);
        }}
      >
        -
      </button>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>+</button>

      <button onClick={() => setValue(0)}>DELETE</button>
    </div>
  );
}
