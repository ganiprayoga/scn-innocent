<script lang="ts">
	import SCNLogo from '$lib/assets/Smart City Nusantara - Primary.svg?component';
	import ArrowRight from '$lib/icons/arrow-right.svg?component';
</script>

<div class="flex flex-col min-h-screen gap-4 justify-between">
	<div class="flex flex-col px-4 py-8 gap-8">
		<div class="flex flex-row gap-4">
			<SCNLogo class="h-12 w-12" />
			<div class="flex flex-col">
				<span class="title-3 font-semibold">Sekilas tentang</span>
				<h1 class="title-1 font-bold">Smart City Nusantara</h1>
			</div>
		</div>
		<p class="body leading-normal">
			Smart City Nusantara (SCN) merupakan bentuk dukungan PT Telkom untuk mentransformasi digital
			di sektor Pemerintah Daerah dan mendorong percepatan pemanfaatan ICT demi terwujudnya Kota dan
			Daerah yang lebih baik dalam berbagai aspek, khususnya pelayanan publik.
		</p>
		<div class="flex flex-col items-center gap-4">
			<div class="flex flex-row items-center justify-center gap-2">
				<span class="large-title font-bold">40+</span>
				<span class="font-semibold callout">Aplikasi terintegrasi <br /> dan terus bertumbuh</span>
			</div>
			<span class="text subhead text-black-80">untuk membantu pengambilan keputusan di</span>
			<div class="flex flex-row items-center justify-center gap-2">
				<span class="large-title font-bold">60+</span>
				<span class="font-semibold callout">Lembaga Pemerintahan <br /> yang menginisiasi</span>
			</div>
		</div>
	</div>
	<div class="flex flex-col bottom-0 items-center gap-2 p-8 bg-white">
		<a
			href="/journey/map"
			class="flex flex-row items-center justify-center gap-4 bg-primary text-white fill-white hover:text-white hover:bg-secondary w-full p-3 rounded-md"
		>
			Menjelajah sesuai perjalanan <ArrowRight class="h-4" />
		</a>
		<span class="caption-1">atau</span>
		<button
			class="flex flex-row p-2 border-black-80 rounded-md w-full justify-center border-2 subhead"
			>Pilih Use Case</button
		>
	</div>
</div>
