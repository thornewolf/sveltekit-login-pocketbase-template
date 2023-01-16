<script lang="ts">
	import Alert from '$lib/components/Alert.svelte';
	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

<div class="flex h-[90vh] w-screen flex-col gap-2 p-2">
	{#if form?.error} <Alert>{form.message}</Alert> {/if}
	<div
		class="mx-auto my-auto flex h-fit max-w-lg flex-col gap-4 rounded-md bg-base-100 p-4 shadow-xl"
	>
		<form method="POST">
			<div class="flex flex-col gap-4">
				<h1 class="mx-auto px-4 text-3xl font-bold">Sign Up</h1>
				<div>
					<input
						type="text"
						placeholder="Email"
						name="email"
						class="input-bordered input w-full max-w-xs rounded"
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
				<button class="btn-primary btn">Sign Up</button>
			</div>
		</form>
		<div class="divider">OR</div>
		<button class="btn-secondary btn">
			<a href="/login"> Login Instead </a>
		</button>
	</div>
</div>
