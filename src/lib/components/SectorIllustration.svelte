<script lang="ts">
	export let uri: string;
	let name: string = 'Illu' + uri;

	import Illupariwisata from '$lib/assets/tv/sector-illustration/pariwisata.svg?component';
	import Illudesa from '$lib/assets/tv/sector-illustration/desa.svg?component';
	import Illupendidikan from '$lib/assets/tv/sector-illustration/pendidikan.svg?component';
	import Illukesehatan from '$lib/assets/tv/sector-illustration/kesehatan.svg?component';

	// switch (uri) {
	// 	case 'pariwisata':
	// 		import Illustration from '$lib/assets/tv/sector-illustration/pariwisata.svg?component';
	// 		break;
	// 	case 'desa':
	// 		import Illustration from '$lib/assets/tv/sector-illustration/pariwisata.svg?component';
	// 		break;
	// 	case 'kesehatan':
	// 		import Illustration from '$lib/assets/tv/sector-illustration/pariwisata.svg?component';
	// 		break;
	// 	case 'pad':
	// 		import Illustration from '$lib/assets/tv/sector-illustration/pariwisata.svg?component';
	// 		break;
	// 	case 'pendidikan':
	// 		import Illustration from '$lib/assets/tv/sector-illustration/pariwisata.svg?component';
	// 		break;
	// 	default:
	// 		import Illustration from '$lib/assets/tv/sector-illustration/pariwisata.svg?component';
	// 		break;
	// }
</script>

<svelte:component this={name} />
