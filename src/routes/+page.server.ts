import { redirect } from '@sveltejs/kit';

export const load = async (data) => {
	if (!data.cookies.get('session-test')) {
		redirect(303, '/login');
	}
};

