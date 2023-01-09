<script lang="ts">
	export let data;
</script>

<div class="flex h-screen w-screen gap-2 p-2">
	<div class="mx-auto my-auto flex flex-col place-items-center gap-2">
		{#if data.user}
			{data.user.email}
		{:else}
			Not logged in
		{/if}
	</div>
</div>
