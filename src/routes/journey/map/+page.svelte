<script lang="ts">
	import SCNLogo from '$lib/assets/Smart City Nusantara - Primary.svg?component';
	import VisitorMap from '$lib/assets/alur-jelajah-scn.png';
	import ArrowRight from '$lib/icons/arrow-right.svg?component';
</script>

<div class="flex flex-col min-h-screen gap-4 justify-between">
	<div class="flex flex-col px-4 py-8 gap-8 items-center">
		<h1 class="text-center title-1 font-bold">Alur Penjelajahan</h1>
		<div>
			<img class="w-full" style="height: 64vh;" src={VisitorMap} alt="AA" />
		</div>
	</div>
	<div class="flex flex-row bottom-0 items-center gap-4 p-8 bg-white">
		<button class="flex flex-row shrink p-2 rounded-md justify-center">Kembali</button>
		<a
			href="/journey/1/direction"
			class="flex flex-row grow items-center justify-center gap-4 bg-primary text-white fill-white hover:text-white hover:bg-secondary w-full p-3 rounded-md"
		>
			Mulai <ArrowRight class="h-4" />
		</a>
	</div>
</div>
