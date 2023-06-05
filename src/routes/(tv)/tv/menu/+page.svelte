<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	import TvMenuItem from '$lib/components/TVMenuItem.svelte';

	let menus = [
		{ title: 'Smart City Nusantara', url: '/tv/about' },
		{ title: 'City Sector', url: '/tv/city-sector' },
		{ title: 'Success Story', url: '/tv/success-story' }
	];

	onMount(() => {
		let tl = gsap.timeline({
			paused: true,
			defaults: { duration: 0.618, ease: 'Power2.easeInOut' }
		});

		tl.from('#text-menu', {
			clipPath: 'polygon(100% 0, 100% 0%, 100% 100%, 100% 100%)',
			x: '-100%'
		});
		tl.from(
			'.menu-item',
			{
				opacity: 0,
				x: '-10%',
				duration: 0.618,
				stagger: 0.2
			},
			0.3
		);
		tl.play();
	});
</script>

<div class="flex flex-row justify-center gap-48 items-center w-full h-screen">
	<div class="flex flex-row gap-16 items-center">
		<div class="w-2 h-[72px] rounded-full bg-primary" />
		<h1 id="text-menu" class="clipped text-primary text-[72px] font-poppins font-semibold">Menu</h1>
	</div>
	<div class="flex flex-col gap-4">
		{#each menus as menu}
			<TvMenuItem class="menu-item " title={menu.title} />
		{/each}
	</div>
</div>

<style>
	.clipped {
		clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
	}
</style>
