import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { Box } from '@chakra-ui/layout';

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { FiBook, FiGitBranch, FiPackage } from 'react-icons/fi';

import Repository from '../components/views/Repository';
import Header from '../components/header';
import { GITHUB } from '../utils/apis';

const Home: NextPage = () => {
	const [repositories, setRepositories] = useState([]);

	useEffect(() => {
		GITHUB.search('javascript').then((data) => {
			setRepositories(data);
		});
	}, []);

	return (
		<Box px={4} py={4}>
			<Header />

			<Tabs variant='soft-rounded' colorScheme='gray' mt={6}>
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
				<TabPanels mt={8}>
					<TabPanel></TabPanel>
					<TabPanel>
						{/* Repository Tab */}
						<Repository data={repositories} />
					</TabPanel>
					<TabPanel></TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	);
};

export default Home;
