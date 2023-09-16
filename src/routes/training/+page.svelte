<script>
	import { enhance } from '$app/forms';
	export let data;
	export let form;
	import { Slider } from 'fluent-svelte';
	let value = 1;
</script>

<body>
	<div class="text-4xl font-bold">
		<h1>Training</h1>
	</div>
	<div class="training">
		<div>
			Offense: {data.userData.offense}
		</div>
		<div>
			Defense: {data.userData.defense}
		</div>
		<div>
			Speed: {data.userData.speed}
		</div>
		<div>
			Strength: {data.userData.strength}
		</div>
		<div>
			Willpower: {data.userData.willpower}
		</div>
		<div>
			Intelligence: {data.userData.intelligence}
		</div>
		<div>
			Chakra Control: {data.userData.chakra_control}
		</div>
		<div>
			Experience: {data.userData.experience}
		</div>
	</div>

	{#if form?.noEnergy === true}
		<p class="text-red-600 text-lg font-semibold">
			You do not have enough energy to train! Please return later.
		</p>
	{:else if form?.statCap === true}
		<p class="text-green-600 text-lg font-semibold">You are at cap!</p>
	{:else if form?.success === true}
		<p class="text-green-600 text-lg font-semibold">
			You have gained {form?.results * 0.5} in the corresponding stat, {form?.results * 5} experience
			and
			{form?.results * 0.1} total energy
		</p>
	{:else if form?.success === false}
		<p class="text-green-600 text-lg font-semibold">
			You have gained {form?.results * 0.5} stat and {form?.results * 5} experience
		</p>
	{/if}
	<div>
		<div class="training">
			<p>
				Training is a way to increase your stats. Training consumes energy and you will need to wait
				to recharge your energy before you can train again.
				<br />
				________________________________________________________________________
				<br />
				<br />
				You will gain 1 stat per energy spent.
				<br />
				<span>Current Energy: {data.userData.energy} / {data.userData.maxEnergy}</span>
			</p>
		</div>

		<div class="btnDiv">
			<form method="post" use:enhance>
				<div class="training">
					<div>Adjust the slider below to choose how much energy you want to spend.</div>
					<br />
					<div class="flex">
						<span>1</span>
						<div class="w-full items-center justify-center">
							<Slider
								bind:value
								min={1}
								max={data.userData.energy}
								id="energySpent"
								name="energySpent"
							/>
						</div>
						<span>{data.userData.energy}</span>
					</div>
					<div class="flex items-center justify-center">
						{value} Energy
					</div>
				</div>

				<button name="energySpent" {value} class="btn" formaction="?/offense"> Offense </button>
				<button name="energySpent" {value} class="btn" formaction="?/defense"> Defense </button>
				<button name="energySpent" {value} class="btn" formaction="?/speed">Speed </button>
				<button name="energySpent" {value} class="btn" formaction="?/strength">Strength </button>
				<button name="energySpent" {value} class="btn" formaction="?/willpower">Willpower </button>
				<div class="btnDiv">
					<button class="btn" name="energySpent" {value} formaction="?/intelligence"
						>Intelligence
					</button>
					<button class="btn" name="energySpent" {value} formaction="?/chakra_control"
						>Chakra Control
					</button>
				</div>
			</form>
		</div>
	</div>
</body>

<style>
	.training {
		margin: 10px;
		border: 1px solid black;
	}

	p {
		margin: 20px;
	}

	.btn {
		border: 1px solid black;
		margin: 4px;
	}

	.btnDiv {
		display: flex;
		justify-content: center;
	}
</style>
