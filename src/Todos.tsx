import { List } from '@chakra-ui/react';
import React from 'react';
import { useGetTodosQuery } from './reducers/userApi';

const Todos = (): JSX.Element => {
	const { data: todosData, isLoading: isLodingTodos } = useGetTodosQuery();

	console.log('todosdata', todosData);
	return (
		<div>npm 
			<h1>Todos</h1>
			
		</div>
	);
};

export default Todos;
