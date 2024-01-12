import { FormEvent, useState } from 'react';
import './App.css';
import PostCard from './components/PostCard';
import { useGetPostsQuery, useNewPostMutation } from './redux/api';

function App() {
  const { isLoading, data } = useGetPostsQuery('');
  const [newPost] = useNewPostMutation();

  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');

  async function handleForm(e: FormEvent<HTMLFormElement>) {
    console.log(e);

    e.preventDefault();
    const post: Post = {
      title,
      body,
      userId: Math.random() * 1000,
      id: Math.random() * 1000
    };
    const res = await newPost(post);
    console.log(res);
    setTitle('');
    setBody('');
  }

  return (
    <>
      <div>App</div>
      <form action="/" onSubmit={handleForm}>
        <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input type="text" placeholder="Title" value={body} onChange={e => setBody(e.target.value)} />
        <input type="submit" value={'Add'} />
      </form>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.map(post => {
          return <PostCard key={post.id} post={post} />;
        })
      )}
    </>
  );
}

export default App;
