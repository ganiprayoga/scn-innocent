import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

import sector from '$lib/data/sector.json';

export const load = (({ params }) => {
	let sectorData = sector.find((item) => item.uri === params.sectorURI);
	if (!sectorData) {
		throw error(404, 'Not found');
	}

	return {
		sector: sectorData,
		datasaja: 'disini'
	};
}) satisfies PageLoad;
