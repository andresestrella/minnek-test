<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer />
</div>

<style>
	.app {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
	}
	main {
		width: 90%;
	}

	footer {
		color: #fff;
		height: 2em;
	}
</style>
