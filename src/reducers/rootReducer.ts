import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../reducers/counterSlice';
import { randomApi } from './randomApi';
import { userApi } from './userApi';

export default combineReducers({
	counter: counterReducer,
	[userApi.reducerPath]: userApi.reducer,
	[randomApi.reducerPath]: randomApi.reducer,
});
