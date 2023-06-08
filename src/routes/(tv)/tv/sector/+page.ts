import type { PageLoad } from './$types';

import sector from '$lib/data/sector.json';

export const load = (({ params }) => {
	return {
		sector,
		datasaja: 'disini'
	};
}) satisfies PageLoad;
