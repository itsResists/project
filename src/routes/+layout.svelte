<script>
	import '../app.postcss';
	import { currentUser, pb } from '$lib/pocketbase';
	import { applyAction, enhance } from '$app/forms';
	import 'fluent-svelte/theme.css';
</script>

<div class="bg-neutral text-neutral-content">
	<div class="max-w-xl mx-auto navbar">
		<div class="navbar-start">
			<a href="/" class="btn btn-ghost text-xl">Ninja Stuff</a>
		</div>
		<div class="navbar-end">
			<ul class="menu menu-horizontal">
				{#if $currentUser}
					<li>
						<div>
							<p>
								Welcome back,
								{$currentUser.username}!
							</p>
						</div>
					</li>
					<li>
						<a href="/profile">Profile</a>
					</li>
					<li>
						<a href="/training">Training</a>
					</li>
					<li>
						<a href="/shop">Shop</a>
					</li>
					<li>
						<a href="/arena">Arena</a>
					</li>
					<li>
						<a href="/ramen">Ramen</a>
					</li>
					<li>
						<form
							method="POST"
							action="/logout"
							use:enhance={() => {
								return async ({ result }) => {
									pb.authStore.clear();
									await applyAction(result);
								};
							}}
						>
							<button>Logout</button>
						</form>
					</li>
				{:else}
					<li><a href="/login">Login</a></li>
					<li><a href="/register"> Register </a></li>
				{/if}
			</ul>
		</div>
	</div>
</div>

<div class="max-w-xl mx-auto py-8 px-4">
	<slot />
</div>
