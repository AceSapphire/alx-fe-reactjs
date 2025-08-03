// src/services/githubService.js
export const fetchUserData = async (username, location, minRepos) => {
  let query = [];

  if (username) query.push(`${username} in:login`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>=${minRepos}`);

  const queryString = query.join('+');
  const response = await fetch(`https://api.github.com/search/users?q=${queryString}`);

  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }

  const data = await response.json();

  // Fetch full user details
  const fullDetails = await Promise.all(
    data.items.slice(0, 10).map(async (user) => {
      const res = await fetch(user.url); // Gets full profile
      return res.json();
    })
  );

  return fullDetails;
};
