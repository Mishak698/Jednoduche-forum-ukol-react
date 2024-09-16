import React, { useState } from 'react';

const PostForm = ({ addPost }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title,
            author,
            content,
            comments: [],
        };
        addPost(newPost);
        setTitle('');
        setAuthor('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Jméno autora"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Titulek"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Obsah"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <button type="submit">Přidat příspěvek</button>
        </form>
    );
};

export default PostForm;
