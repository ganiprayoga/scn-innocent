import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

import sector from '$lib/data/sector.json';

export const load = (({ params }) => {
	let sectorData = null;
	sectorData = sector.find((item) => item.uri === params.sectorURI);
	if (!sectorData) {
		throw error(404, 'Not found');
	}

	return {
		sector: sectorData,
		loaded: true
	};
}) satisfies PageLoad;
