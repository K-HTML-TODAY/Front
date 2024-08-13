import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.REACT_APP_API_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: `${baseUrl}api/v1`,
  credentials: 'include',
  prepareHeaders: (headers) => {
    const token = sessionStorage.getItem('token');
    if (token) {
      headers.set('X-AUTH-TOKEN', token);
    }
    console.log(headers);
    return headers;
  },
});

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery,
  endpoints: () => ({}),
});

export default apiSlice;
