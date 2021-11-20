import {
	Box,
	Flex,
	Image,
	Text,
	Heading,
	HStack,
	Button,
} from '@chakra-ui/react';
import { FiBookmark, FiStar } from 'react-icons/fi';

type Props = {
	username: string;
	title: string;
	description: string;
	avatar: string;
	stars: string;
	updatedAt: string;
};

const RepoItem: React.FC<Props> = ({
	avatar,
	username,
	title,
	description,
	stars,
	updatedAt,
}) => {
	return (
		<Box>
			<Flex alignItems='center'>
				<Image rounded='xl' src={avatar} w='80px' />
				<Box ml={4}>
					<Text color='gray.400'>
						{username} • {updatedAt}
					</Text>
					<Heading mt={1} size='md'>
						{title}
					</Heading>
					<Text noOfLines={2} mt={1} maxW='lg'>
						{description}
					</Text>
				</Box>
			</Flex>
			<HStack pt={3}>
				<Button
					variant='ghost'
					size='sm'
					aria-label='stars'
					leftIcon={<FiStar />}
				>
					{stars}
				</Button>
				<Button
					variant='ghost'
					size='sm'
					aria-label='save'
					leftIcon={<FiBookmark />}
				>
					Save
				</Button>
			</HStack>
		</Box>
	);
};

export default RepoItem;
