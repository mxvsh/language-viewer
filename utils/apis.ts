import { format, subDays } from 'date-fns';

export const GITHUB = {
	search: async (lang: string) => {
		const yesterday = format(subDays(new Date(), 1), 'y-M-d');
		const response = await fetch(
			`https://api.github.com/search/repositories?sort=stars&order=desc&q=language:${lang}&q=created:${yesterday}&per_page=10`
		);
		const json = await response.json();
		return json.items || [];
	},
};
