import React, { useState, useEffect } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import './styles.css';  // Přidání CSS souboru

const App = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(savedPosts);
  }, []);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const deletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    setSelectedPost(null);
  };

  return (
      <div className="container">
        <header>
          <h1>Fórum</h1>
        </header>
        {selectedPost ? (
            <PostDetail post={selectedPost} goBack={() => setSelectedPost(null)} deletePost={deletePost} />
        ) : (
            <>
              <PostForm addPost={addPost} />
              <PostList posts={posts} setSelectedPost={setSelectedPost} deletePost={deletePost} />
            </>
        )}
      </div>
  );
};

export default App;
