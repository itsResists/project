<script>
	import { isModalOpen } from '../../stores/ModalStore';
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
				{$isModalOpen}
				<button
					class="btn p-2 m-4 h-12 w-28 flex justify-center"
					on:click={() => {
						isModalOpen.set(true);
					}}>Jutsu 1</button
				>
			</div>
		</div>
	</div></body
>
