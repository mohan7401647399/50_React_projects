import React from "react";
import UseFetchData from "./UseFetchData";

const UseFetchHook = () => {
  const { data, error, pending } = UseFetchData(
    "https://dummyjson.com/products",
    {}
  );

  console.log(data, error, pending);

  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {pending ? <h1>Pending ! Please wait</h1> : null}
      {error ? <h3> {error} </h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((item) => <p key={item.key}>{item.title} </p>)
        : null}
    </div>
  );
};

export default UseFetchHook;
