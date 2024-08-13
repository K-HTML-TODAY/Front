import apiSlice from '../apiSlice';

export const levelApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    countLevelForUser: builder.query<number, number>({
      query: (uid) => ({
        url: `/level/countLevel/${uid}`,
        method: 'GET',
      }),
      transformResponse: (response: any): number => {
        return response;
      },
    }),
  }),
});

export const { useCountLevelForUserQuery } = levelApi;

export default levelApi;
