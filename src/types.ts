import { createComment } from './api/faker'

export type Comment = ReturnType<typeof createComment>;
export type Comments = Comment[];
