import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const style = {
	height: 30,
	border: '1px solid green',
	margin: 6,
	padding: 8,
};

const FlatList = () => {
	const [items, setItems] = useState(Array(20).fill(''));
	const [hasMore, setHasMore] = useState(true);

	const fetchMore = () => {
		if (items.length >= 500) {
			setHasMore(false);
			return;
		}

		// a fake async api call like which sends
		// 20 more records in .5 secs

		setTimeout(() => {
			setItems([...items, ...Array(20).fill('')]);
		}, 500);
	};

	return (
		<div
			style={{
				height: '102vh',
			}}
		>
			<h1>demo: react-infinite-scroll-component</h1>
			<hr />
			<InfiniteScroll
				style={{
					height: '100%'
				}}
				dataLength={items.length}
				next={fetchMore}
				hasMore={hasMore}
				loader={<h4>Loading...</h4>}
				endMessage={
					<p style={{ textAlign: 'center' }}>
						<b>Yay! You have seen it all</b>
					</p>
				}
			>
				{items.map((i, index) => (
					<div style={style} key={index}>
						div - #{index}
					</div>
				))}
			</InfiniteScroll>
		</div>
	);
};

export default FlatList;
