<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Button from './Button.svelte';

	export let prevLink: string = '';
	export let nextLink: string = '';
	export let menuLink: string = '';

	const redirectTo = (uri: string) => {
		console.log(uri);
		goto('/tv/menu').then(() => {
			goto(uri);
		});
	};

	const clickPrev = () => {
		console.log('clicked release');
		redirectTo(prevLink);
	};

	const clickMenu = () => {
		console.log('clicked release');
		redirectTo(menuLink);
	};

	const clickNext = () => {
		console.log('clicked release');
		redirectTo(nextLink);
	};
</script>

<div class="flex flex-row justify-between w-full p-8">
	<div class="animate-button" on:mouseup={clickPrev}>
		<Button text="Previous" textSize={16} />
	</div>
	<div class="animate-button" on:mouseup={clickMenu}>
		<Button text="MENU" textSize={16} />
	</div>
	<div class="animate-button" on:mouseup={clickNext}>
		<Button text="Next" textSize={16} />
	</div>
	<!-- <span>Prev {prevLink}</span>
	<span>Menu {menuLink}</span>
	<span>Next {nextLink}</span> -->
</div>
