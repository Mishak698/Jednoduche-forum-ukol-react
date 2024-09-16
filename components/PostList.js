import React, { useState } from 'react';

const PostList = ({ posts, setSelectedPost, deletePost }) => {
    const [sortOrder, setSortOrder] = useState('asc');

    const sortedPosts = [...posts].sort((a, b) =>
        sortOrder === 'asc'
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title)
    );

    return (
        <div>
            <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
                Řadit {sortOrder === 'asc' ? 'Z-A' : 'A-Z'}
            </button>
            <ul>
                {sortedPosts.map((post) => (
                    <li key={post.id}>
                        <h3 onClick={() => setSelectedPost(post)}>{post.title}</h3>
                        <p>{post.author}</p>
                        <div>
                            <button onClick={() => setSelectedPost(post)}>Zobrazit</button>
                            <button className="delete-btn" onClick={() => deletePost(post.id)}>Smazat</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
