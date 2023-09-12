import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const user = locals.user;

	const userData = await locals.pb.collection('users').getOne(user.id);

	return {
		userData
	};
};
