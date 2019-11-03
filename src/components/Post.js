import React from 'react';

import Comment from './Comment';

function Post({ post }) {
  return (
    <div className="post">
      <header>
        <img src={post.author.avatar} alt={post.author.name} />
        <div>
          <p>{post.author.name}</p>
          <small>{post.date}</small>
        </div>
      </header>
      <p>{post.content}</p>
      {post.comments.map(comment => <Comment key={comment.id} comment={comment} />)}
    </div>
  );
}

export default Post;