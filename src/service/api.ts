import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginValues } from '../pages/login/types';

interface LoginResponse {}

interface GptResponse {
  content: string;
}

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
    getGptData: builder.query<GptResponse, string>({
      query: (prompt) => ({
        url: '/v1/main/getGptApi',
        method: 'GET',
        params: { prompt },
      }),
    }),
  }),
});

export const { useLoginMutation, useGetGptDataQuery } = api;
