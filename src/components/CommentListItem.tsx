import { Comment } from '../types';

type Props = {
  comment: Comment;
};

export function CommentListItem({ comment }: Props) {
  const { author, text } = comment;
  return (
    <div>
      <p>
        {text}
        <br />
        <strong>{author}</strong>
      </p>
    </div>
  );
}
