<script>
	//@ts-nocheck
	let status = $state('');

	import { onMount } from 'svelte';

	async function trainNet() {
		try {
			const response = await fetch('/api/train', {
				method: 'POST'
			});
			if (!response.ok) {
				alert('Something went wrong.');
				status = 'Something went wrong.';
			} else {
				status = 'Training succeeded.';
			}

			const reply = await response.json();
			if (reply.success === false) {
				status = reply.reason || 'Something went wrong.';
			}
		} catch (e) {
			console.log(e);
			status = e;
		}
	}
</script>

<div class="centerDiv">
	<button onclick={trainNet}>Train!</button>
	<p>{status}</p>
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
