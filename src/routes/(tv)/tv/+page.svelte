<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	import Button from '$lib/components/Button.svelte';
	import SCNLogo from '$lib/assets/Smart City Nusantara - Primary.svg?component';
	import ArrowRight from '$lib/icons/chevron-right.svg?component';

	onMount(() => {
		let tlIn = gsap.timeline();

		tlIn
			.set('#background', { opacity: 0 })
			.to('#background', { opacity: 1, height: '70vh', duration: 1.6, ease: 'Power2.easeOut' })
			.from('.divider', { width: 0 });

		tlIn.play();
	});
</script>

<div class="body-path w-full h-screen max-h-screen overflow-clip bg-black-5">
	<div class="absolute flex flex-col items-center w-full min-h-screen max-h-screen z-10">
		<div class="p-8 flex flex-col items-center">
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
		<div class="my-10">
			<Button to="/tv/about" text="Start" icon={ArrowRight} />
		</div>
	</div>
	<div id="background" class="absolute bottom-0 max-w-screen overflow-hidden">
		<img class="object-cover h-[80vh]" src="/bg-welcomeScreen.webp" alt="Background" />
	</div>
</div>

<style>
	.body-path {
		-webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
	}
</style>
