<script lang="ts">
	import Grid from 'gridjs-svelte';
	import type { LayoutData } from '../$types';
	import { RowSelection } from 'gridjs/plugins/selection';
	import { PluginPosition } from 'gridjs';
	// import type Gridjs from 'gridjs-svelte/gridjs.svelte';

	export let data: LayoutData;
	const { breeds, subBreeds } = data;
	// need to format data for gridjs
	let dogs = breeds.map((breed) => {
		const subBreed = subBreeds[breed];
		return {
			breed,
			subBreed: subBreed ? subBreed.join(', ') : ''
		};
	});

	let prefix = '';
	let breedInput = '';
	let subBreedInput = '';
	let i = 0;

	$: filteredDogs = prefix
		? dogs.filter((dog) => {
				const name = `${dog.subBreed}, ${dog.breed}`;
				return name.toLowerCase().startsWith(prefix.toLowerCase());
		  })
		: dogs;

	$: selected = filteredDogs[i];

	$: reset_inputs(selected);

	function create() {
		dogs = dogs.concat({ breed: breedInput, subBreed: subBreedInput });
		i = dogs.length - 1;
		breedInput = subBreedInput = '';
	}

	function update() {
		selected.breed = breedInput;
		selected.subBreed = subBreedInput;
		dogs = dogs;
	}

	function remove() {
		// Remove selected dog from the source array (dogs), not the filtered array
		const index = dogs.indexOf(selected);
		dogs = [...dogs.slice(0, index), ...dogs.slice(index + 1)];

		breedInput = subBreedInput = '';
		i = Math.min(i, filteredDogs.length - 2);
	}

	function reset_inputs(dog) {
		breedInput = dog ? dog.breed : '';
		subBreedInput = dog ? dog.subBreed : '';
	}

	let grid: Grid;

	$: if (grid) {
		console.log(grid.plugin.add);
		grid.plugin.add({
			id: 'select',
			position: PluginPosition.Header,
			component: RowSelection
		});
		grid.config.store.subscribe(function (state) {
			console.log('checkbox updated', state.rowSelection);
			console.log(state);
			// i = state.rowSelection[0];
		});
	}

	// subscribe to the store events
</script>

<h1>Kennim's Table</h1>
<Grid
	bind:data={dogs}
	bind:instance={grid}
	pagination={{ enabled: true, limit: 8 }}
	sort="true"
	search={{ enabled: true }}
	columns={[
		{
			id: 'myCheckbox',
			name: 'Select',
			plugin: {
				component: RowSelection
			}
		},
		'breed',
		'subBreed'
	]}
	language={{ search: { placeholder: '🔍🐶Search...' } }}
/>

<div class="button-tray">
	<div class="crud-btns">
		<button on:click={create} disabled={!breedInput || !subBreedInput}>create</button>
		<button on:click={update} disabled={!breedInput || !subBreedInput || !selected}>update</button>
		<button on:click={remove} disabled={!selected}>delete</button>
	</div>
</div>
<label><input bind:value={breedInput} placeholder="first" /></label>
<label><input bind:value={subBreedInput} placeholder="last" /></label>

<style>
	@import 'https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css';
</style>
