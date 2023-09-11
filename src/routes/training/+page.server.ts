import type { Actions } from './$types';

export const load = async ({ locals }) => {
	const user = locals.user;
	const userData = await locals.pb.collection('users').getOne(user.id);
	return {
		userData
	};
};


let rank = 3;

const statCap = Math.pow(rank + 1, 2) * 10000; //! Make stat cap variable based on current Rank.

// const energyCap = Math.pow((rank+1), 2) * 10
const energyCap = 1000;

export const actions: Actions = {
	offense: async ({ locals, request }) => {
		try {
			const user = locals.user;

			const energyData = Object.fromEntries(await request.formData()) as unknown as {
				energySpent: number;
			};
			const energySpent2 = (energyData.energySpent)
			const trainingAmount = energySpent2 as unknown as number * 10
			const energyGain = trainingAmount * 0.01;
			const oldData = await locals.pb.collection('users').getOne(user.id, { fields: ['offense'] });
			const oldEnergy = await locals.pb.collection('users').getOne(user.id, { fields: ['energy'] });
			const oldMaxEnergy = await locals.pb
				.collection('users')
				.getOne(user.id, { fields: ['maxEnergy'] });
			if (oldEnergy.energy < 1) {
				return { noEnergy: true };
			}

			if (oldData.offense >= statCap) {
			//! If the stat is already at the cap, set the stat to the cap and dont take energy.
				const data = {
					offense: statCap
				};
				await locals.pb.collection('users').update(user?.id, data);
				return { statCap: true };
			} else if (oldData.offense + trainingAmount >= statCap) {
				//! If the training result is greater than the stat cap, set the stat to the cap but still take energy.
				const data = {
					offense: statCap,
					energy: oldEnergy.energy - energySpent2
				};
				await locals.pb.collection('users').update(user?.id, data);

			} else if (oldMaxEnergy.maxEnergy + energyGain >= 1000) {
				//! If the energy result is greater than the energy cap, set the energy to the cap.
				const data = {
					offense: oldData.offense + trainingAmount,
					energy: oldEnergy.energy - energySpent2,
					maxEnergy: 1000
				};
				await locals.pb.collection('users').update(user?.id, data);
				return { success: false };
			} else if (oldMaxEnergy.maxEnergy + energyGain <= energyCap) {
				//! If the energy result is less than the energy cap, grant max energy.
				const data = {
					maxEnergy: oldMaxEnergy.maxEnergy + energyGain
				};
				await locals.pb.collection('users').update(user?.id, data);
			}
			const data = {
				offense: oldData.offense + trainingAmount,
				energy: oldEnergy.energy - energySpent2
			};
			await locals.pb.collection('users').update(user.id, data);
			return { success: true };
			// console.log(oldData);
			console.log(energyData)
			console.log(energyGain)
		} catch (e) {
			console.error(e);
			throw e;
		}
	},
	defense: async ({ locals, request }) => {
		try {
			const user = locals.user;

			const energyData = Object.fromEntries(await request.formData()) as unknown as {
				energySpent: number;
			};
			const energySpent2 = (energyData.energySpent)
			const trainingAmount = energySpent2 as unknown as number * 10
			const energyGain = trainingAmount * 0.01;
			const oldData = await locals.pb.collection('users').getOne(user.id, { fields: ['defense'] });
			const oldEnergy = await locals.pb.collection('users').getOne(user.id, { fields: ['energy'] });
			const oldMaxEnergy = await locals.pb
				.collection('users')
				.getOne(user.id, { fields: ['maxEnergy'] });
			if (oldEnergy.energy < 1) {
				return { noEnergy: true };
			}

			if (oldData.defense >= statCap) {
			//! If the stat is already at the cap, set the stat to the cap and dont take energy.
				const data = {
					defense: statCap
				};
				await locals.pb.collection('users').update(user?.id, data);
				return { statCap: true };
			} else if (oldData.defense + trainingAmount >= statCap) {
				//! If the training result is greater than the stat cap, set the stat to the cap but still take energy.
				const data = {
					defense: statCap,
					energy: oldEnergy.energy - energySpent2
				};
				await locals.pb.collection('users').update(user?.id, data);

			} else if (oldMaxEnergy.maxEnergy + energyGain >= 1000) {
				//! If the energy result is greater than the energy cap, set the energy to the cap.
				const data = {
					defense: oldData.defense + trainingAmount,
					energy: oldEnergy.energy - energySpent2,
					maxEnergy: 1000
				};
				await locals.pb.collection('users').update(user?.id, data);
				return { success: false };
			} else if (oldMaxEnergy.maxEnergy + energyGain <= energyCap) {
				//! If the energy result is less than the energy cap, grant max energy.
				const data = {
					maxEnergy: oldMaxEnergy.maxEnergy + energyGain
				};
				await locals.pb.collection('users').update(user?.id, data);
			}
			const data = {
				defense: oldData.defense + trainingAmount,
				energy: oldEnergy.energy - energySpent2
			};
			await locals.pb.collection('users').update(user.id, data);
			return { success: true };
			// console.log(oldData);
			console.log(energyData)
			console.log(energyGain)
		} catch (e) {
			console.error(e);
			throw e;
		}
	},
	speed: async ({ locals, request }) => {
		try {
			const user = locals.user;

			const energyData = Object.fromEntries(await request.formData()) as unknown as {
				energySpent: number;
			};
			const energySpent2 = (energyData.energySpent)
			const trainingAmount = energySpent2 as unknown as number * 10
			const energyGain = trainingAmount * 0.01;
			const oldData = await locals.pb.collection('users').getOne(user.id, { fields: ['speed'] });
			const oldEnergy = await locals.pb.collection('users').getOne(user.id, { fields: ['energy'] });
			const oldMaxEnergy = await locals.pb
				.collection('users')
				.getOne(user.id, { fields: ['maxEnergy'] });
			if (oldEnergy.energy < 1) {
				return { noEnergy: true };
			}

			if (oldData.speed >= statCap) {
			//! If the stat is already at the cap, set the stat to the cap and dont take energy.
				const data = {
					speed: statCap
				};
				await locals.pb.collection('users').update(user?.id, data);
				return { statCap: true };
			} else if (oldData.speed + trainingAmount >= statCap) {
				//! If the training result is greater than the stat cap, set the stat to the cap but still take energy.
				const data = {
					speed: statCap,
					energy: oldEnergy.energy - energySpent2
				};
				await locals.pb.collection('users').update(user?.id, data);

			} else if (oldMaxEnergy.maxEnergy + energyGain >= 1000) {
				//! If the energy result is greater than the energy cap, set the energy to the cap.
				const data = {
					speed: oldData.speed + trainingAmount,
					energy: oldEnergy.energy - energySpent2,
					maxEnergy: 1000
				};
				await locals.pb.collection('users').update(user?.id, data);
				return { success: false };
			} else if (oldMaxEnergy.maxEnergy + energyGain <= energyCap) {
				//! If the energy result is less than the energy cap, grant max energy.
				const data = {
					maxEnergy: oldMaxEnergy.maxEnergy + energyGain
				};
				await locals.pb.collection('users').update(user?.id, data);
			}
			const data = {
				speed: oldData.speed + trainingAmount,
				energy: oldEnergy.energy - energySpent2
			};
			await locals.pb.collection('users').update(user.id, data);
			return { success: true };
			// console.log(oldData);
			console.log(energyData)
			console.log(energyGain)
		} catch (e) {
			console.error(e);
			throw e;
		}
	},	
	strength: async ({ locals, request }) => {
		try {
			const user = locals.user;

			const energyData = Object.fromEntries(await request.formData()) as unknown as {
				energySpent: number;
			};
			const energySpent2 = (energyData.energySpent)
			const trainingAmount = energySpent2 as unknown as number * 10
			const energyGain = trainingAmount * 0.01;
			const oldData = await locals.pb.collection('users').getOne(user.id, { fields: ['strength'] });
			const oldEnergy = await locals.pb.collection('users').getOne(user.id, { fields: ['energy'] });
			const oldMaxEnergy = await locals.pb
				.collection('users')
				.getOne(user.id, { fields: ['maxEnergy'] });
			if (oldEnergy.energy < 1) {
				return { noEnergy: true };
			}

			if (oldData.strength >= statCap) {
			//! If the stat is already at the cap, set the stat to the cap and dont take energy.
				const data = {
					strength: statCap
				};
				await locals.pb.collection('users').update(user?.id, data);
				return { statCap: true };
			} else if (oldData.strength + trainingAmount >= statCap) {
				//! If the training result is greater than the stat cap, set the stat to the cap but still take energy.
				const data = {
					strength: statCap,
					energy: oldEnergy.energy - energySpent2
				};
				await locals.pb.collection('users').update(user?.id, data);

			} else if (oldMaxEnergy.maxEnergy + energyGain >= 1000) {
				//! If the energy result is greater than the energy cap, set the energy to the cap.
				const data = {
					strength: oldData.strength + trainingAmount,
					energy: oldEnergy.energy - energySpent2,
					maxEnergy: 1000
				};
				await locals.pb.collection('users').update(user?.id, data);
				return { success: false };
			} else if (oldMaxEnergy.maxEnergy + energyGain <= energyCap) {
				//! If the energy result is less than the energy cap, grant max energy.
				const data = {
					maxEnergy: oldMaxEnergy.maxEnergy + energyGain
				};
				await locals.pb.collection('users').update(user?.id, data);
			}
			const data = {
				strength: oldData.strength + trainingAmount,
				energy: oldEnergy.energy - energySpent2
			};
			await locals.pb.collection('users').update(user.id, data);
			return { success: true };
			// console.log(oldData);
			console.log(energyData)
			console.log(energyGain)
		} catch (e) {
			console.error(e);
			throw e;
		}
	},
	willpower: async ({ locals, request }) => {
		try {
			const user = locals.user;

			const energyData = Object.fromEntries(await request.formData()) as unknown as {
				energySpent: number;
			};
			const energySpent2 = (energyData.energySpent)
			const trainingAmount = energySpent2 as unknown as number * 10
			const energyGain = trainingAmount * 0.01;
			const oldData = await locals.pb.collection('users').getOne(user.id, { fields: ['willpower'] });
			const oldEnergy = await locals.pb.collection('users').getOne(user.id, { fields: ['energy'] });
			const oldMaxEnergy = await locals.pb
				.collection('users')
				.getOne(user.id, { fields: ['maxEnergy'] });
			if (oldEnergy.energy < 1) {
				return { noEnergy: true };
			}

			if (oldData.willpower >= statCap) {
			//! If the stat is already at the cap, set the stat to the cap and dont take energy.
				const data = {
					willpower: statCap
				};
				await locals.pb.collection('users').update(user?.id, data);
				return { statCap: true };
			} else if (oldData.willpower + trainingAmount >= statCap) {
				//! If the training result is greater than the stat cap, set the stat to the cap but still take energy.
				const data = {
					willpower: statCap,
					energy: oldEnergy.energy - energySpent2
				};
				await locals.pb.collection('users').update(user?.id, data);

			} else if (oldMaxEnergy.maxEnergy + energyGain >= 1000) {
				//! If the energy result is greater than the energy cap, set the energy to the cap.
				const data = {
					willpower: oldData.willpower + trainingAmount,
					energy: oldEnergy.energy - energySpent2,
					maxEnergy: 1000
				};
				await locals.pb.collection('users').update(user?.id, data);
				return { success: false };
			} else if (oldMaxEnergy.maxEnergy + energyGain <= energyCap) {
				//! If the energy result is less than the energy cap, grant max energy.
				const data = {
					maxEnergy: oldMaxEnergy.maxEnergy + energyGain
				};
				await locals.pb.collection('users').update(user?.id, data);
			}
			const data = {
				willpower: oldData.willpower + trainingAmount,
				energy: oldEnergy.energy - energySpent2
			};
			await locals.pb.collection('users').update(user.id, data);
			return { success: true };
			// console.log(oldData);
			console.log(energyData)
			console.log(energyGain)
		} catch (e) {
			console.error(e);
			throw e;
		}
	},	
	intelligence: async ({ locals, request }) => {
		try {
			const user = locals.user;

			const energyData = Object.fromEntries(await request.formData()) as unknown as {
				energySpent: number;
			};
			const energySpent2 = (energyData.energySpent)
			const trainingAmount = energySpent2 as unknown as number * 10
			const energyGain = trainingAmount * 0.01;
			const oldData = await locals.pb.collection('users').getOne(user.id, { fields: ['intelligence'] });
			const oldEnergy = await locals.pb.collection('users').getOne(user.id, { fields: ['energy'] });
			const oldMaxEnergy = await locals.pb
				.collection('users')
				.getOne(user.id, { fields: ['maxEnergy'] });
			if (oldEnergy.energy < 1) {
				return { noEnergy: true };
			}

			if (oldData.intelligence >= statCap) {
			//! If the stat is already at the cap, set the stat to the cap and dont take energy.
				const data = {
					intelligence: statCap
				};
				await locals.pb.collection('users').update(user?.id, data);
				return { statCap: true };
			} else if (oldData.intelligence + trainingAmount >= statCap) {
				//! If the training result is greater than the stat cap, set the stat to the cap but still take energy.
				const data = {
					intelligence: statCap,
					energy: oldEnergy.energy - energySpent2
				};
				await locals.pb.collection('users').update(user?.id, data);

			} else if (oldMaxEnergy.maxEnergy + energyGain >= 1000) {
				//! If the energy result is greater than the energy cap, set the energy to the cap.
				const data = {
					intelligence: oldData.intelligence + trainingAmount,
					energy: oldEnergy.energy - energySpent2,
					maxEnergy: 1000
				};
				await locals.pb.collection('users').update(user?.id, data);
				return { success: false };
			} else if (oldMaxEnergy.maxEnergy + energyGain <= energyCap) {
				//! If the energy result is less than the energy cap, grant max energy.
				const data = {
					maxEnergy: oldMaxEnergy.maxEnergy + energyGain
				};
				await locals.pb.collection('users').update(user?.id, data);
			}
			const data = {
				intelligence: oldData.intelligence + trainingAmount,
				energy: oldEnergy.energy - energySpent2
			};
			await locals.pb.collection('users').update(user.id, data);
			return { success: true };
			// console.log(oldData);
			console.log(energyData)
			console.log(energyGain)
		} catch (e) {
			console.error(e);
			throw e;
		}
	},
	chakra_control: async ({ locals, request }) => {
		try {
			const user = locals.user;

			const energyData = Object.fromEntries(await request.formData()) as unknown as {
				energySpent: number;
			};
			const energySpent2 = (energyData.energySpent)
			const trainingAmount = energySpent2 as unknown as number * 10
			const energyGain = trainingAmount * 0.01;
			const oldData = await locals.pb.collection('users').getOne(user.id, { fields: ['chakra_control'] });
			const oldEnergy = await locals.pb.collection('users').getOne(user.id, { fields: ['energy'] });
			const oldMaxEnergy = await locals.pb
				.collection('users')
				.getOne(user.id, { fields: ['maxEnergy'] });
			if (oldEnergy.energy < 1) {
				return { noEnergy: true };
			}

			if (oldData.chakra_control >= statCap) {
			//! If the stat is already at the cap, set the stat to the cap and dont take energy.
				const data = {
					chakra_control: statCap
				};
				await locals.pb.collection('users').update(user?.id, data);
				return { statCap: true };
			} else if (oldData.chakra_control + trainingAmount >= statCap) {
				//! If the training result is greater than the stat cap, set the stat to the cap but still take energy.
				const data = {
					chakra_control: statCap,
					energy: oldEnergy.energy - energySpent2
				};
				await locals.pb.collection('users').update(user?.id, data);

			} else if (oldMaxEnergy.maxEnergy + energyGain >= 1000) {
				//! If the energy result is greater than the energy cap, set the energy to the cap.
				const data = {
					chakra_control: oldData.chakra_control + trainingAmount,
					energy: oldEnergy.energy - energySpent2,
					maxEnergy: 1000
				};
				await locals.pb.collection('users').update(user?.id, data);
				return { success: false };
			} else if (oldMaxEnergy.maxEnergy + energyGain <= energyCap) {
				//! If the energy result is less than the energy cap, grant max energy.
				const data = {
					maxEnergy: oldMaxEnergy.maxEnergy + energyGain
				};
				await locals.pb.collection('users').update(user?.id, data);
			}
			const data = {
				chakra_control: oldData.chakra_control + trainingAmount,
				energy: oldEnergy.energy - energySpent2
			};
			await locals.pb.collection('users').update(user.id, data);
			return { success: true };
			// console.log(oldData);
			console.log(energyData)
			console.log(energyGain)
		} catch (e) {
			console.error(e);
			throw e;
		}
	},
};
