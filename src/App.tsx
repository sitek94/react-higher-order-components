import api from './api';
import BlogPostView from './components/BlogBost';
import CommentList from './components/CommentList';

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={() => api.start()}>Start API</button>
      <button onClick={() => api.stop()}>Stop API</button>
      <CommentList />
      <BlogPostView id={api.getRandomBlogPostId()} />
    </div>
  );
}
