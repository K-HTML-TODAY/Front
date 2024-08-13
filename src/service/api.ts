import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginValues } from '../pages/login/types';

interface LoginResponse {}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginValues>({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = api;
