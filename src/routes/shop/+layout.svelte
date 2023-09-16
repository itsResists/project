<script>
	import Modal from '../../components/Modal.svelte';
	import { isModalOpen } from '../../stores/ModalStore';
</script>

<body>
	{#if $isModalOpen === true}
		<Modal>
			<p class="m-2 text-black">Are you sure?</p>
			<button
				class="absolute bottom-2 left-5 border border-red-100 p-1 rounded-md text4xl text-gray-300 hover:-translate-y-0.5 transition-transform"
				on:click={() => isModalOpen.set(false)}>Purchase</button
			>
		</Modal>
	{/if}

	<div>
		<slot />
	</div>
</body>
