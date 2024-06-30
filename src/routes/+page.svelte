<script lang="ts">
	import pokemon from '../lib/pokemon.json';

	function numberToThreePlaces(numeral: number) {
		let numb = '';
		if (Number(numeral) >= 100) {
			numb = String(numeral);
		} else if (Number(numeral) >= 10) {
			numb = '0' + numeral;
		} else if (Number(numeral) >= 1) {
			numb = '00' + numeral;
		}
		return numb;
	}

	console.log(numberToThreePlaces(pokemon[69].pokedex_number));
	console.log(numberToThreePlaces(pokemon[0].pokedex_number));
	console.log(numberToThreePlaces(pokemon[600].pokedex_number));
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
			<img
				src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${numberToThreePlaces(poke.pokedex_number)}.png`}
				alt={poke.name}
				width="100"
				height="100"
			/>
			<h3>{poke.name}</h3>
			<!-- <h3>{poke.pokedex_number}</h3> -->
			<h4>{poke.type1}</h4>
			<h4>{poke.hp}</h4>
		</div>
	{/each}
</div>
