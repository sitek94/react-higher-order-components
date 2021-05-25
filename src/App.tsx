import * as React from 'react';

import api from './api';
import BlogPostView from './components/BlogBost';
import CommentList from './components/CommentList';
import { withLogger } from './higher-order-components/with-logger';

const CommentListWithLogger = withLogger(CommentList, 'Comment List');

export default function App() {
  const [showComments, setShowComments] = React.useState(true);
  const toggleComments = () => setShowComments(prev => !prev);
  const toggleCommentsButtonText = showComments
    ? 'Hide comments'
    : 'Show comments';

  return (
    <div className="layout">
      <header>
        <h1>Hello Higher-Order Components</h1>
        <button onClick={() => api.start()}>Start API</button>
        <button onClick={() => api.stop()}>Stop API</button>
      </header>
      <main>
        <BlogPostView id={api.getRandomBlogPostId()} />

        <div>
          <button onClick={toggleComments}>{toggleCommentsButtonText}</button>
          {showComments && <CommentListWithLogger />}
        </div>
      </main>
      <footer>
        <a href="https://reactjs.org/docs/higher-order-components.html">
          React: Higher-Order Components
        </a>
      </footer>
    </div>
  );
}
