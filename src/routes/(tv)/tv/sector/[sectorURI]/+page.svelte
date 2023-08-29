<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { goto, invalidateAll } from '$app/navigation';
	import { gsap } from 'gsap';

	// import Illustration from '$lib/components/SectorIllustration.svelte';
	import TvNavigation from '$lib/components/TVNavigation.svelte';
	import SCNLogo from '$lib/assets/Smart City Nusantara - Primary.svg?component';
	import Button from '$lib/components/Button.svelte';

	export let data: PageData;
	export let isLoading: boolean = true;
	let libURL: string = '';

	const redirectTo = (uri: string) => {
		console.log(uri);
		// goto(uri, { invalidateAll: true });
		goto('/tv/menu').then(() => {
			goto(uri);
		});
	};

	const clickPrev = () => {
		console.log('clicked release');
		redirectTo(data.sector.link.prevUri);
	};

	const clickMenu = () => {
		console.log('clicked release');
		redirectTo('/tv/sector');
	};

	const clickNext = () => {
		console.log('clicked release');
		redirectTo(data.sector.link.nextUri);
	};

	onMount(() => {
		isLoading = true;
		libURL = '';
		libURL = '/sector-illustration/' + data.sector.uri + '.svg';
		isLoading = false;
	});
</script>

<div class="bg-blur absolute -z-10">
	<div
		id="bg-circle-1"
		class="fixed rounded-full
    bg-[{data.sector.decoration.right.color}] w-80 h-80 -right-40 bottom-20"
		style="background-color: {data.sector.decoration.right.color};"
	/>
	<div
		id="bg-circle-2"
		class="fixed rounded-full
    bg-[{data.sector.decoration.left.color}] w-96 h-96 -left-40 top-20"
		style="background-color: {data.sector.decoration.left.color};"
	/>
</div>

{#if !isLoading}
	<div
		id="main-content"
		class="flex flex-row overflow-hidden justify-center gap-48 items-center w-full h-screen bg-white bg-opacity-10 backdrop-blur-[230px]"
	>
		<div class="flex flex-col w-5/12 items-end">
			<div class="flex flex-col gap-8 bg-white bg-opacity-80 p-12 pb-[128px]">
				<div id="titleSection" class="flex flex-col">
					<span class="font-poppins font-semibold text-[32px] text-black-80"
						>{data.sector.subtitle}</span
					>
					<h1 class="leading-none font-poppins font-semibold text-[48px] text-primary">
						{data.sector.title}
					</h1>
				</div>
				<p class="font-poppins text-lg">{@html data.sector.description}</p>
			</div>
			<img src={libURL} alt={`Illustrasi ${data.sector.title}`} class="w-2/3 relative -mt-32" />
		</div>
		<div class="flex flex-row gap-4 items-center grow">
			<div class="flex flex-col -gap-4">
				<span class="font-poppins font-semibold text-primary text-[32px]">Produk Telkom Group</span>
				<p class="font-poppins text-lg">Yang mendukung {data.sector.title}</p>
				<div class="h-8" />
				<div class="produkTelkom grid grid-cols-2 gap-6">
					{#each data.sector.produkTelkom as produk}
						<div class="flex flex-row gap-4 items-center">
							<div class="ornament w-2 h-full rounded-full bg-primary" />
							<div class="flex flex-col gap-2">
								<h3 class="font-poppins font-bold text-black-80 uppercase">{produk.kategori}</h3>
								<div class="flex flex-row">
									{#each produk.produk as logo}
										<!-- {produk.produk.length} -->
										<img class="h-10 max-w-32 mr-4" src={`/produk/${logo}.svg`} alt={logo} />
										<!-- {logo} -->
									{/each}
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div class="fixed bottom-0 w-full">
			<div class="flex flex-row justify-between w-full p-8" data-sveltekit-reload>
				<div class="animate-button" on:mouseup={clickPrev}>
					<Button text="Previous" textSize={16} />
				</div>
				<div class="animate-button" on:mouseup={clickMenu}>
					<Button text="MENU" textSize={16} />
				</div>
				<div class="animate-button" on:mouseup={clickNext}>
					<Button text="Next" textSize={16} />
				</div>
			</div>
		</div>
	</div>
{/if}

<SCNLogo id="scn-logo" class="absolute h-16 top-8 right-10" />

<pre class="text-xs hidden">
  {JSON.stringify(data, null, 2)}
</pre>

<style>
	.clipped {
		clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
	}
</style>
