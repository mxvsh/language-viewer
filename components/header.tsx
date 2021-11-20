import { Box, Flex, Spacer } from '@chakra-ui/layout';
import { Heading, Text } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

import { FiBook, FiGitBranch, FiPackage, FiSettings } from 'react-icons/fi';

const Header = () => {
	return (
		<Box px={4} py={4}>
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
			<Tabs variant='soft-rounded' colorScheme='gray' mt={4}>
				<TabList>
					<Tab>
						<Box mr={2}>
							<FiBook />
						</Box>
						News
					</Tab>
					<Tab>
						<Box mr={2}>
							<FiGitBranch />
						</Box>
						Repositories
					</Tab>
					<Tab>
						<Box mr={2}>
							<FiPackage />
						</Box>
						Packages
					</Tab>
				</TabList>
			</Tabs>
		</Box>
	);
};

export default Header;
