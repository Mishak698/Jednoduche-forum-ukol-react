import React from 'react';
import CommentSection from './CommentSection';

const PostDetail = ({ post, goBack, deletePost }) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <p><strong>Autor:</strong> {post.author}</p>
            <p>{post.content}</p>
            <CommentSection comments={post.comments} />
            <div>
                <button onClick={goBack}>Zpět na seznam</button>
                <button className="delete-btn" onClick={() => deletePost(post.id)}>Smazat příspěvek</button>
            </div>
        </div>
    );
};

export default PostDetail;
