<script lang="ts">
	import '$lib/styles/app.scss';
	import Favicon from '$lib/assets/sc-favicon.svg?url';
</script>

<svelte:head>
	<title>SVC Anti Mager</title>
	<link rel="icon" href={Favicon} type="image/svg+xml" />
</svelte:head>

<svelte:body class="overflow-hidden" />

<div class="w-full h-full overflow-x-hidden">
	<slot />
</div>
