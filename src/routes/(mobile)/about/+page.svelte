<script lang="ts">
	import SCNLogo from '$lib/assets/Smart City Nusantara - Primary.svg?component';
	import ArrowRight from '$lib/icons/arrow-right.svg?component';
	import CityIso from '$lib/assets/tv/city-isometric.svg?component';
</script>

<svelte:head>
	<title>About Smart City</title>
</svelte:head>

<div class="flex flex-col min-h-screen justify-between">
	<div class="flex flex-col gap-8 px-4 pt-8 pb-4">
		<div class="flex flex-row gap-4">
			<SCNLogo class="h-12 w-12" />
			<div class="flex flex-col">
				<span class="title-3 font-semibold text-black-80">Sekilas tentang</span>
				<h1 class="title-1 font-bold text-primary">Smart City Nusantara</h1>
			</div>
		</div>
		<p class="body leading-normal px-2">
			Bentuk dukungan PT Telkom dalam transformasi digital di sektor Pemerintah Daerah dan mendorong
			percepatan pemanfaatan ICT demi terwujudnya Kota dan Daerah yang lebih baik dalam berbagai
			aspek, khususnya <strong>pelayanan publik</strong>.
		</p>
		<CityIso id="illustration" class=" h-[60vh] relative -top-[90px]" />
	</div>
	<div class="flex flex-col p-4 fixed w-full bottom-0 items-center gap-4 bg-white">
		<a
			href="/journey/map"
			class="btn bg-primary text-white fill-white hover:text-white hover:bg-secondary w-full"
		>
			Menjelajah sesuai perjalanan <ArrowRight class="h-4" />
		</a>
		<!-- <span class="caption-1">atau</span> -->
		<!-- <button class="btn w-full border-primary text-primary border-2 subhead">Pilih Use Case</button> -->
	</div>
</div>
