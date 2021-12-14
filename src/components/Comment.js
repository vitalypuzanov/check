import React from 'react';
import {useSelector} from 'react-redux';

function Comment() {
  const comments = useSelector((state) => state.comment.data);
  return (
    <div>
      {comments?.map((comments) => (
        <>
          <h3>User email :</h3>
          <p>{comments.email}</p>
          <h3>Comment:</h3>
          <p>{comments.body}</p>
        </>
      ))}
    </div>
  );
}

export default Comment;
