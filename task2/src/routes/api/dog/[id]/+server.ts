import { json } from '@sveltejs/kit';
import prisma from '$lib/prisma';

export async function GET({ params }): Promise<Response> {
	const id = params.id;
	const dog = await prisma.dog.findUnique({
		where: { id: Number(id) }
	});
	return json(dog);
}

export function PUT({ params, request }) {
	const { name, breed, img_base64 } = request.json();
	const updatedDog = prisma.dog.update({
		where: { id: Number(params.id) },
		data: {
			name: name,
			breed: breed,
			img_base64: img_base64
		}
	});
	return json(updatedDog);
}
export function DELETE({ params }) {
	const deletedDog = prisma.dog.delete({
		where: { id: Number(params.id) }
	});
	return json(deletedDog);
}
