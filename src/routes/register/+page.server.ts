import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ locals, request }) => {
		const data = Object.fromEntries(await request.formData()) as {
			username: string;
			password: string;
			passwordConfirm: string;
			email: string;
		};
		const newUserData = {
			username: data.username,
			password: data.password,
			passwordConfirm: data.passwordConfirm,
			email: data.email,
			village: '',
			rank: 0,
			level: 1,
			experience: 0,
			health: 100,
			maxHealth: 100,
			energy: 100,
			maxEnergy: 100,
			chakra: 100,
			maxChakra: 100,
			bloodline: 0,
			offense: 10,
			defense: 10,
			speed: 10,
			strength: 10,
			willpower: 10,
			intelligence: 10,
			chakra_control: 10
		};
		try {
			await locals.pb.collection('users').create(newUserData);
			await locals.pb.collection('users').authWithPassword(data.username, data.password);
		} catch (e) {
			console.error(e);
			throw e;
		}

		throw redirect(303, '/');
	}
};
