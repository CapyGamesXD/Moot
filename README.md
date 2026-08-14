# Moot

I decided to make Moot because I was bored. That's basically the only reason.
Here's how it works (or doesn't work...):
It was trained off thousands of arithmetic equations (x + y = z) using Brain.JS, then the finalised weights were stored and run when you click equals.

Anyway, here's the stack:

SvelteKit frontend, JS backend (+server.js from SvelteKit) running BrainJS on the server.

Training data:
I made my own library of training data by randomly generating calculations. :)

It uses Brain.JS's built-in "leaky-relu" activation function. You can find more info at the /src/routes/train/+server.js page. :D

You can find all the training data used, alongside an example file.
(They're in /src/lib :D)

## AI usage:

No AI code was used.
Gemini was used for research and debugging.
