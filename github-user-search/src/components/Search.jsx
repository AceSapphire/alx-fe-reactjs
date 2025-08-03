import { useState } from 'react';

function Search() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchUserData = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('Looks like we cant find the user');
      }
      const data = await response.json();
      return data;
    } catch (err) {
      throw err;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setUser(null);
    setLoading(true);

    try {
      const data = await fetchUserData(username); // ✅ using fetchUserData
      setUser(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading</p>}
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
