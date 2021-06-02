import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

// && - if text is true (not empty) then return on the other side
// && - text is false return is null
// || - if text is true then return text
// || - if text is false then return what's on the other side
const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      <h1>{text || "john doe"}</h1>
      <h2>{error && "Error..."}</h2>
      <button type="button" className="btn" onClick={() => setError(!error)}>
        toggle error
      </button>
      {!error ? <p>true</p> : <p>false</p>}
    </>
  );
};

export default ShortCircuit;
