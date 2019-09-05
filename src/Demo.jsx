import React, { useState, useEffect } from 'react';

export const Demo = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count} clicks`;
  }, [count]); // only re-render if count changes

  return (
    <div>
      <h1>this is my {count}</h1>
      <button
        onClick={() => setCount(count + 1)}
      >
        Increment Count
      </button>
    </div>
  )
}

export default Demo