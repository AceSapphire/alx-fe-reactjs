import { useState } from 'react';

function Search() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setError('');
    setUser(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('Looks like we cant find the user');
      }

      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {user && (
        <div>
          <img src={user.avatar_url} alt="avatar" width="100" />
          <p>{user.login}</p>
        </div>
      )}
    </div>
  );
}

export default Search;
