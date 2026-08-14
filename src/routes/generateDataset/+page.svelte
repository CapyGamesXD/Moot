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

<div class="centerDiv">
	{#if copySet.length >= 1}
		<button style="margin-bottom: 10px;" onclick={() => navigator.clipboard.writeText(copySet)}
			>Copy</button
		>
	{/if}
	<button style="margin-bottom: 10px;" onclick={() => generate(inputCount)}
		>Generate (and push) data</button
	>
	<input bind:value={inputCount} placeholder="Count" />
	{#each dataset as dataItem}
		<p>{JSON.stringify(dataItem)}</p>
	{/each}
</div>

<style>
	button {
		width: 300px;
		height: 40px;
		background-color: rgb(177, 178, 178);
		border-radius: 20px;

		color: white;
	}
	input {
		width: 300px;
		height: 40px;
		background-color: rgb(39, 38, 38);
		border-radius: 20px;
		padding: 10px;
		color: white;
	}
	.centerDiv {
		display: flex;
		align-items: center;
		justify-content: center;
		height: auto;
		padding: 40px;
		min-height: 100vh;
		flex-direction: column;
		background: #f29590;
		background: #f29590;
		background: #f29590;
		background: linear-gradient(90deg, rgba(242, 149, 144, 1) 0%, rgba(0, 118, 222, 1) 100%);
	}
</style>
