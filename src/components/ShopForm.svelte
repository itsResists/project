<script>
	export function saveForm() {
		alert('Form saved! Name: ' + value);
		console.log(value);
	}

	let value = '';
</script>

<form on:submit|preventDefault={saveForm}>
	Name: <input id="name" bind:value />
	<button type="submit"> Save Form from Inside </button>
</form>
