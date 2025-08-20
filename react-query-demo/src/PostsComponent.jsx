import React from "react";
import { useQuery } from "react-query";

function PostsComponent() {
  // Fetch function
  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  };

  // useQuery hook
  const {
    data: posts,
    isLoading,
    isError,
    refetch,
  } = useQuery("posts", fetchPosts, {
    staleTime: 5000, // caching demonstration
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error fetching posts</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {posts.slice(0, 5).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
