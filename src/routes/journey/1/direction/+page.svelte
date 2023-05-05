<script lang="ts">
	import SCNLogo from '$lib/assets/Smart City Nusantara - Primary.svg?component';
	import ArrowRight from '$lib/icons/arrow-right.svg?component';
</script>

<div class="flex flex-col min-h-screen gap-4 justify-between bg-black-10">
	<div class="flex flex-col p-4">
		<div class="flex flex-row">
			<SCNLogo class="h-10 w-10" />
		</div>
	</div>
	<div class="flex flex-col bottom-0 gap-8 p-8 bg-white">
		<div class="flex flex-col">
			<span class="title-3 font-semibold text-center">Silakan menuju ke</span>
			<h1 class="title-1 font-bold text-center">Smart TV No. 1</h1>
		</div>
		<a
			href="/journey/1/guide"
			class="flex flex-row items-center justify-center gap-4 bg-primary text-white hover:text-white hover:bg-secondary w-full p-3 rounded-md"
		>
			Saya sudah di sini
		</a>
	</div>
</div>
