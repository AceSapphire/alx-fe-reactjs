import { useState } from 'react';
import { fetchGithubUser } from '../services/api';

function SearchUser({ setUserData }) {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!username.trim()) {
      setError('Please enter a GitHub username');
      return;
    }

    try {
      const data = await fetchGithubUser(username);
      setUserData(data);
      setUsername('');
    } catch (err) {
      setError('User not found. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default SearchUser;
