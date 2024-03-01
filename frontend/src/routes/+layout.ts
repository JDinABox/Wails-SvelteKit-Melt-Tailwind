import '../app.css';

import { dark } from '$stores/theme';

import { browser } from '$app/environment';

export const prerender = true;
export const ssr = false;

if (browser) {
	dark.subscribe((value) => {
		if (value) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	});
}
