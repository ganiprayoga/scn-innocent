<script lang="ts">
	import '$lib/styles/app.scss';
	import Favicon from '$lib/assets/sc-favicon.svg?url';
	import Analytics from '$lib/analytics.svelte';

	// export let data: any;
</script>

<svelte:head>
	<title>Smart City Nusantara Interplay</title>
	<link rel="icon" href={Favicon} type="image/svg+xml" />
</svelte:head>

<Analytics />

<div class="w-full md:max-w-[600px] mx-auto overflow-x-hidden">
	<slot />
</div>
