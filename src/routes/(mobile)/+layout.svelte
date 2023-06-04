<script lang="ts">
	import '$lib/styles/app.scss';
	import Favicon from '$lib/assets/sc-favicon.svg?url';
</script>

<svelte:head>
	<title>Smart City Nusantara Interplay</title>
	<link rel="icon" href={Favicon} type="image/svg+xml" />
</svelte:head>

<div class="w-full md:max-w-[600px] mx-auto overflow-x-hidden">
	<slot />
</div>
