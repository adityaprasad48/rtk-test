import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { queryString } from 'object-query-string';

// Define a service using a base URL and expected endpoints
export const randomApi = createApi({
	reducerPath: 'randomApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `https://60f99bc77ae59c0017165e73.mockapi.io`,
		// prepareHeaders: (headers, { getState }) => {
		// 	const { loginData } = (getState() as RootState).auth;

		// 	if (loginData.auth_token) {
		// 		headers.set('authorization', `Bearer ${loginData.auth_token}`);
		// 	}

		// 	return headers;
		// },
	}),
	tagTypes: ['Program'],
	endpoints: (builder) => ({
		getAllRandomUsers: builder.query({
			query: (args: { page: number; limit: number }) => {
				const { page, limit } = args;
				return {
					url: `/customers?${queryString(args)}`,
					method: 'GET',
				};
			},
		}),
		registerUser: builder.mutation({
			query: (data) => {
				// const { uuid, program_ids } = args;
				console.log('registering User');
				return {
					url: 'user/register',
					method: 'POST',
					body: data,
				};
			},
		}),

		// next query here
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllRandomUsersQuery } = randomApi;
