import { differenceInHours, format } from 'date-fns';
import { Box, Divider, Stack } from '@chakra-ui/layout';
import RepoItem from '../repo-item';

type Props = {
	data: any[];
};

const Repository: React.FC<Props> = ({ data }) => {
	return (
		<Box>
			<Stack spacing={4}>
				{data.map((data) => {
					const diffHours = differenceInHours(
						new Date(),
						new Date(data.updated_at)
					);

					return (
						<Box>
							<RepoItem
								title={data.name}
								description={data.description}
								avatar={data.owner.avatar_url}
								stars={data.stargazers_count}
								username={data.owner.login}
								updatedAt={diffHours < 2 ? '1h' : diffHours + 'h'}
							/>
							<Divider mt={2} />
						</Box>
					);
				})}
			</Stack>
		</Box>
	);
};

export default Repository;
