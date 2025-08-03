import React from 'react';

const GithubUserCard = ({ user }) => {
  if (!user) return null;

  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.login} width="100" />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio}</p>
      <p>{user.location}</p>
    </div>
  );
};

export default GithubUserCard;
