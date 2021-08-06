import { Button, Container, Heading, Input, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import NewImageList from './NewImageList';
interface ImageListForm {
	gender: string;
	query: string;
}

interface Gender {
	value: string;
	label: string;
}

const ImageList = (): JSX.Element => {
	const [people, setPeople] = useState([]);
	const [page, setPage] = useState(0);


	const { handleSubmit, register, control, watch } = useForm<ImageListForm>();

	const onSubmit = (values: ImageListForm) => {
		console.log('values', values);
	};

	const genders: Gender[] = [
		{ value: 'male', label: 'Male' },
		{ value: 'female', label: 'Female' },
	];

	return (
		<Container maxW="container.md">
			<form onSubmit={handleSubmit(onSubmit)}>
				<Stack spacing={6}>
					<Heading as="h2" size="xl" textAlign="center">
						Image List
					</Heading>
					<Input placeholder="Search User" size="md" {...register('query')} />

					<Controller
						control={control}
						name="gender"
						render={({ field: { onChange, value, name, ref } }) => {
							const currentSelection = genders.find(
								(c: any) => c.value === value
							);

							const handleSelectChange = (selectedOption: Gender | null) => {
								onChange(selectedOption?.value);
							};
							return (
								<Select
									inputRef={ref}
									placeholder="Select Gender"
									value={genders.find((c) => c.value === value)}
									name={name}
									options={genders}
									onChange={handleSelectChange}
								/>
							);
						}}
					/>
					<Button colorScheme="teal" size="md" type="submit">
						Submit
					</Button>
					<NewImageList watch={watch} />
				</Stack>
			</form>
		</Container>
	);
};

export default ImageList;
