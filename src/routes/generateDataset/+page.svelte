<script>
	//@ts-nocheck
	let dataset = $state([]);
	let copySet = $state([]);
	let inputCount = $state(0);

	function generate(count) {
		for (let i = 0; i < count; i++) {
			const val1 = Math.floor(Math.random() * 100);
			const val2 = Math.floor(Math.random() * 100);
			const val3 = val1 + val2;
			dataset.push({ input: [val1 / 100, val2 / 100], output: [val3 / 100] });
		}
		copySet = JSON.stringify(dataset, null, 2);
	}
</script>

{#each dataset as dataItem}
	<p>{JSON.stringify(dataItem)}</p>
{/each}
<button onclick={() => generate(inputCount)}>Generate data</button>
<input bind:value={inputCount} placeholder="Count" />

<button onclick={() => navigator.clipboard.writeText(copySet)}>Copy</button>
