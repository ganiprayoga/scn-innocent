<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { gsap } from 'gsap';

	import SCNLogo from '$lib/assets/Smart City Nusantara - Primary.svg?component';
	import CityIso from '$lib/assets/tv/city-isometric.svg?component';
	import Button from '$lib/components/Button.svelte';

	import TvNavigation from '$lib/components/TVNavigation.svelte';

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
		redirectTo('/tv/sector');
	};

	onMount(() => {
		let tl = gsap.timeline({
			paused: true,
			defaults: { duration: 0.618, ease: 'Power2.easeInOut' }
		});

		// tl.from('#bg-circle-1', { scale: 10, duration: 0.618, ease: 'Power1.easeOut' });
		// tl.from('#bg-circle-2', { x: '-200%', opacity: 0 }, '-=0.6');
		tl.from('#apaSmartCity h1', {
			opacity: 0,
			x: '-10%',
			duration: 0.618
		});
		tl.from('#apaSmartCity p', {
			opacity: 0,
			y: '-10%',
			duration: 0.618
		});

		tl.from('#apaSCN h1', {
			opacity: 0,
			x: '-10%',
			duration: 0.618
		});
		tl.from('#apaSCN p', {
			opacity: 0,
			x: '-10%',
			duration: 0.618
		});

		tl.from('#moreInfo', {
			opacity: 0,
			x: '-10%',
			duration: 0.618
		});

		tl.from('#scn-logo', { y: -100, opacity: 0 }, '<');
		tl.from('#illustration', { scale: 1.5, opacity: 0, duration: 3, ease: 'Power1.easeIn' }, '0');

		tl.play();
	});
</script>

<div class="bg-blur absolute -z-10">
	<div id="bg-circle-1" class="fixed rounded-full bg-primary w-80 h-80 -right-40 top-20" />
	<div id="bg-circle-2" class="fixed rounded-full bg-[#35B44B] w-80 h-80 -left-40 -bottom-20" />
</div>

<div
	id="main-content"
	class="overflow-hidden justify-center gap-48 items-center w-full h-screen bg-white bg-opacity-10 backdrop-blur-[460px]"
>
	<div class="flex w-screen h-screen justify-center items-center fixed">
		<CityIso id="illustration" class=" h-[60vh] relative top-[10vh]" />
	</div>
	<div id="apaSmartCity" class="flex flex-col fixed top-16 left-16 gap-3">
		<h1 class="font-poppins text-primary font-semibold text-[48px]">Apa itu Smart City?</h1>
		<p class="font-poppins w-[35vw] leading-6">
			Smart city adalah konsep pengembangan perkotaan yang menggunakan teknologi informasi untuk
			meningkatkan kehidupan warga dan efisiensi pelayanan publik.
		</p>
	</div>
	<div id="apaSCN" class="flex flex-col fixed top-[30vh] right-16 gap-3">
		<h1 class="font-poppins text-primary font-semibold text-[32px]">
			Apa itu Smart City Nusantara?
		</h1>
		<p class="font-poppins w-[480px] leading-6">
			Smart City Nusantara merupakan inisiasi PT Telkom Indonesia dalam mendorong
			<strong>percepatan inovasi digital</strong> di kota dan daerah untuk meningkatkan kualitas hidup
			penduduk, efisiensi pelayanan publik, dan keberlanjutan lingkungan.
		</p>
	</div>
	<div id="moreInfo" class="flex flex-col fixed bottom-40 left-16 gap-3">
		<p class="font-poppins w-[35vw] leading-6">
			Melalui kolaborasi antara pemerintah, sektor swasta, akademisi, dan masyarakat, Smart City
			Nusantara bertujuan menciptakan kota-kota yang cerdas, berkelanjutan, dan responsif terhadap
			kebutuhan penduduknya.
		</p>
	</div>

	<div class="fixed bottom-0 w-full">
		<div class="flex flex-row justify-between w-full p-8" data-sveltekit-reload>
			<div class="animate-button" on:mouseup={clickPrev}>
				<Button text="Back to Menu" textSize={16} />
			</div>
			<div class="animate-button" on:mouseup={clickNext}>
				<Button text="City Sector" textSize={16} />
			</div>
		</div>
	</div>
</div>

<SCNLogo id="scn-logo" class="absolute h-16 top-8 right-10" />

<style>
	.clipped {
		clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
	}
</style>
