"use client";
import React, { useState } from "react";

const ClientComponent = () => {
  const [first, setFirst] = useState(0);
  const onClick = () => {
    setFirst((prev: number) => prev + 1);
  };
  return (
    <div>
      <button onClick={onClick}>Click</button>
      <br />
      <p>{first}</p>
    </div>
  );
};

export default ClientComponent;
