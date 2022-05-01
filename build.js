require('esbuild').build({
  entryPoints: ['./src/dendron.tsx'],
  bundle: true,
	target: 'es2019',
	platform: "node",
  outfile: 'dendron.js',
	plugins: [],
	external: ["fsevents"]
}).catch(() => process.exit(1))