<script lang="ts">
	import type { PageData } from './$types';
	import supabase from '$lib/db/supabaseClient';

	export let data: PageData;
</script>

<div class="bg-blur absolute -z-10">
	<div id="bg-circle-1" class="fixed rounded-full bg-[#a01212] w-80 h-80 -right-5 bottom-20" />
	<div id="bg-circle-2" class="fixed rounded-full bg-[#4e1397] w-80 h-80 -left-20 -top-20" />
</div>

<div
	id="main-content"
	class="flex flex-row gap-48 p-8 w-full min-h-screen bg-white bg-opacity-10 backdrop-blur-[460px]"
>
	Lost
	<pre>
    {JSON.stringify(data.athleteSummary, null, 2)}
  </pre>
</div>
