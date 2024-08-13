import apiSlice from '../apiSlice';
import { SignInFormType, SignUpFormType } from './types';

export const signApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data: SignUpFormType) => ({
        url: '/sign/sign-up',
        method: 'POST',
        body: data,
        params: {
          roles: 'admin',
        },
      }),
    }),
    signIn: builder.mutation({
      query: (data: SignInFormType) => ({
        url: '/sign/sign-in',
        method: 'POST',
        params: {
          account: data.account,
          password: data.password,
        },
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = signApi;

export default signApi;
