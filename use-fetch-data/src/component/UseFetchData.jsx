import React, { useEffect, useState } from "react";

const UseFetchData = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  async function FetchData() {
    setPending(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      setData(result);
      setError(null);
      setPending(false);
    } catch (error) {
      console.log(`${error} ! Some error Occured`);
      setPending(false);
    }
  }

  useEffect(() => {
    FetchData();
  }, [url]);

  return { data, error, pending };
};

export default UseFetchData;
