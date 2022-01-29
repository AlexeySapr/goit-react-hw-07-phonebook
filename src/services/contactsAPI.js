import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61dd6565f60e8f0017668798.mockapi.io',
  }),
  endpoints: builder => ({
    getContactsApi: builder.query({
      query: () => '/contacts',
    }),
  }),
});

export const { useGetContactsApiQuery } = contactsApi;
