<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';

	import SCNLogo from '$lib/assets/Smart City Nusantara - Primary.svg?component';
	import Button from '$lib/components/Button.svelte';

	export let data: PageData;

	const redirectTo = (uri: string) => {
		console.log(uri);
		// goto(uri, { invalidateAll: true });
		goto('/tv/menu').then(() => {
			goto(uri);
		});
	};

	const clickPrev = () => {
		console.log('clicked release');
		redirectTo('/tv/menu');
	};

	const clickNext = () => {
		console.log('clicked release');
		redirectTo('/tv/sector/pariwisata');
	};
</script>

<div class="bg-blur absolute -z-10">
	<div id="bg-circle-1" class="fixed rounded-full bg-secondary w-80 h-80 -right-40 top-20" />
	<div id="bg-circle-2" class="fixed rounded-full bg-secondary w-80 h-80 -left-40 -bottom-20" />
</div>

<div
	id="main-content"
	class="flex flex-row overflow-hidden justify-center gap-48 items-center w-full h-screen bg-white bg-opacity-10 backdrop-blur-[460px]"
>
	<div class="flex flex-row gap-4 items-center">
		<div id="menu-ornament" class="w-2 h-[128px] rounded-full bg-primary" />
		<div class="flex flex-col -gap-4">
			<span class="font-poppins font-semibold text-black-80 text-[32px]">Use Case Smart City</span>
			<h1
				id="text-menu"
				class="clipped text-black text-[64px] leading-none font-poppins font-semibold"
			>
				Pada <span class="text-primary">City Sector</span>
			</h1>
		</div>
	</div>

	<ol class="flex flex-col gap-6">
		{#each data.sector as sector}
			<a
				class="text-[32px] font-poppins text-black hover:text-primary hover:ml-2 transition-all"
				href="/tv/sector/{sector.uri}"
			>
				{sector.title}
			</a>
		{/each}
	</ol>
</div>

<div class="fixed bottom-0 w-full">
	<div class="flex flex-row justify-between w-full p-8" data-sveltekit-reload>
		<div class="animate-button" on:mouseup={clickPrev}>
			<Button text="Back to Menu" textSize={16} />
		</div>
		<div class="animate-button" on:mouseup={clickNext}>
			<Button text="Sektor Pariwisata" textSize={16} />
		</div>
	</div>
</div>

<SCNLogo id="scn-logo" class="absolute h-16 top-8 right-10" />

<style>
	.clipped {
		clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
	}
</style>
