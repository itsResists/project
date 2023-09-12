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

<div>
	<p>Level: {data.userData.level}</p>
	<p>Experience: {data.userData.experience}</p>
	<p>Next Level:</p>
</div>
