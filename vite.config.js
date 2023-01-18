import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	server:{
		port:3030,
		open:true,
	},
	plugins: [sveltekit()]
};

export default config;
