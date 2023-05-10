<script lang="ts">
	import Illustration from '$lib/assets/WelcomeScreenImage.svg?component';
	import SCNLogo from '$lib/assets/Smart City Nusantara - Primary.svg?component';
	import ArrowRight from '$lib/icons/arrow-right.svg?component';
</script>

<div class="flex flex-col min-h-screen max-h-screen overflow-hidden justify-between">
	<div class="flex flex-col p-4">
		<div class="flex flex-row justify-end">
			<SCNLogo class="h-10 w-10" />
		</div>
	</div>
	<Illustration class="grow" />

	<div class="flex flex-col shrink bottom-0 gap-6 p-8 bg-white">
		<div class="flex flex-col">
			<span class="title-3 font-semibold">Selamat datang di Interplay</span>
			<h1 class="title-1 font-bold text-primary">Smart City Nusantara</h1>
		</div>
		<p class="body">
			Kami akan memandu anda untuk memahami konsep Smart City Nusantara dan mencoba pengalaman
			mengelola kota cerdas.
		</p>
		<a
			href="/about"
			class="flex flex-row items-center justify-center gap-4 bg-primary text-white hover:text-white hover:bg-secondary w-full p-2 rounded-md"
		>
			Sekilas SCN <ArrowRight class="h-4 fill-white" />
		</a>
	</div>
</div>
