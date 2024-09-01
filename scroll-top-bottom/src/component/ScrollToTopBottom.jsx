import React, { useRef } from "react";
import UseFetchData from "./UseFetchData";

const ScrollToTopBottom = () => {
  const { data, error, pending } = UseFetchData(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const bottomRef = useRef(null);

  const handleToTop = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  function handleToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  if (error) {
    return <h1>Error Occured !!!! Please try again</h1>;
  }

  if (pending) {
    return <h1>Loading data ! Please wait</h1>;
  }

  return (
    <div>
      <h1>Scroll to Top and Bottom</h1>
      <h3>Top Section</h3>
      <button onClick={handleToBottom}>Scroll to Bottom</button>
      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li>{item.title} </li>)
          : null}
      </ul>
      <button onClick={handleToTop}>Scroll to Top</button>
      <div ref={bottomRef}> </div>
      <h3>Bottom Section</h3>
    </div>
  );
};

export default ScrollToTopBottom;
