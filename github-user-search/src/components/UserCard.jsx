function UserCard({ user }) {
  if (!user) return null;

  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.login} width="100" />
      <h2>{user.name || user.login}</h2>
      <p><strong>Username:</strong> {user.login}</p>
      <p><strong>Bio:</strong> {user.bio || 'No bio available'}</p>
      <p><strong>Location:</strong> {user.location || 'Not specified'}</p>
      <p><strong>Public Repos:</strong> {user.public_repos}</p>
      <p><strong>Followers:</strong> {user.followers}</p>
      <p><strong>Following:</strong> {user.following}</p>
      <a href={user.html_url} target="_blank" rel="noreferrer">View Profile</a>
    </div>
  );
}

export default UserCard;
