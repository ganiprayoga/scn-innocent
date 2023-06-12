<script lang="ts">
	import SCNLogo from '$lib/assets/Smart City Nusantara - Primary.svg?component';
	import ArrowRight from '$lib/icons/arrow-right.svg?component';
</script>

<div class="flex flex-col min-h-screen justify-between px-4 pt-8 pb-4">
	<div class="flex flex-col gap-8">
		<div class="flex flex-row gap-4">
			<SCNLogo class="h-12 w-12" />
			<div class="flex flex-col">
				<span class="title-3 font-semibold text-black-80">Sekilas tentang</span>
				<h1 class="title-1 font-bold text-primary">Smart City Nusantara</h1>
			</div>
		</div>
		<p class="body leading-normal px-2">
			Smart City Nusantara (SCN) merupakan bentuk dukungan PT Telkom untuk mentransformasi digital
			di sektor Pemerintah Daerah dan mendorong percepatan pemanfaatan ICT demi terwujudnya Kota dan
			Daerah yang lebih baik dalam berbagai aspek, khususnya pelayanan publik.
		</p>
		<div class="flex flex-col gap-4 px-4">
			<div class="flex flex-row items-center gap-4">
				<div class="bg-tertiary-40 p-2 rounded-md">
					<span class="large-title font-bold">40+</span>
				</div>
				<span class="font-semibold callout">Aplikasi terintegrasi dan terus bertumbuh</span>
			</div>
			<span class="text subhead text-black-80 self-center"
				>untuk membantu pengambilan keputusan di</span
			>
			<div class="flex flex-row items-center gap-4">
				<div class="bg-black-10 p-2 rounded-md">
					<span class="large-title font-bold">60+</span>
				</div>
				<span class="font-semibold callout">Lembaga Pemerintahan <br /> yang menginisiasi</span>
			</div>
		</div>
	</div>
	<div class="flex flex-col bottom-0 items-center gap-4 bg-white">
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
