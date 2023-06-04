<script lang="ts">
	export let to: string = '#home';
	export let text: string;
	export let icon: any;
</script>

<a
	href={to}
	class="home-button flex flex-row gap-8 items-center py-4 px-8 text-primary fill-primary border-primary border-4 rounded-full border-solid hover:bg-primary hover:text-white hover:fill-white"
>
	<span class="font-poppins font-semibold text-[32px] leading-tight">{text}</span>
	<svelte:component this={icon} class="h-8" />
</a>
