<script>
	import pokemon from '../lib/pokemon.json';
</script>

<h1>Pokedex</h1>
<p>Search your pokemon:</p>
<form action="">
	<input type="text" />
	<button type="submit">Search</button>
</form>

<div class="bg-pink-500 m-2 grid gap-4 grid-cols-4">
	{#each pokemon as poke}
		<div class="bg-yellow-500 m-2 p-3">
			<h3>{poke.name}</h3>
			<h4>{poke.type1}</h4>
			<h4>{poke.hp}</h4>
		</div>
	{/each}
</div>
