import FakeApi from './fake-api';
import { createBlogPost } from './faker';

export const initialBlogPosts = Array(10)
  .fill(null)
  .map(() => createBlogPost());

const api = new FakeApi(initialBlogPosts);

export default api;
