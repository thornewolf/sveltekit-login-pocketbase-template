<script lang="ts">
	export let data: App.PageData;
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn-ghost btn lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<ul
				tabindex="0"
				class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
			>
				<ul class="menu menu-horizontal px-1">
					<li>Item 1</li>
					<li>Item 2</li>
				</ul>
			</ul>
		</div>
		<!-- svelte-ignore a11y-missing-attribute -->
		<a href="/" class="btn-ghost btn text-xl normal-case">Login App</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/">Item 1</a></li>
			<li><a href="/">Item 2</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		{#if !data.user}
			<!-- svelte-ignore a11y-missing-attribute -->
			<a href="/signup" class="btn">Get started</a>
		{:else}
			<a href="/logout" class="btn">Log out</a>
		{/if}
	</div>
</div>

<slot />

<footer class="footer footer-center bg-base-100 p-4 text-base-content">
	<div>
		<p>Thorne Wolfenbarger - Copyright © 2023 - All rights reserved</p>
	</div>
</footer>
