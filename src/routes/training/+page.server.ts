import type { Actions } from './$types';

export const load = async ({ locals }) => {
	const user = locals.user;
	console.log(locals.user);
	const userData = await locals.pb.collection('users').getOne(user.id);
	return {
		userData
	};
};

const energyCost = 10;

const trainingAmount = 5123;

const energyGain = trainingAmount * .01

let rank = 3;



const statCap = Math.pow((rank + 1), 2) * 10000	 //! Make stat cap variable based on current Rank.

// const energyCap = Math.pow((rank+1), 2) * 10
const energyCap = 1000


export const actions: Actions = {
	offense: async ({ locals }) => {
		try {
			const user = locals.user;
			const oldData = await locals.pb.collection('users').getOne(user.id, { fields: ['offense'] });
			const oldEnergy = await locals.pb.collection('users').getOne(user.id, { fields: ['energy'] });
			const oldMaxEnergy = await locals.pb.collection('users').getOne(user.id, { fields: ['maxEnergy'] });
			if (oldEnergy.energy < energyCost) {
				return { success: false };
			}

			if (oldData.offense >= statCap) { //! If the stat is already at the cap, set the stat to the cap and dont take energy.
				const data = {
					offense: statCap
				};
				await locals.pb.collection('users').update(user?.id, data);
				return { success: true };
			} else if (oldData.offense + trainingAmount >= statCap) { //! If the training result is greater than the stat cap, set the stat to the cap but still take energy.
				const data = {
					offense: statCap,
					energy: oldEnergy.energy - energyCost
				};
				await locals.pb.collection('users').update(user?.id, data);
				return { success: true };
			}
			if (oldMaxEnergy.energy >= energyCap) { //! If the energy result is greater than the energy cap, set the energy to the cap.
				const data = {
					offense: oldData.offense + trainingAmount,
					energy: oldEnergy.energy - energyCost,
					maxEnergy: energyCap
				};
				await locals.pb.collection('users').update(user?.id, data);

			} else { //! If the energy result is less than the energy cap, set the energy to the result.
				const data = {
					offense: oldData.offense + trainingAmount,
					energy: oldEnergy.energy - energyCost,
					maxEnergy: oldMaxEnergy.maxEnergy + energyGain
				};


				await locals.pb.collection('users').update(user.id, data);
			}
			console.log(oldData);
		} catch (e) {
			console.error(e);
			throw e;
		}
	},

	defense: async ({ locals }) => {
		try {
			const user = locals.user;
			const oldData = await locals.pb.collection('users').getOne(user.id, { fields: ['defense'] });
			const oldEnergy = await locals.pb.collection('users').getOne(user.id, { fields: ['energy'] });
			const oldMaxEnergy = await locals.pb.collection('users').getOne(user.id, { fields: ['maxEnergy'] });
			if (oldEnergy.energy < energyCost) {
				return { success: false };
			}

			if (oldData.defense >= statCap) {
				const data = {
					defense: statCap
				};
				await locals.pb.collection('users').update(user.id, data);
				return { success: true };
			}
			if (oldData.defense + trainingAmount >= statCap) {
				const data = {
					defense: statCap,
					energy: oldEnergy.energy - energyCost
				};
				await locals.pb.collection('users').update(user.id, data);
				return { success: true };
			}
			const data = {
				defense: oldData.defense + trainingAmount,
				energy: oldEnergy.energy - energyCost,
				maxEnergy: oldMaxEnergy.maxEnergy + energyGain
			};
			await locals.pb.collection('users').update(user.id, data);
			console.log(oldData);
		} catch (e) {
			console.error(e);
			throw e;
		}
	},
	speed: async ({ locals }) => {
		try {
			const user = locals.user;
			const oldData = await locals.pb.collection('users').getOne(user.id, { fields: ['speed'] });
			const oldEnergy = await locals.pb.collection('users').getOne(user.id, { fields: ['energy'] });
			const oldMaxEnergy = await locals.pb.collection('users').getOne(user.id, { fields: ['maxEnergy'] });
			if (oldEnergy.energy < energyCost) {
				return { success: false };
			}

			if (oldData.speed >= statCap) {
				const data = {
					speed: statCap
				};
				await locals.pb.collection('users').update(user.id, data);
				return { success: true };
			}
			if (oldData.speed + trainingAmount >= statCap) {
				const data = {
					speed: statCap,
					energy: oldEnergy.energy - energyCost
				};
				await locals.pb.collection('users').update(user.id, data);
				return { success: true };
			}
			const data = {
				speed: oldData.speed + trainingAmount,
				energy: oldEnergy.energy - energyCost,
				maxEnergy: oldMaxEnergy.maxEnergy + energyGain
			};
			await locals.pb.collection('users').update(user.id, data);
			console.log(oldData);
		} catch (e) {
			console.error(e);
			throw e;
		}
	},
	strength: async ({ locals }) => {
		try {
			const user = locals.user;
			const oldData = await locals.pb.collection('users').getOne(user.id, { fields: ['strength'] });
			const oldEnergy = await locals.pb.collection('users').getOne(user.id, { fields: ['energy'] });
			const oldMaxEnergy = await locals.pb.collection('users').getOne(user.id, { fields: ['maxEnergy'] });
			if (oldEnergy.energy < energyCost) {
				return { success: false };
			}

			if (oldData.strength >= statCap) {
				const data = {
					strength: statCap
				};
				await locals.pb.collection('users').update(user.id, data);
				return { success: true };
			}
			if (oldData.strength + trainingAmount >= statCap) {
				const data = {
					strength: statCap,
					energy: oldEnergy.energy - energyCost
				};
				await locals.pb.collection('users').update(user.id, data);
				return { success: true };
			}
			const data = {
				strength: oldData.strength + trainingAmount,
				energy: oldEnergy.energy - energyCost,
				maxEnergy: oldMaxEnergy.maxEnergy + energyGain
			};
			await locals.pb.collection('users').update(user.id, data);
			console.log(oldData);
		} catch (e) {
			console.error(e);
			throw e;
		}
	},
	willpower: async ({ locals }) => {
		try {
			const user = locals.user;
			const oldData = await locals.pb.collection('users').getOne(user.id, { fields: ['willpower'] });
			const oldEnergy = await locals.pb.collection('users').getOne(user.id, { fields: ['energy'] });
			const oldMaxEnergy = await locals.pb.collection('users').getOne(user.id, { fields: ['maxEnergy'] });
			if (oldEnergy.energy < energyCost) {
				return { success: false };
			}

			if (oldData.willpower >= statCap) {
				const data = {
					willpower: statCap
				};
				await locals.pb.collection('users').update(user.id, data);
				return { success: true };
			}
			if (oldData.willpower + trainingAmount >= statCap) {
				const data = {
					willpower: statCap,
					energy: oldEnergy.energy - energyCost
				};
				await locals.pb.collection('users').update(user.id, data);
				return { success: true };
			}
			const data = {
				willpower: oldData.willpower + trainingAmount,
				energy: oldEnergy.energy - energyCost,
				maxEnergy: oldMaxEnergy.maxEnergy + energyGain
			};
			await locals.pb.collection('users').update(user.id, data);
			console.log(oldData);
		} catch (e) {
			console.error(e);
			throw e;
		}
	},
	intelligence: async ({ locals }) => {
		try {
			const user = locals.user;
			const oldData = await locals.pb.collection('users').getOne(user.id, { fields: ['intelligence'] });
			const oldEnergy = await locals.pb.collection('users').getOne(user.id, { fields: ['energy'] });
			const oldMaxEnergy = await locals.pb.collection('users').getOne(user.id, { fields: ['maxEnergy'] });
			if (oldEnergy.energy < energyCost) {
				return { success: false };
			}

			if (oldData.intelligence >= statCap) {
				const data = {
					intelligence: statCap
				};
				await locals.pb.collection('users').update(user.id, data);
				return { success: true };
			}
			if (oldData.intelligence + trainingAmount >= statCap) {
				const data = {
					intelligence: statCap,
					energy: oldEnergy.energy - energyCost
				};
				await locals.pb.collection('users').update(user.id, data);
				return { success: true };
			}
			const data = {
				intelligence: oldData.intelligence + trainingAmount,
				energy: oldEnergy.energy - energyCost,
				maxEnergy: oldMaxEnergy.maxEnergy + energyGain
			};
			await locals.pb.collection('users').update(user.id, data);
			console.log(oldData);
		} catch (e) {
			console.error(e);
			throw e;
		}
	},
	chakra_control: async ({ locals }) => {
		try {
			const user = locals.user;
			const oldData = await locals.pb.collection('users').getOne(user.id, { fields: ['chakra_control'] });
			const oldEnergy = await locals.pb.collection('users').getOne(user.id, { fields: ['energy'] });
			const oldMaxEnergy = await locals.pb.collection('users').getOne(user.id, { fields: ['maxEnergy'] });
			if (oldEnergy.energy < energyCost) {
				return { success: false };
			}

			if (oldData.chakra_control >= statCap) {
				const data = {
					chakra_control: statCap
				};
				await locals.pb.collection('users').update(user.id, data);
				return { success: true };
			}
			if (oldData.chakra_control + trainingAmount >= statCap) {
				const data = {
					chakra_control: statCap,
					energy: oldEnergy.energy - energyCost
				};
				await locals.pb.collection('users').update(user.id, data);
				return { success: true };
			}
			const data = {
				chakra_control: oldData.chakra_control + trainingAmount,
				energy: oldEnergy.energy - energyCost,
				maxEnergy: oldMaxEnergy.maxEnergy + energyGain
			};
			await locals.pb.collection('users').update(user.id, data);
			console.log(oldData);
		} catch (e) {
			console.error(e);
			throw e;
		}
	}
};
