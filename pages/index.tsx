import type { NextPage } from 'next';
import { Box } from '@chakra-ui/layout';

import Header from '../components/header';

const Home: NextPage = () => {
	return (
		<Box>
			<Header />
			<Box h='5px' w='full' bg='black' />
		</Box>
	);
};

export default Home;
