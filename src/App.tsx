import api from './api';
import BlogPostView from './components/BlogBost';
import CommentList from './components/CommentList';

export default function App() {
  return (
    <div>
      <header>
        <h1>Hello Higher-Order Components</h1>
        <button onClick={() => api.start()}>Start API</button>
        <button onClick={() => api.stop()}>Stop API</button>
      </header>
      <main>
        <BlogPostView id={api.getRandomBlogPostId()} />
        <CommentList />
      </main>
      <footer>
        <a href="https://reactjs.org/docs/higher-order-components.html">
          React: Higher-Order Components
        </a>
      </footer>
    </div>
  );
}
