import Link from "next/link";
import React from "react";

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const ServerComponent = async () => {
  const data = await getData();
  console.log(
    "🚀 ~ file: ServerComponent.tsx:17 ~ ServerComponent ~ data:",
    data
  );

  return (
    <div>
      {" "}
      <h1 className="text-white text-center ">HHHHHHHHHHHHHHHHH</h1>
      <br />
      <ul>
        {data.map((product: any) => (
          <li key={product.id}>
            <Link
              href={`/${product.id}`}
              className="flex w-full items-center justify-between"
            >
              <p>{product.title}</p>
              <p>{product.price}</p>
            </Link>
            <div className="border my-2 border-slate-400"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServerComponent;
