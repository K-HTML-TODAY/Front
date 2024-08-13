import apiSlice from '../apiSlice';
import { MyPageReturnType } from './types';

export const myPageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<MyPageReturnType, void>({
      query: () => ({
        url: '/mypage/getUser',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetUserQuery } = myPageApi;

export default myPageApi;
