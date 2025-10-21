// CFG_PATHS.JS
//
class ConfigPaths {
	constructor() { this.isDev = import.meta.env.DEV; }
	get data() { return this.isDev ? '/src/lib/data/' : './data/'; }
	get content() { return this.isDev ? '/src/lib/content/' : './content/'; }
	get img() { return this.isDev ? './src/lib/assets/images/' : './images/'; }
	//json(filename) { return `${this.data}${filename}.json`; }
	//markdown(slug) { return `${this.posts}${slug}.md`; }
}

export const cfg_paths = new ConfigPaths();
