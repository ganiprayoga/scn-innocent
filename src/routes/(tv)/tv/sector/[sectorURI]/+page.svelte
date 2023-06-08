<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';

	// import Illustration from '$lib/components/SectorIllustration.svelte';
	import TvNavigation from '$lib/components/TVNavigation.svelte';
	import SCNLogo from '$lib/assets/Smart City Nusantara - Primary.svg?component';

	export let data: PageData;

	let libURL = '/sector-illustration/' + data.sector.uri + '.svg';
</script>

<div class="bg-blur absolute -z-10">
	<div
		id="bg-circle-1"
		class="fixed rounded-full
    bg-[{data.sector.decoration.right.color}] w-80 h-80 -right-40 bottom-20"
	/>
	<div
		id="bg-circle-2"
		class="fixed rounded-full
    bg-[{data.sector.decoration.right.color}] w-96 h-96 -left-40 top-20"
	/>
</div>

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

	<div class="fixed bottom-0 w-full">
		<TvNavigation />
	</div>
</div>

<SCNLogo id="scn-logo" class="absolute h-16 top-8 right-10" />

<pre class="text-xs">
  {JSON.stringify(data, null, 2)}
</pre>

<style>
	.clipped {
		clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
	}
</style>
