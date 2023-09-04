<script lang="ts">
	import { fade } from 'svelte/transition';
	import loadingImg from '../../src/static/loading.png';
	import { capitalize } from '$lib/stringUtils';
	export let breed: string;
	export let subBreeds: [] = [];

	let image: string;
	let loading = true;

	async function fetchImage() {
		loading = true;
		const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
		const json = await res.json();
		image = json.message;
		loading = false;
	}

	if (breed) {
		fetchImage();
	}
</script>

<div class="card" transition:fade>
	<div class="image-container">
		<div class="overlay">
			{#if subBreeds.length > 0}
				{#each subBreeds as subBreed}
					<span>{subBreed}</span>
				{/each}
			{/if}
		</div>
		{#if loading}
			<img src={loadingImg} alt={breed} />
		{:else}
			<a href="coming-soon.html">
				<img src={image} alt={breed} />
			</a>
		{/if}
	</div>
	<div class="text-container">
		<a href="coming-soon.html">
			<h2>
				{capitalize(breed)}
			</h2>
		</a>
	</div>
</div>

<style>
	div.card {
		width: 30%;
		justify-content: center;
		align-items: center;
		text-align: center;
		border: 2px solid black;
		background-color: #fff;
		border-radius: 5px;
		min-width: 300px;
		margin: 1rem;
	}

	img {
		width: 100%;
		height: 15em;
		-o-object-fit: cover;
		object-fit: cover;
		opacity: 1;
		transition: 0.3s ease;
		border-bottom: 2px solid black;
	}

	.image-container:hover img {
		opacity: 0.4; /* Full opacity on hover */
	}

	.overlay {
		display: none; /* Initially hidden */
		z-index: 1;
	}

	.image-container {
		position: relative;
	}

	.image-container:hover .overlay {
		display: flex; /* Show the overlay on hover */
		flex-direction: column;
		text-align: center;
		position: absolute; /* Position the text */
		justify-content: center;
		align-items: center;
		width: 100%; /* Full width (cover the whole image) */
		height: 100%; /* Full height (cover the whole image) */
	}
</style>
