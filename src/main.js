import { mount } from 'svelte/runtime'
/*import './app.css'*/
import './app.scss'
import App from './App.svelte'

const path = window.location.pathname;

if(path === '/nonsense') { // placeholder
}
/*else if(path === '/blog') {
	import('./lib/components/BlogPage.svelte')
		.then(module => {
			const BlogPage = module.default;
			mount(BlogPage, { target: document.body }, );
	})
	.catch(error => {
		console.error('Failed to load blog page:', error);
		mount(App, { target: document.getElementById('app'), });
	});
} */
/*else if(path === '/project') {
	import('./lib/components/ProjectPage.svelte')
		.then(module => {
			const ProjectPage = module.default;
			mount(ProjectPage, { target: document.body }, );
	})
	.catch(error => {
		console.error('Failed to load project page:', error);
		mount(App, { target: document.getElementById('app'), });
	});
}*/
/*else if(path === '/test-layout') {
	import('./lib/components/TestLayoutPage.svelte')
		.then(module => {
			const TestLayoutPage = module.default;
			mount(TestLayoutPage, { target: document.body }, );
	})
	.catch(error => {
		console.error('Failed to load project page:', error);
		mount(App, { target: document.getElementById('app'), });
	});
}
else if(path === '/test-layout2') {
	import('./lib/components/TestLayoutPage2.svelte')
		.then(module => {
			const TestLayoutPage2 = module.default;
			mount(TestLayoutPage2, { target: document.body }, );
	})
	.catch(error => {
		console.error('Failed to load project page:', error);
		mount(App, { target: document.getElementById('app'), });
	});
}*/
/*else if(path.startsWith('/post/')) {
	// Страница отдельного поста
	const slug = path.split('/post/')[1];
	import('./lib/components/BlogPostDetail.svelte')
		.then(module => {
			const BlogPostDetail = module.default;
			mount(BlogPostDetail, { 
				target: document.body,
				props: { postSlug: slug }
			});
	});
}*/
else {
	const app = mount(App, { target: document.getElementById('app'), })
}

export default app
