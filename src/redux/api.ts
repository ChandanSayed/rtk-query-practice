import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const posts = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),
  endpoints: builder => ({
    getPosts: builder.query<string, string>({ query: () => 'posts' })
  })
});

export const { useGetPostsQuery } = posts;
