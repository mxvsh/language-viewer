import { Box, Flex, Spacer } from '@chakra-ui/layout';
import { Heading, Text } from '@chakra-ui/react';

import { FiSettings } from 'react-icons/fi';

const Header = () => {
	return (
		<Box>
			<Flex alignItems='center'>
				<Box>
					<Text color='gray.400' fontWeight='semibold'>
						Friday, June 16
					</Text>
					<Heading>JavaScript</Heading>
				</Box>
				<Spacer />
				<Box fontSize='3xl' textColor='blue.300'>
					<FiSettings />
				</Box>
			</Flex>
		</Box>
	);
};

export default Header;
