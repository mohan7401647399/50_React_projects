import React, { useEffect, useState } from "react";
import User from "./User";

const GithubProfileFinder = () => {
  const [username, setUsername] = useState("mohan7401647399");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  function handleSubmit() {
    fetchUserData();
  }

  async function fetchUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${username}`);

    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUsername("");
    }

    console.log(data);
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) {
    return <h1>Loading data! Please wait...</h1>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-container">
        <input
          type="text"
          name="search-by-name"
          placeholder="Search Github Username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
};

export default GithubProfileFinder;
