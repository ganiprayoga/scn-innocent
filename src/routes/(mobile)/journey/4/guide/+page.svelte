<script lang="ts">
	import SCNLogo from '$lib/assets/Smart City Nusantara - Primary.svg?component';
	import TVGuide from '$lib/assets/TV-Guide 3.svg?component';
	import ArrowRight from '$lib/icons/arrow-right.svg?component';

	const closeWindow = () => {
		window.open('', '_self');
		window.close();
	};
</script>

<svelte:head>
	<title>Step 4 - Guideline</title>
</svelte:head>

<div class="flex flex-col min-h-screen gap-4 justify-between">
	<div class="flex flex-col px-4 py-8 gap-8 items-center">
		<div class="flex flex-col">
			<span class="title-3 font-semibold text-center">Smart TV No. 3</span>
			<h1 class="title-1 font-bold text-center text-primary">Monitoring & Controlling Aset</h1>
		</div>
		<p class="text-center">
			Memonitor, Mengendalikan, dan Aktivasi Aset Smart City dan Kawasan menggunakan Teknologi
			Internet of Things (IoT)
		</p>
		<div class="TV w-full">
			<TVGuide />
		</div>
		<p class="text-center">
			<strong>Tablet Android</strong><br />Mencoba pengendalian Smart PJU
		</p>
	</div>
	<div class="flex flex-col bottom-0 items-center gap-4 p-8 bg-white">
		<span class="title-3 font-bold">Selesai di Meja No. 1</span>
		<div class="flex flex-row w-full items-center gap-4">
			{#if false}
				<button class="flex flex-row shrink p-2 rounded-md justify-center">Pilih Use Case</button>
			{/if}
			<button
				on:click={closeWindow}
				class="flex flex-row grow items-center justify-center gap-4 bg-primary text-white fill-white hover:text-white hover:bg-secondary w-full p-3 rounded-md"
			>
				Selesai <ArrowRight class="h-4" />
			</button>
		</div>
	</div>
</div>

<style>
	.TV {
		filter: drop-shadow(0px 8px 128px rgba(0, 0, 0, 0.33));
	}
</style>
