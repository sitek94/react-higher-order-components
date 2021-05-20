import { createComment, createBlogPost } from './api/faker';

export type Comment = ReturnType<typeof createComment>;
export type Comments = Comment[];

export type BlogPost = ReturnType<typeof createBlogPost>;
export type BlogPosts = BlogPost[];
