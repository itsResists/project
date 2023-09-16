<script>
	import { fade } from 'svelte/transition';
	import { isModalOpen } from '../stores/ModalStore';
</script>

<div
	class="w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-10"
	on:click={() => isModalOpen.set(false)}
	transition:fade
>
	<div
		class="bg-slate-500 text-black rounded-md px-8 py-10 max-w-lg opacity-75 relative"
		on:click|stopPropagation
	>
		<slot />
		<button
			class="absolute bottom-2 right-5 border border-red-100 p-1 rounded-md text4xl text-gray-300 hover:-translate-y-0.5 transition-transform"
			on:click={() => isModalOpen.set(false)}>Cancel</button
		>
	</div>
</div>
