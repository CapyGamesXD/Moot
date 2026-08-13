<script>
	async function trainNet() {
		try {
			const response = await fetch('/api/train', {
				method: 'POST'
			});
			if (!response.ok) {
				alert('Something went wrong.');
			}

			const reply = await response.json();
			if (reply.success === false) {
				alert('Training failed. Check data.');
			}
		} catch (e) {
			console.log(e);
		}
	}
</script>

<button onclick={trainNet}>Train!</button>
