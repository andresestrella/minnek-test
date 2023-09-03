import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ fetch }) => {
	try {
		const res = await fetch('https://dog.ceo/api/breeds/list/all');
		if (!res.ok) {
			throw new Error(`Unexpected response ${res.statusText}`);
		}
		const json = await res.json();
		const breeds = Object.keys(json.message);
		const subBreeds = json.message;

		return { breeds, subBreeds };
	} catch (err) {
		console.error(err);
		throw err;
	}
};
