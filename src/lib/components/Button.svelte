<script lang="ts">
	export let to: string = '#home';
	export let text: string;
	export let icon: any = '';
	export let textSize: number = 32;
</script>

<a
	data-sveltekit-preload-data="hover"
	href={to}
	class="home-button flex flex-row gap-8 items-center py-4 px-8 bg-white text-primary fill-primary border-primary border-4 rounded-full border-solid hover:bg-primary hover:text-white hover:fill-white active:ring active:ring-primary active:ring-opacity-50 active:ring-8 active:gap-4"
>
	<span class={`font-poppins overflow-hidden font-semibold text-[${textSize}px] leading-tight`}
		>{text}</span
	>
	<svelte:component this={icon} class="h-8" />
</a>
