import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import UserCard from './components/UserCard';

function App() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setError('');
    setUser(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('User not found');
      }

      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <Search
        username={username}
        setUsername={setUsername}
        handleSearch={handleSearch}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <UserCard user={user} />
    </div>
  );
}

export default App;
