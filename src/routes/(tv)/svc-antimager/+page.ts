import type { PageLoad } from './$types';
import axios from 'axios';
import supabase from '$lib/db/supabaseClient';

export const load = (({ params }) => {
	let stravaClub: any = [];
	let athleteSummary: any = [];

	athleteSummary = getAthleteSummary();

	return {
		athleteSummary: athleteSummary
	};
}) satisfies PageLoad;

const getAthleteSummary = async () => {
	const { data, error } = await supabase
		.from('athlete_summary')
		.select(`*`)
		.eq('month', 'December')
		.order('fullName');
	// .eq('month', 'December');

	return {
		act: data ?? []
	};
};
