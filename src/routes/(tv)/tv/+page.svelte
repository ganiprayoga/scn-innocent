<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	const redirectTo = () => {
		goto('/tv/welcome');
	};

	onMount(() => {
		redirectTo();
	});
</script>
