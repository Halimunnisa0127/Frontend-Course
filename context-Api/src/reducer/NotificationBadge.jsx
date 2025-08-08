// src/NotificationBadge.js
import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NotificationBadge() {
    const { posts, setPosts } = useContext(UserContext);
    const [commentInputs, setCommentInputs] = useState({}); // Store comments per post

    // Like function
    function updatelikes(postId) {
        setPosts(prevPosts =>
            prevPosts.map(post =>
                post.id === postId
                    ? { ...post, likes: post.likes + 1 }
                    : post
            )
        );
    }

    // Comment input change
    function handleCommentChange(postId, value) {
        setCommentInputs(prev => ({
            ...prev,
            [postId]: value
        }));
    }

    // Submit comment
    function addComment(postId) {
        if (!commentInputs[postId] || commentInputs[postId].trim() === '') return;

        setPosts(prevPosts =>
            prevPosts.map(post =>
                post.id === postId
                    ? { ...post, comments: [...post.comments, commentInputs[postId]] }
                    : post
            )
        );

        // Clear input after adding comment
        setCommentInputs(prev => ({
            ...prev,
            [postId]: ''
        }));
    }

    return (
        <div className="container mt-4">
            <div className="row">
                {posts.map(post => (
                    <div key={post.id} className="col-md-4 mb-4">
                        <div className="card shadow-sm h-100">
                            <img src={post.image} alt="post" className="card-img-top" style={{height:"200px"}}/>
                            <div className="card-body">
                                <h5 className="card-title">{post.caption}</h5>

                                <button
                                    className="btn btn-primary me-2"
                                    onClick={() => updatelikes(post.id)}
                                >
                                    Like
                                </button>

                                <span className="badge bg-success">
                                    {post.likes} Likes
                                </span>

                                <hr />
                                <h6>Comments:</h6>
                                {post.comments.length > 0 ? (
                                    post.comments.map((c, i) => (
                                        <p key={i} className="mb-1 text-muted">{c}</p>
                                    ))
                                ) : (
                                    <p className="text-muted">No comments yet.</p>
                                )}

                                {/* Comment box */}
                                <div className="input-group mt-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Add a comment..."
                                        value={commentInputs[post.id] || ''}
                                        onChange={(e) =>
                                            handleCommentChange(post.id, e.target.value)
                                        }
                                    />
                                    <button
                                        className="btn btn-outline-primary"
                                        onClick={() => addComment(post.id)}
                                    >
                                        Post
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
