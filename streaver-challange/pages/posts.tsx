// pages/posts.tsx
import useSWR from 'swr';
import { Post } from './types';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Posts = () => {
  const { data, error } = useSWR<Post[]>('https://jsonplaceholder.typicode.com/posts', fetcher);

  if (error) return <div>Error loading posts</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Posts</h1>
      {data.map((post: Post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
