<script>
	import { profileStore } from '../../stores/ModalStore';
</script>

<main>
	<body>
		{#if $profileStore === false}
			<div class="grid grid-cols-5">
				<div />
				<div>
					<a class="btn p-2" href="/profile" on:click={() => profileStore.set(true)}>Profile</a>
				</div>
				<div>
					<a class="btn p-2" href="/profile/jutsu" on:click={() => profileStore.set(false)}>Jutsu</a
					>
				</div>
				<div>
					<a class="btn p-2" href="/profile/items" on:click={() => profileStore.set(false)}>Items</a
					>
				</div>
				<div />
			</div>
		{:else}
			<div class="grid grid-cols-4">
				<div />

				<div>
					<a class="btn p-2" href="/profile/jutsu" on:click={() => profileStore.set(false)}>Jutsu</a
					>
				</div>
				<div>
					<a class="btn p-2" href="/profile/items" on:click={() => profileStore.set(false)}>Items</a
					>
				</div>
				<div />
			</div>
		{/if}
	</body>

	<slot />
</main>
