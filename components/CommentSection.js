import React, { useState } from 'react';

const CommentSection = ({ comments }) => {
    const [newComment, setNewComment] = useState('');

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment) {
            comments.push(newComment);
            setNewComment('');
        }
    };

    return (
        <div>
            <h4>Komentáře</h4>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
            <form onSubmit={handleCommentSubmit}>
        <textarea
            placeholder="Přidat komentář"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
        />
                <button type="submit">Přidat komentář</button>
            </form>
        </div>
    );
};

export default CommentSection;
