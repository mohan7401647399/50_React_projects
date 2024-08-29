import React from "react";

const User = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div className="user">
      <div>
        <img src={avatar_url} alt="User" className="avatar" />
      </div>
      <div className="name-container">
        <a href={`https://github.com/${login}`}> {name || login} </a>
        <p>
          User Joined on -
          {`${createdDate.getDate()} ${createdDate.toLocaleDateString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div className="profile-info">
        <div className="name">
          <p>Public Repos {public_repos}</p>
        </div>
        <div>
          <p>followers {followers}</p>
        </div>
        <div>
          <p>following {following}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
