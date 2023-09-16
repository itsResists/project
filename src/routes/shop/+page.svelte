<script>
	import { isModalOpen } from '../../stores/stores';
	import { enhance } from '$app/forms';
	export let data;
	export let form;

	let jutsus = data.info;
</script>

<body>
	<h1>Jutsu Shop</h1>

	<div class="  ">
		<div class="justify-center grid grid-cols-4">
			<div />
			<a href="/shop" class="btn m-2">Jutsu</a>
			<a href="/shop/items" class="btn m-2">Items</a>
			<div />
		</div>
		<div class="grid grid-cols-4 border">
			<div>
				{#each jutsus as jutsu}
					<form method="post" use:enhance>
						<button
							name={jutsu?.name}
							value={jutsu?.jutsuID}
							class="btn p-4 m-1"
							formaction="?/jutsu"
						>
							{jutsu?.name.replace(/_/, ' ')}
							{jutsu?.type}
						</button>
					</form>
				{/each}
			</div>

			<!-- <div>
				{$isModalOpen}
				<button
					class="btn p-2 m-4 h-12 w-28 flex justify-center"
					on:click={() => {
						isModalOpen.set(true);
					}}>Jutsu 1</button
				>
			</div> -->
		</div>
	</div>
</body>
