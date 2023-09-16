import { pb } from '$lib/pocketbase.js';
import type { Actions } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const user = locals.user;
	const userData = await locals.pb.collection('users').getOne(user?.id);
	if (userData?.type === 'ninjutsu') {
		const results = await pb.collection('jutsu').getList(1, 50, {
			filter: 'type = "ninjutsu" '
		});

		const info = results.items;
		console.log('resultList', results);
		return {
			info
		};
	} else if (userData?.type === 'genjutsu') {
		const results = await pb.collection('jutsu').getList(1, 50, {
			filter: 'type = "genjutsu" '
		});
		const info = results.items;
		console.log('resultList', results);
		return {
			info
		};
	} else if (userData?.type === 'taijutsu') {
		const results = await pb.collection('jutsu').getList(1, 50, {
			filter: 'type = "taijutsu" '
		});
		const info = results.items;
		// console.log('resultList', results);
		return {
			info
		};
	} else if (userData?.type === 'bukijutsu') {
		const results = await pb.collection('jutsu').getList(1, 50, {
			filter: 'type = "bukijutsu" '
		});
		const info = results.items;
		console.log('resultList', results);
		return {
			info
		};
	}
};

export const actions: Actions = {
	jutsu: async ({ request }) => {
		try {
			const jutsuData = Object.fromEntries(await request.formData()) as unknown as {
				jutsuID: number;
				name: string;
			};
			console.log(jutsuData);
		} catch (error) {
			console.log(error);
		}
	}
};
