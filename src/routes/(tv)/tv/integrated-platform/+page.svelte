<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { gsap } from 'gsap';

	import SCNLogo from '$lib/assets/Smart City Nusantara - Primary.svg?component';
	import Button from '$lib/components/Button.svelte';
	import TvNavigation from '$lib/components/TVNavigation.svelte';
	import TvMenuItem from '$lib/components/TVMenuItem.svelte';

	let selectedMenu: any;

	let menus = [
		{ id: 1, title: 'Smart City Nusantara', url: '/tv/about' },
		{ id: 2, title: 'City Sector', url: '/tv/sector' }
		// { id: 3, title: 'Success Story', url: '/tv/success-story' }
	];

	$: urlRedir = '';

	const redirectTo = (uri: string) => {
		console.log(uri);
		// goto(uri, { invalidateAll: true });
		goto('/tv/menu').then(() => {
			goto(uri);
		});
	};

	const clickPrev = () => {
		// console.log('clicked release');
		redirectTo('/tv/menu');
	};

	const clickNext = () => {
		// console.log('clicked release');
		redirectTo('/tv/sector/pariwisata');
	};

	const selectMenu = (id: number, url: string) => {
		selectedMenu = 'menu-' + id;
		urlRedir = url;
		const theElement = document.getElementById(selectedMenu);
		theElement?.classList.remove('menu-item');
		theElement?.classList.add('bg-primary');

		let tl = gsap.timeline({
			paused: true,
			defaults: { duration: 0.3, ease: 'Power2.easeInOut' },
			onComplete: redirectTo
		});

		tl.to('#menu-ornament', { height: 0 });
		tl.to(
			'#text-menu',
			{
				clipPath: 'polygon(100% 0, 100% 0%, 100% 100%, 100% 100%)',
				x: '-100%'
			},
			'-=0.3'
		);
		tl.to(
			'.menu-item',
			{
				opacity: 0,
				x: '-10%',
				duration: 0.618,
				stagger: 0.2
			},
			'-=0.3'
		);
		tl.to(theElement, {
			duration: 0.618,
			width: '200vw',
			height: '200vh',
			top: 0,
			left: 0
		});
		tl.to('#scn-logo', { y: -100, opacity: 0 }, '+=0.3');

		tl.play();
	};

	onMount(() => {
		let tl = gsap.timeline({
			paused: true,
			defaults: { duration: 0.618, ease: 'Power2.easeInOut' }
		});

		tl.from('#bg-circle-1', { x: '200%', opacity: 0 });
		tl.from('#bg-circle-2', { x: '-200%', opacity: 0 }, '-=0.4');

		tl.from('#scn-logo', { y: -100, opacity: 0 }, '<');

		tl.from('#menu-ornament', { height: 0 });
		tl.from(
			'#text-submenu',
			{
				clipPath: 'polygon(100% 0, 100% 0%, 100% 100%, 100% 100%)',
				x: '-100%'
			},
			'-=0.3'
		);
		tl.from(
			'#text-menu',
			{
				clipPath: 'polygon(100% 0, 100% 0%, 100% 100%, 100% 100%)',
				x: '-100%'
			},
			'-=0.3'
		);
		tl.from(
			'#hlc',
			{
				opacity: 0
			},
			'-=0.3'
		);
		tl.play();
	});
</script>

<div class="bg-blur absolute -z-10">
	<div id="bg-circle-1" class="fixed rounded-full bg-tertiary w-80 h-80 -right-40 top-20" />
	<div id="bg-circle-2" class="fixed rounded-full bg-secondary w-80 h-80 -left-40 -top-20" />
</div>

<div
	id="main-content"
	class="overflow-hidden flex flex-row justify-center gap-48 items-center w-full h-screen bg-white bg-opacity-10 backdrop-blur-[460px]"
>
	<div class="flex flex-col gap-4 max-h-screen">
		<div class="flex flex-row gap-16 items-center">
			<div id="menu-ornament" class="w-2 h-[72px] rounded-full bg-primary" />
			<div class="flex flex-col gap-0">
				<span id="text-submenu" class="clipped text-black text-[32px] font-poppins -mb-4"
					>Smart City Nusantara Integrated Platform</span
				>
				<h1 id="text-menu" class="clipped text-primary text-[64px] font-poppins font-semibold">
					High Level Concept
				</h1>
			</div>
		</div>
		<img id="hlc" src="/snip-hlc.webp" class="max-h-[70vh]" alt="SNIP High Level Concept" />
	</div>
</div>

<div class="fixed bottom-0 w-full">
	<div class="flex flex-row justify-between w-full p-8" data-sveltekit-reload>
		<div class="animate-button" on:mouseup={clickPrev}>
			<Button text="Back" textSize={16} />
		</div>
		<!-- <div class="animate-button" on:mouseup={clickNext}>
			<Button text="City Sector" textSize={16} />
		</div> -->
	</div>
</div>

<SCNLogo id="scn-logo" class="absolute h-16 top-8 right-10" />

<style>
	.clipped {
		clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
	}
</style>
