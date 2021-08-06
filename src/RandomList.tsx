import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const RandomList = () => {
	const [people, setPeople] = useState<any>([]);
	const [page, setPage] = useState(0);

	const fetchPeopleImages = () => {
		axios
			.get(`https://randomuser.me/api/?results=10&nat=br&page=${page}&seed=abc`)
			.then((res: any) => {
				const result = res.data.results;
				setPeople([...people, ...result]);
				setPage((prev) => prev + 1);
			});
		console.log('page', page);
	};

	useEffect(() => {
		fetchPeopleImages();
		// commented below because ESLINT was asking me to use useCallback inside
		// fetchPeopleImage func. idk why
		// eslint-disable-next-line
	}, []);

	return (
		<div className="App">
			<InfiniteScroll
				dataLength={people.length}
				next={() => fetchPeopleImages()}
				hasMore={true}
				loader={<h4>Loading.....</h4>}
				endMessage={
					<p style={{ textAlign: 'center' }}>
						<b>Yay! You have seen it all</b>
					</p>
				}
			>
				{people.length > 1 &&
					people.map((people: any, i: number) => (
						<div key={i}>
							<img src={people.picture.medium} alt="Person" />
							<p>{people.name.first}</p>
						</div>
					))}
			</InfiniteScroll>
		</div>
	);
};

export default RandomList;
