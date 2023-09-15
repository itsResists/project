import type { Handle } from '@sveltejs/kit';
import { pb } from './lib/pocketbase';


// const users = await pb.collection("users").getFullList();
// setInterval(function () {
// 	console.log(users)

// }, 30 * 1000);

// let number = 1;

// setInterval(function () {
// 	const newNumber = number++;
// 	console.log(newNumber)

// }, 1 * 1000);

export const handle: Handle = async ({ event, resolve }) => {
	//before

	pb.authStore.loadFromCookie(event.request.headers.get('cookie' || ''));
	if (pb.authStore.isValid) {
		try {
			await pb.collection('users').authRefresh();
		} catch (_) {
			pb.authStore.clear();
		}
	}

	event.locals.pb = pb;
	event.locals.user = structuredClone(pb.authStore.model);

	const response = await resolve(event);

	//after

	response.headers.set('set-cookie', pb.authStore.exportToCookie({ httpOnly: false }));

	return response;
};



