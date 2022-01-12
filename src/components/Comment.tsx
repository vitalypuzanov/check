import React from 'react';
import {useTypedSelector} from '../hooks/UsedTypedSelector';
import { Comment as CommentInterface } from '../store/comments/type';

const Comment: React.FC = () => {
  const comments = useTypedSelector((state) => state.comment.data.data);

  return (
    <div>
      {comments?.map((comments: CommentInterface) => (
        <>
          <h3>User email :</h3>
          <p>{comments.email}</p>
          <h3>Comment:</h3>
          <p>{comments.body}</p>
        </>
      ))}
    </div>
  );
};

export default Comment;
