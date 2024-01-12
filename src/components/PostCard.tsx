export default function PostCard({ post }: { post: Post }) {
  const { title, body } = post;
  return (
    <div>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
}
