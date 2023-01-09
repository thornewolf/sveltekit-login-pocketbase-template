<script lang="ts">
	import Alert from '$lib/components/Alert.svelte';
	export let form: HTMLFormElement;
</script>

<form method="POST">
	<div class="flex h-[90vh] flex-col gap-2 p-2">
		{#if form?.missing} <Alert>Please provide an email.</Alert> {/if}
		{#if form?.incorrect} <Alert>Username or password is incorrect.</Alert> {/if}
		<div
			class="mx-auto my-auto flex h-fit max-w-lg flex-col gap-4 rounded-md bg-base-100 p-4 shadow-xl"
		>
			<h1 class="mx-auto px-4 text-3xl font-bold">Login</h1>
			<div>
				<input
					type="text"
					placeholder="Email"
					class="input-bordered input w-full max-w-xs rounded"
					name="email"
				/>
			</div>
			<div>
				<input
					type="password"
					placeholder="Password"
					name="password"
					class="input-bordered input w-full max-w-xs"
				/>
			</div>
			<button class="btn-primary btn">Login</button>
		</div>
	</div>
</form>
