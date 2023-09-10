// import type { Actions } from './$types'
// import { redirect } from '@sveltejs/kit'
// import { currentUser } from '$lib/pocketbase';

// //add 5 to stat1



export const actions: Actions = {
    default: async ({ locals}) => {
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
}