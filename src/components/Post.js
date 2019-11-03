import React from 'react';

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
    </div>
  );
}

export default Post;