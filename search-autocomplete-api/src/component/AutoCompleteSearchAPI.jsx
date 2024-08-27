import React from "react";
import { useEffect, useState } from "react";
import Suggestion from "./Suggestion";

const AutoCompleteSearchAPI = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUser, setFilteredUser] = useState([]);

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      const filteredData =
        user && user.length
          ? user.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUser(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  };

  const handleClick = (event) => {
    setShowDropDown(false);
    setSearchParam(event.target.innerText);
    setFilteredUser([]);
  };

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUser(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading data! Please wait</h1>
      ) : (
        <input
          type="text"
          name="search-users"
          placeholder="Search Users here..."
          value={searchParam}
          onChange={handleChange}
        />
      )}
      {showDropDown && (
        <Suggestion handleClick={handleClick} data={filteredUser} />
      )}
    </div>
  );
};

export default AutoCompleteSearchAPI;
