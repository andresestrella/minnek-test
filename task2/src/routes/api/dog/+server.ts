import { json } from '@sveltejs/kit';
import prisma from '$lib/prisma';

export async function GET(): Promise<Response> {
	const allDogs = await prisma.dog.findMany();
	return new Response(JSON.stringify(allDogs), {
		headers: { 'content-type': 'application/json' }
	});
}

export function POST({ request }) {
	const { name, breed, img_base64 } = request.json();
	const newDog = prisma.dog.create({
		data: {
			name: name,
			breed: breed,
			img_base64: img_base64
		}
	});
	return json(newDog);
}
