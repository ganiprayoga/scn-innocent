<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { fly, fade } from 'svelte/transition';

	import UserFlow from '$lib/assets/alur-jelajah-scn-grad.svg?component';
	import ArrowRight from '$lib/icons/chevron-right.svg?component';

	let animate = gsap.timeline({ repeat: -1 });

	onMount(() => {
		animate.to('#svg-journey-map .ellipse-gradient', {
			duration: 5,
			rotate: 360,
			// transformOrigin: '50% 50%',
			ease: 'none'
		});
	});
</script>

<div
	class="flex flex-col min-h-screen max-h-screen p-4 gap-6 justify-between"
	in:fly={{ x: '100vw', duration: 309, delay: 309 }}
	out:fly={{ x: '-100vw', duration: 309 }}
>
	<div class="flex flex-col gap-0 items-center">
		<h1 class="text-center title-1 font-bold">Alur Penjelajahan</h1>
		<span class="subhead font-bold text-primary">Interplay Smart City Nusantara</span>
	</div>
	<UserFlow class="grow" id="svg-journey-map" />
	<div class="flex flex-row bottom-0 items-center gap-4 bg-white">
		<a href="/about" class="btn border-2 border-primary shrink text-primary">Kembali</a>
		<a
			href="/journey/1/direction"
			class="btn grow bg-primary border-2 border-primary text-white fill-white hover:text-white hover:fill-white"
		>
			Mulai <ArrowRight class="h-4" />
		</a>
	</div>
</div>

<style>
	.ellispe-gradient {
		background-image: repeating-conic-gradient(transparent 10%, white 20%);
	}
</style>
