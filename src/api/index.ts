import FakeApi from './fake-api';
import { createComment, createBlogPost } from './faker';

const initialCommentsCount = 10;
const initialBlogPostsCount = 10;

const initialComments = Array(initialCommentsCount)
  .fill(null)
  .map(() => createComment());

const initialBlogPosts = Array(initialBlogPostsCount)
  .fill(null)
  .map(() => createBlogPost());

const api = new FakeApi(initialBlogPosts, initialComments);

export default api;
