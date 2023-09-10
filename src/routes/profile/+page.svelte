<script>
	import { currentUser, pb } from '$lib/pocketbase';

	async function addStatType1(locals) {
		try {
			const oldData = await locals.pb
				.collection('users')
				.getOne($currentUser.id, { fields: ['stat1'] });
			const data = {
				stat1: oldData.stat1 + 5123
			};
			await locals.pb.collection('users').update($currentUser.id, data);
		} catch (e) {
			console.error(e);
			throw e;
		}
	}
	async function addStatType2(locals) {
		try {
			const oldData2 = await locals.pb
				.collection('users')
				.getOne('c70ks89ygyprufj', { fields: ['stat2'] });
			const data2 = {
				stat2: oldData2.stat2 + 5123
			};
			await locals.pb.collection('users').update('c70ks89ygyprufj', data2);
		} catch (e) {
			console.error(e);
			throw e;
		}
	}
	async function addStatType3(locals) {
		try {
			const oldData = await locals.pb
				.collection('users')
				.getOne('c70ks89ygyprufj', { fields: ['stat3'] });
			const data = {
				stat3: oldData.stat3 + 5123
			};
			await locals.pb.collection('users').update('c70ks89ygyprufj', data);
		} catch (e) {
			console.error(e);
			throw e;
		}
	}
	async function addStatType4(locals) {
		try {
			const oldData = await locals.pb
				.collection('users')
				.getOne('c70ks89ygyprufj', { fields: ['stat4'] });
			const data = {
				stat4: oldData.stat4 + 5123
			};
			await locals.pb.collection('users').update('c70ks89ygyprufj', data);
		} catch (e) {
			console.error(e);
			throw e;
		}
	}
	async function addStatType5(locals) {
		try {
			const oldData = await locals.pb
				.collection('users')
				.getOne('c70ks89ygyprufj', { fields: ['stat5'] });
			const data = {
				stat5: oldData.stat5 + 5123
			};
			await locals.pb.collection('users').update('c70ks89ygyprufj', data);
		} catch (e) {
			console.error(e);
			throw e;
		}
	}
</script>

{#if $currentUser}
	<div>
		<p>Welcome back, {$currentUser.email}!</p>
	</div>
	<div>
		<p>Username: {$currentUser.id}</p>
	</div>
{:else}
	<div>
		<p>Not logged in</p>
	</div>
{/if}

<div>
	Stat1: {$currentUser?.stat1}
</div>
<div>
	Stat2: {$currentUser?.stat2}
</div>
<div>
	Stat3: {$currentUser?.stat3}
</div>
<div>
	Stat4: {$currentUser?.stat4}
</div>
<div>
	Stat5: {$currentUser?.stat5}
</div>
<form method="post">
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
</form>
