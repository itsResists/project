<script>
	import { currentUser, pb } from '$lib/pocketbase';
	import { applyAction, enhance } from '$app/forms';
	export let data;
</script>

{#if $currentUser}
	<div>
		<p>Welcome back, {data.userData.username}!</p>
	</div>
{:else}
	<div>
		<p>Not logged in</p>
	</div>
{/if}

<div>
	Health: {data.userData.health} / {data.userData.maxHealth}
</div>

<div>
	Chakra: {data.userData.chakra} / {data.userData.maxChakra}
</div>

<div>
	Energy: {data.userData.energy} / {data.userData.maxEnergy}
</div>
<div>
	Stat1: {data.userData.offense}
</div>
<div>
	Stat2: {data.userData.defense}
</div>
<div>
	Stat3: {data.userData.speed}
</div>
<div>
	Stat4: {data.userData.strength}
</div>
<div>
	Stat5: {data.userData.willpower}
</div>
<div>
	Stat6: {data.userData.intelligence}
</div>
<div>
	Stat7: {data.userData.chakra_control}
</div>

<form method="post" use:enhance>
	<button class="btn" formaction="?/stat1">Add Stat Type 1 </button>
	<button class="btn" formaction="?/stat2">Add Stat Type 2 </button>
	<button class="btn" formaction="?/stat3">Add Stat Type 3 </button>
	<button class="btn" formaction="?/stat4">Add Stat Type 4 </button>
	<button class="btn" formaction="?/stat5">Add Stat Type 5</button>
</form>

<!-- CLIENT SIDE STUFF - REMOVE -->
<!-- <form method="post">
	<button
		class="btn"
		on:click={async (e) => {
			e.preventDefault();
			await addStatType1({ pb });
		}}
	>
		Add Stat Type 1
	</button>
	<button
		class="btn"
		on:click={async (e) => {
			e.preventDefault();
			await addStatType2({ pb });
		}}
	>
		Add Stat Type 2
	</button>
	<button
		class="btn"
		on:click={async (e) => {
			e.preventDefault();
			await addStatType3({ pb });
		}}
	>
		Add Stat Type 3
	</button>
	<button
		class="btn"
		on:click={async (e) => {
			e.preventDefault();
			await addStatType4({ pb });
		}}
	>
		Add Stat Type 4
	</button>
	<button
		class="btn"
		on:click={async (e) => {
			e.preventDefault();
			await addStatType5({ pb });
		}}
	>
		Add Stat Type 5
	</button>
</form> -->

<!-- 
// async function addStatType1(locals) {
	// 	try {
	// 		const oldData = await locals.pb
	// 			.collection('users')
	// 			.getOne($currentUser?.id, { fields: ['stat1'] });
	// 		const data = {
	// 			stat1: oldData.stat1 + 5123
	// 		};
	// 		await locals.pb.collection('users').update($currentUser?.id, data);
	// 	} catch (e) {
	// 		console.error(e);
	// 		throw e;
	// 	}
	// }
	// async function addStatType2(locals) {
	// 	try {
	// 		const oldData2 = await locals.pb
	// 			.collection('users')
	// 			.getOne('c70ks89ygyprufj', { fields: ['stat2'] });
	// 		const data2 = {
	// 			stat2: oldData2.stat2 + 5123
	// 		};
	// 		await locals.pb.collection('users').update('c70ks89ygyprufj', data2);
	// 	} catch (e) {
	// 		console.error(e);
	// 		throw e;
	// 	}
	// }
	// async function addStatType3(locals) {
	// 	try {
	// 		const oldData = await locals.pb
	// 			.collection('users')
	// 			.getOne('c70ks89ygyprufj', { fields: ['stat3'] });
	// 		const data = {
	// 			stat3: oldData.stat3 + 5123
	// 		};
	// 		await locals.pb.collection('users').update('c70ks89ygyprufj', data);
	// 	} catch (e) {
	// 		console.error(e);
	// 		throw e;
	// 	}
	// }
	// async function addStatType4(locals) {
	// 	try {
	// 		const oldData = await locals.pb
	// 			.collection('users')
	// 			.getOne('c70ks89ygyprufj', { fields: ['stat4'] });
	// 		const data = {
	// 			stat4: oldData.stat4 + 5123
	// 		};
	// 		await locals.pb.collection('users').update('c70ks89ygyprufj', data);
	// 	} catch (e) {
	// 		console.error(e);
	// 		throw e;
	// 	}
	// }
	// async function addStatType5(locals) {
	// 	try {
	// 		const oldData = await locals.pb
	// 			.collection('users')
	// 			.getOne('c70ks89ygyprufj', { fields: ['stat5'] });
	// 		const data = {
	// 			stat5: oldData.stat5 + 5123
	// 		};
	// 		await locals.pb.collection('users').update('c70ks89ygyprufj', data);
	// 	} catch (e) {
	// 		console.error(e);
	// 		throw e;
	// 	}
	// } -->
