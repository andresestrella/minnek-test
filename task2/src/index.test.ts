import { describe, it, expect } from 'vitest';
import { capitalize } from '$lib/stringUtils';
import prisma from '$lib/prisma';
// import { render, screen } from '@testing-library/svelte';

describe('sum test', () => {
	it('adds 1 + 2 to equal 3', () => {
		expect(1 + 2).toBe(3);
	});
});

describe('string utils', () => {
	it('capitalizes a string', () => {
		expect(capitalize('hello')).toBe('Hello');
	});
});

describe('api endpoints', () => {
	it('gets a dog', async () => {
		const dog = await prisma.dog.findUnique({
			where: { id: 1 }
		});
		expect(dog.name).toBe('Firulais');
	});
	it('gets all dogs', async () => {
		const allDogs = await prisma.dog.findMany();
		expect(allDogs.length).toBeGreaterThanOrEqual(1);
	});
	it('creates, updates and deletes a dog', async () => {
		const newDog = await prisma.dog.create({
			data: {
				name: 'Doggo',
				breed: 'Doggo',
				img_base64: 'imagine this is a base64 string'
			}
		});
		expect(newDog.name).toBe('Doggo');
		const updatedDog = await prisma.dog.update({
			where: { id: newDog.id },
			data: {
				name: 'Doggie',
				breed: 'Doggie',
				img_base64: 'imagine this is another base64 string'
			}
		});
		expect(updatedDog.name).toBe('Doggie');
		const deletedDog = await prisma.dog.delete({
			where: { id: newDog.id }
		});
		expect(deletedDog.name).toBe('Doggie');
	});
});
