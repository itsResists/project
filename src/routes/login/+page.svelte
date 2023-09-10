<script>
	import { applyAction, enhance } from '$app/forms';
	import { pb } from '$lib/pocketbase';
</script>

<form
	method="post"
	use:enhance={() => {
		return async ({ result }) => {
			pb.authStore.loadFromCookie(document.cookie);
			await applyAction(result);
		};
	}}
>
	<h1 class="text-3xl">Log in</h1>

	<div>
		<label for="email">Email</label>
		<input class="input" type="email" name="email" id="email" required />
		<label for="password">Password</label>
		<input class="hover:cursor-text input" type="password" name="password" id="password" required />
		<button class="btn">Login</button>
	</div>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	label {
		margin: 10px;
	}

	.input {
		padding: 5px;
		background-color: grey;
		color: black;
	}

	.btn {
		margin: 10px;
		padding: 5px;
		background-color: darkslategrey;
	}
</style>
