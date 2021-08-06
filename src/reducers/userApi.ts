import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
	reducerPath: 'programApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `https://api-nodejs-todolist.herokuapp.com`,
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
		loginUser: builder.mutation({
			query: (data) => {
				// const { uuid, program_ids } = args;
				console.log('registering User');
				return {
					url: 'user/login',
					method: 'POST',
					body: data,
				};
			},
		}),

		logout: builder.mutation({
			query: (data) => {
				// const { uuid, program_ids } = args;
				console.log('registering User');
				return {
					url: 'user/logout',
					method: 'POST',
					body: data,
				};
			},
		}),

		getTodos: builder.query({
			queryFn: async (_args:void, _queryApi, _extraOptions, _baseQuery) => {
				const data = await axios.get(
					'https://jsonplaceholder.typicode.com/todos'
				);

				return data;
			},
		}),

		// next query here
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
	useRegisterUserMutation,
	useLoginUserMutation,
	useLogoutMutation,
	useGetTodosQuery
} = userApi;
