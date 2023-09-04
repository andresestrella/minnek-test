import { describe, it, expect } from 'vitest';
import { capitalize } from '$lib/stringUtils';
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
