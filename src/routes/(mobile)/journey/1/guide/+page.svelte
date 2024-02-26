<script lang="ts">
	import SCNLogo from '$lib/assets/Smart City Nusantara - Primary.svg?component';
	import TVGuide from '$lib/assets/TV-Guide 1.svg?component';
	import ArrowRight from '$lib/icons/arrow-right.svg?component';
</script>

<svelte:head>
	<title>Step 1 - Guidelines</title>
</svelte:head>

<div class="flex flex-col min-h-screen gap-4 justify-between">
	<div class="flex flex-col px-4 py-8 gap-8 items-center text-center">
		<div class="flex flex-col">
			<span class="title-3 font-semibold text-center">Smart TV No. 1</span>
			<h1 class="title-1 font-bold text-center text-primary">Konsep Smart City Nusantara</h1>
		</div>
		<div class="TV w-full">
			<TVGuide />
		</div>
		<p>Silakan berinteraksi dengan layar untuk menjelajahi konsep Smart City Nusantara.</p>
	</div>
	<div class="flex flex-col bottom-0 items-center gap-4 p-8 bg-white">
		<span class="title-3 font-bold">Selesai di Smart TV No. 1</span>
		<div class="flex flex-row w-full items-center gap-4">
			{#if false}
				<button class="flex flex-row shrink p-2 rounded-md justify-center">Pilih Use Case</button>
			{/if}
			<a
				href="/journey/2/direction"
				class="flex flex-row grow items-center justify-center gap-4 bg-primary text-white fill-white hover:text-white hover:bg-secondary w-full p-3 rounded-md"
			>
				Lanjut Menjelajah <ArrowRight class="h-4" />
			</a>
		</div>
	</div>
</div>

<style>
	.TV {
		filter: drop-shadow(0px 8px 128px rgba(0, 0, 0, 0.33));
	}
</style>
