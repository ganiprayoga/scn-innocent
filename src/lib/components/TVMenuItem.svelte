<script lang="ts">
	import ArrowRight from '$lib/icons/chevron-right.svg?component';

	export let title: string;
	let clazz: string = '';
	export { clazz as class };
</script>

<div
	class="{clazz} flex flex-row gap-8 w-full items-center rounded-[32px] justify-between py-8 px-16 text-primary fill-primary hover:bg-primary hover:text-white hover:fill-white active:ring-primary active:ring-opacity-50 active:ring-8 cursor-pointer"
>
	<span class="text-[32px] clipped font-poppins font-semibold">{title}</span>
	<ArrowRight class="h-8" />
</div>

<style>
	.clipped {
		clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
	}
</style>
