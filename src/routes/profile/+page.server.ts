import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const user = locals.user;
	if (!locals.user) {
		throw redirect(307, '/login');
	}

	const userData = await locals.pb.collection('users').getOne(user.id);

	return {
		userData
	};
};

export const actions: Actions = {
	stat1: async ({ locals }) => {
		try {
			const user = locals.user;
			const oldData = await locals.pb.collection('users').getOne(user.id, { fields: ['stat1'] });
			const data = {
				stat1: oldData.stat1 + 5123
			};
			await locals.pb.collection('users').update(user.id, data);
		} catch (e) {
			console.error(e);
			throw e;
		}
	},
	stat2: async ({ locals }) => {
		try {
			const user = locals.user;
			const oldData = await locals.pb.collection('users').getOne(user.id, { fields: ['stat2'] });
			const data = {
				stat2: oldData.stat2 + 5123
			};
			await locals.pb.collection('users').update(user.id, data);
		} catch (e) {
			console.error(e);
			throw e;
		}
	},
	stat3: async ({ locals }) => {
		try {
			const user = locals.user;
			const oldData = await locals.pb.collection('users').getOne(user.id, { fields: ['stat3'] });
			const data = {
				stat3: oldData.stat3 + 5123
			};
			await locals.pb.collection('users').update(user.id, data);
		} catch (e) {
			console.error(e);
			throw e;
		}
	},
	stat4: async ({ locals }) => {
		try {
			const user = locals.user;
			const oldData = await locals.pb.collection('users').getOne(user.id, { fields: ['stat4'] });
			const data = {
				stat4: oldData.stat4 + 5123
			};
			await locals.pb.collection('users').update(user.id, data);
		} catch (e) {
			console.error(e);
			throw e;
		}
	},
	stat5: async ({ locals }) => {
		try {
			const user = locals.user;
			const oldData = await locals.pb.collection('users').getOne(user.id, { fields: ['stat5'] });
			const data = {
				stat5: oldData.stat5 + 5123
			};
			await locals.pb.collection('users').update(user.id, data);
		} catch (e) {
			console.error(e);
			throw e;
		}
	}
};
