import { useMemo, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useGetAllRandomUsersQuery } from './reducers/randomApi';

const style = {
	height: 30,
	border: '1px solid green',
	margin: 6,
	padding: 8,
};

const FlatList = () => {
	const [hasMore, setHasMore] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [offset, setOffset] = useState(0);

	const { data: lastResult } = useGetAllRandomUsersQuery(
		{
			page: currentPage - 1,
			limit: 10,
		},
		{ skip: currentPage === 1 }
	);
	const { data: currentResult } = useGetAllRandomUsersQuery({
		page: currentPage,
		limit: 10,
	});
	const { data: nextResult } = useGetAllRandomUsersQuery({
		page: currentPage + 1,
		limit: 10,
	});

	const combined = useMemo(() => {
		const arr: any = [];
		for (const data of [lastResult, currentResult, nextResult]) {
			if (data) {
				console.log('arr', arr);
				arr.splice(offset, data.length, ...data);
			}
		}
		return arr;
	}, [lastResult, currentResult, nextResult, offset]);

	console.log('combined', combined);

	const fetchMore = () => {
		console.log('Fatch Called');
		if (combined.length >= 100) {
			setHasMore(false);
			return;
		}
		setCurrentPage((pageIndex) => pageIndex + 1);
		setOffset((preOffset) => preOffset + 10);
		return combined;
	};

	console.log('currentPage', currentPage);
	console.log('offset', offset);
	console.log('hasMore', hasMore);

	return (
		<div
			// style={{
			// 	height: '300px',
			// 	maxHeight: '300px',
			// 	overflow: 'scroll',
			// 	border: '2px solid red',
			// }}
			style={{
				height: '200vh',
			}}
		>
			<h1>demo: react-infinite-scroll-component</h1>
			<hr />
			<InfiniteScroll
				// style={{
				// 	height: '300px',
				// 	maxHeight: '300px',
				// 	overflow: 'scroll',
				// 	border: '2px solid red',
				// }}
				dataLength={combined.length}
				next={fetchMore}
				hasMore={hasMore}
				loader={<h4>Loading...</h4>}
				endMessage={
					<p style={{ textAlign: 'center' }}>
						<b>Yay! You have seen it all</b>
					</p>
				}
			>
				{combined.map((customer: any, index: any) => (
					<div style={style} key={index}>
						{customer.name}- #{customer.id}
					</div>
				))}
			</InfiniteScroll>
		</div>
	);
};

export default FlatList;
