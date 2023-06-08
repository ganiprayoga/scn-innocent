<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	import Button from '$lib/components/Button.svelte';
	import SCNLogo from '$lib/assets/Smart City Nusantara - Primary.svg?component';
	import ArrowRight from '$lib/icons/chevron-right.svg?component';
	import { goto } from '$app/navigation';
	import { redirect } from '@sveltejs/kit';

	let loaded: boolean = false;
	let testEvent: string = 'Dites disini';

	const anWhile = () => {
		let tl = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: 'Power2.easeInOut' } });
		let tl2 = gsap.timeline({ repeat: -1, yoyo: true });

		tl.to('.home-button svg', { x: 8 });
		tl2.to('#background', { height: '75vh', duration: 6.18, ease: 'Power1.easeInOut' });
	};

	const redirectToMenu = () => {
		goto('/tv/menu');
	};

	const anRelease = () => {
		testEvent = 'released';
		console.log(testEvent);

		let tl = gsap.timeline({
			paused: true,
			defaults: { duration: 0.618, ease: 'Power2.easeOut' },
			onComplete: redirectToMenu
		});

		tl.to('.animate-from-top', { opacity: 0, y: -400 }, 0);
		tl.to('#background', { opacity: 0, y: 160 }, 0);
		tl.to(
			['.home-button', '.home-button span', '.home-button svg'],
			{ opacity: 0, width: '0' },
			0.4
		);
		tl.to('.divider', { width: '100vw', opacity: 0 }, 0.6);

		tl.play();
	};

	loaded = true;
	onMount(() => {
		let tlIn = gsap.timeline({ paused: true, defaults: { duration: 1.6 }, onComplete: anWhile });

		tlIn
			.set('#background', { opacity: 0 })
			// .set(['.home-button', '.home-button span'], { opacity: 0 })
			.to('#background', { opacity: 1, height: '70vh', ease: 'Power2.easeOut' })
			.from('.animate-from-top', { opacity: 0, ease: 'Power2.easeOut' }, '-=62%')
			.from(
				'.home-button',
				{ opacity: 0, width: 0, paddingLeft: 0, paddingRight: 0, ease: 'Power2.easeOut' },
				'-=62%'
			)
			.from(
				['.home-button span', '.home-button svg'],
				{ opacity: 0, duration: 0.6, ease: 'Power2.easeOut' },
				'-=62%'
			)
			.from('.divider', { width: 0, ease: 'Power2.easeOut' }, '-=62%');
		// .to('.home-button', { opacity: 1, duration: 0.6 }, 'animButton')

		tlIn.play();
	});
</script>

<svelte:head>
	<title>TV Presentation</title>
</svelte:head>

{#if loaded}
	<div class="body-path w-full h-screen max-h-screen overflow-clip bg-black-5">
		<div class="absolute flex flex-col items-center w-full min-h-screen max-h-screen z-10">
			<div class="animate-from-top p-8 flex flex-col items-center">
				<SCNLogo class="h-32" />
				<div class="flex flex-col p-4">
					<h3 class="font-poppins text-[64px] text-black-80 font-semibold text-center">
						Selamat Datang di Interplay
					</h3>
					<h1 class="font-montserrat text-[96px] text-black font-bold text-center">
						<span class="text-primary">Smart City</span> Nusantara
					</h1>
				</div>
			</div>
			<div class="divider bg-primary h-2 w-40 rounded-full" />
			<div class="animate-button my-10" on:mouseup={anRelease}>
				<Button text="Start" icon={ArrowRight} />
			</div>
		</div>
		<div id="background" class="absolute bottom-0 max-w-screen overflow-hidden">
			<img class="object-cover h-[80vh]" src="/bg-welcomeScreen.webp" alt="Background" />
		</div>
	</div>
{/if}

<style>
	.body-path {
		-webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
	}
</style>
