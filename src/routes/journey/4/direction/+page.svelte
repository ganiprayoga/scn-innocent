<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import SCNLogo from '$lib/assets/Smart City Nusantara - Primary.svg?component';
	import ArrowRight from '$lib/icons/arrow-right.svg?component';
	import BgScreen from '$lib/assets/bg-screen.svg?url';
	import Alur from '$lib/assets/alur-4.svg?component';
</script>

<div
	class="flex flex-col min-h-screen max-h-screen gap-4 justify-between relative bg-no-repeat"
	style="background-image: url({BgScreen});"
	in:fly={{ x: '100vw', duration: 309, delay: 309, easing: quintOut }}
	out:fade={{ duration: 309, easing: quintOut }}
>
	<div class="flex flex-col grow p-4 relative">
		<div class="flex flex-row absolute">
			<SCNLogo class="h-10 w-10" />
		</div>
	</div>
	<Alur class="grow" />
	<div class="flex flex-col bottom-0 gap-8 p-8 bg-white">
		<div class="flex flex-col">
			<span class="title-3 font-semibold text-center">Silakan menuju ke</span>
			<h1 class="title-1 font-bold text-center">Meja No. 1</h1>
		</div>
		<a
			href="/journey/4/guide"
			class="flex flex-row items-center justify-center gap-4 bg-primary text-white hover:text-white hover:bg-secondary w-full p-3 rounded-md"
		>
			Saya sudah di sini
		</a>
	</div>
</div>
