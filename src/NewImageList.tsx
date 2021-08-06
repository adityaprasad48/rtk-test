import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';

const NewImageList = ({ watch }: any) => {
	// const [currentPage, setCurrentPage] = useState(1);
	// const { data } = useGetAllRandomUsersQuery();
	const [randomUsers, setRandomUsers] = useState<any>([]);

	let myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
	let removed = myFish.splice(2, 0, 'drum');

	const lastResult: any = [];
	
	const currentResult: any = [1, 2, 3, 4];
	const nextResult: any = [5, 6, 7, 8];

	const pageSize = 2;
	const currentPage = 0;
	const offset = 10;

	const arr:any =[];

	for (const currentData of [lastResult, currentResult, nextResult]) {
		if (currentData) {
			arr.splice(offset, 4, ...currentData);
			console.log('looped');
			console.log(arr);
		}
	}

	console.log('arr', arr);

	const months = ['Jan', 'March', 'April', 'June'];
	const names = [
		'Aditya',
		'Arpit',
		'Nishant',
		'Kunal',
		'Adi',
		'Kbc',
		'cda',
		'not_now',
	];
	// add at index 1
	months.splice(1, 0, 'Feb', 'New');

	// replaces 1 element at index 4
	// names.splice(4, 1, 'Feb');

	// delete element from index to including that index
	// names.splice(2, 3, 'e9rueru');
	names.splice(0, 0, ...[]);

	console.log('months', months);
	console.log('names', names);

	// Normal Infinte scroll is not working

	// console.log(`'watch('query')`, watch('query'));
	// console.log('currentPage', currentPage);
	// console.log('---------------------------------------------');

	// console.log('randomUsers', randomUsers);
	// console.log('data', data);

	// useEffect(() => {
	// 	trigger({
	// 		name: watch('query'),
	// 		page: currentPage,
	// 		limit: 10,
	// 	});
	// 	setRandomUsers([...randomUsers, ...(data ? data : [])]);
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [data]);

	const loadMore = () => {
		// trigger({
		// 	name: watch('query'),
		// 	page: currentPage,
		// 	limit: 10,
		// });
		// setCurrentPage((prev) => prev + 1);
		console.log('hi');
	};

	return (
		<Box borderColor="teal" borderWidth="2px">
			{/* <InfiniteScroll
				dataLength={100}
				next={loadMore}
				hasMore={true}
				loader={<h4>Loading.....</h4>}
				endMessage={
					<p style={{ textAlign: 'center' }}>
						<b>Yay! You have seen it all</b>
					</p>
				}
			>
				{randomUsers &&
					randomUsers.length > 0 &&
					randomUsers.map((customer: any, index: number) => (
						<Box
							key={customer.id}
							// maxW="sm"
							width="100%"
							borderWidth="1px"
							borderRadius="lg"
							overflow="hidden"
							marginBottom="10px"
							display="flex"
							aligntItems="center"
							p="2"
						>
							<Box flex="1">
								<Box
									mt="1"
									fontWeight="semibold"
									as="h4"
									lineHeight="tight"
									isTruncated
								>
									{customer.name}
								</Box>
							</Box>

							<Image height="100px" src={customer.avatar} />
						</Box>
					))}
			</InfiniteScroll> */}
		</Box>
	);
};

export default NewImageList;
