//@ts-nocheck
import trainedModel from '$lib/trainedModel.json';
import { json } from '@sveltejs/kit';
import { NeuralNetwork } from 'brain.js';
import { writeFileSync } from 'fs';

export async function POST({ request }) {
	try {
		const { toPredict } = await request.json();
		let localPredict = toPredict;
		let multiple = 0;
		if (Math.max(...localPredict) > 1) {
			while (Math.max(...localPredict) > 1) {
				localPredict = localPredict.map((p) => p / 10);
				multiple++;
			}
		}
		const net = new NeuralNetwork();
		net.fromJSON(trainedModel);
		console.log(...localPredict);
		let prediction = Number(net.run(localPredict));
		console.log('Prediction: ', prediction);
		prediction *= 10 ** multiple;
		return json({ output: prediction });
	} catch (e) {
		console.log(e);
		return json({ output: 'Failed to predict.' + e });
	}
}
