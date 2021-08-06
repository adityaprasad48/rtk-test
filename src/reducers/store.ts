import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { useDispatch } from 'react-redux';
import { randomApi } from './randomApi';
import rootReducer from './rootReducer';
import { userApi } from './userApi';

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(userApi.middleware, randomApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = (): any => useDispatch<AppDispatch>();

setupListeners(store.dispatch);
