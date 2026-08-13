<script>
	//@ts-nocheck

	let displayText = $state('');

	let rows = $state([
		[{ number: 1 }, { number: 2 }, { number: 3 }],
		[{ number: 4 }, { number: 5 }, { number: 6 }],
		[{ number: 7 }, { number: 8 }, { number: 9 }]
	]);
	async function calculate() {
		const toPredict = displayText
			.split('+')
			.map(Number)
			.map((n) => n / 100);

		displayText = 'Contacting the mainframe...';
		setTimeout(() => {
			displayText = 'Evaluating answer...';
			setTimeout(() => {
				displayText = 'Balancing neural weights...';
			}, 3000);

			setTimeout(() => {
				displayText = 'Almost done...';
			}, 2000);
		}, 1000);

		setTimeout(async () => {
			const response = await fetch('/api/predict', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ toPredict })
			});

			const reply = await response.json();
			displayText = Math.round(reply.output * 100);
		}, 5000);
	}

	function addNum(item) {
		if (
			(item === '+' && displayText[displayText.length - 1] === '+') ||
			(!displayText[0] && item === '+')
		) {
			alert('Input character is invalid.');
		} else {
			displayText += item;
		}
	}
</script>

<div class="centerDiv">
	<div class="calculator">
		<div style="margin-bottom: 10px;" class="screen">
			<p>{displayText}</p>
		</div>
		{#each rows as row}
			<div class="row">
				{#each row as item}
					<button onclick={() => addNum(item.number)} class="calcButton">{item.number}</button>
				{/each}
			</div>
		{/each}
		<div class="row">
			<button onclick={() => addNum('+')}>+</button>
			<button onclick={() => calculate()}>=</button>
		</div>
	</div>
</div>

<style>
	.row {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 8px;
	}
	.calcButton {
		width: 90px;
		height: 90px;
		background-color: #727272;
		border-radius: 5px;
		color: white;
		font-size: 30px;
	}
	.screen {
		width: 300px;
		height: 175px;
		background-color: black;
		border-radius: 5px;
		color: white;
	}
	.calculator {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 7px;
		gap: 8px;
		width: 315px;
		height: 615px;
		background-color: #d9d9d9;
		border-radius: 10px;
		box-shadow:
			0px 10px 0px 0px rgba(0, 0, 0, 0.4),
			0px 10px 20px 0px rgb(33, 33, 33);
	}
	.centerDiv {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}
</style>
