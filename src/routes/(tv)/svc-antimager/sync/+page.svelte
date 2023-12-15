<script lang="ts">
	import type { PageData } from './$types';
	import supabase from '$lib/db/supabaseClient';

	export let data: PageData;
	let isSyncing: boolean = false;

	const syncData = async (act: any) => {
		console.log({ act: act });
		const { data, error } = await supabase.from('svc_strv').upsert(act).select();
		console.log({
			data: data,
			error: error
		});
		return { data: data, error: error };
	};

	const letsSync = async () => {
		isSyncing = true;
	};
</script>

<button
	class="home-button flex flex-row gap-8 items-center py-4 px-8 bg-white text-primary fill-primary border-primary border-4 rounded-full border-solid hover:bg-primary hover:text-white hover:fill-white active:ring active:ring-primary active:ring-opacity-50 active:ring-8 active:gap-4"
	on:click={() => letsSync()}
>
	Sync
</button>

{#if isSyncing === true}
	<table class="">
		<thead>
			<tr>
				<th>No</th>
				<th>ID</th>
				<th>rs</th>
				<th>a.rs</th>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Activity Name</th>
				<th>Distance</th>
				<th>Moving time</th>
				<th>Elapsed Time</th>
				<th>Elevation</th>
			</tr>
		</thead>
		<tbody>
			{#each data.stravaClub.activities as activity, i}
				<tr>
					<!-- <td>{i + 1}</td> -->
					<td>
						{syncData({
							id:
								activity.athlete.firstname +
								activity.athlete.lastname +
								activity.distance +
								activity.moving_time +
								activity.elapsed_time +
								activity.total_elevation_gain,
							fullName: activity.athlete.firstname + ' ' + activity.athlete.lastname,
							name: activity.name,
							distance: activity.distance,
							moving_time: activity.moving_time,
							elapsed_time: activity.elapsed_time,
							total_elevation_gain: activity.total_elevation_gain,
							type: activity.type,
							sport_type: activity.sport_type,
							month: 'December'
						})}
					</td>
					<td
						>{activity.athlete.firstname}{activity.athlete
							.lastname}{activity.distance}{activity.moving_time}{activity.elapsed_time}{activity.total_elevation_gain}</td
					>
					<td>{activity.resource_state}</td>
					<td>{activity.athlete.resource_state}</td>
					<td>{activity.athlete.firstname}</td>
					<td>{activity.athlete.lastname}</td>
					<td>{activity.name}</td>
					<td>{activity.distance}</td>
					<td>{activity.moving_time}</td>
					<td>{activity.elapsed_time}</td>
					<td>{activity.total_elevation_gain}</td>
				</tr>
			{/each}
		</tbody>
	</table>
{/if}

<pre>
  <!-- {JSON.stringify(data, null, 4)} -->
</pre>
