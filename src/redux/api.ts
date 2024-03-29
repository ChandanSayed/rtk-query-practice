import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const posts = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),
  tagTypes: ['Posts'],
  endpoints: builder => ({
    getPosts: builder.query<Post[], string>({ query: () => 'posts', providesTags: ['Posts'] }),
    newPost: builder.mutation<Post, Post>({
      query: post => ({
        url: 'posts',
        method: 'POST',
        body: post
      }),
      invalidatesTags: ['Posts']
    })
  })
});

export const { useGetPostsQuery, useNewPostMutation } = posts;
