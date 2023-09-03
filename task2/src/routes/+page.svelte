<script lang="ts">
	import type { LayoutData } from './$types';
	import DogCard from './DogCard.svelte';

	export let data: LayoutData;
	const { breeds, subBreeds } = data;
	let offset = 0;
	let amountToLoad = 12;
	let selectedBreeds = breeds.slice(offset, offset + amountToLoad);

	function handleClicked() {
		offset += amountToLoad;
		if (offset > breeds.length) offset = breeds.length;
		selectedBreeds = breeds.slice(offset, offset + amountToLoad);
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="Kennim's Dogs" content="This site contains Kennim's favorite dogs" />
</svelte:head>

<h1>Kennim's doggo list</h1>
<div class="grid-container">
	{#each selectedBreeds as breed (breed)}
		<DogCard {breed} subBreeds={subBreeds[breed]} />
	{/each}
</div>

<div class="btn-container">
	{#if offset < breeds.length}
		<button class="btn btn-primary btn-lg" on:click={handleClicked}>More doggos</button>
	{/if}
</div>

<style>
	.grid-container {
		padding-bottom: 1rem;
		width: 100%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}

	.btn {
		border-radius: 5px;
		min-width: 300px;
		margin: 1rem;
		border-radius: 2px;
		cursor: pointer;
		font-weight: normal;
		text-align: center;
		vertical-align: middle;
		flex: 1;
	}

	.btn-lg {
		border-radius: 2px;
		font-size: 18px;
		line-height: 1.33333;
		padding: 10px 16px;
	}

	.btn-primary:hover {
		background-color: #fff;
		color: #152836;
	}

	.btn-primary {
		background-color: #152836;
		border-color: #0e1a24;
		color: #ffffff;
		transition: color 0.1s ease 0s, background-color 0.15s ease 0s;
	}

	.btn-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
