<script lang="ts">
	import type { PageData } from './$types';

	export let PgData: PageData;
	export let data;
</script>

<pre>
  {JSON.stringify(data.user, null, 4)}
</pre>
