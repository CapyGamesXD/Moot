import { TRAIN_ENDPOINT_OPEN } from '$env/static/private';
import { data } from '$lib/trainingData.js';
import { json } from '@sveltejs/kit';
import { NeuralNetwork } from 'brain.js';
import { writeFileSync } from 'fs';

export async function POST({}) {
	if (TRAIN_ENDPOINT_OPEN === 'true') {
		console.log('Endpoint hit, processing network');
		const net = new NeuralNetwork({
			hiddenLayers: [16],
			learningRate: 0.005,
			activation: 'leaky-relu'
		});
		await net.trainAsync(data, {
			log: true,
			logPeriod: 100,
			errorThresh: 0.000000005,
			iterations: 20000
		});
		console.log('Training succeeded');
		try {
			writeFileSync('./src/lib/trainedModel.json', JSON.stringify(net.toJSON()));
			return json({ success: true });
		} catch (e) {
			console.log(e);
			return json({ success: false });
		}
	} else {
		return json({ success: false, reason: 'Training locked.' });
	}
}
