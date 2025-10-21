<script>
	import AppLayout from './lib/layout/AppLayout.svelte';
	import Main from './lib/components/Main.svelte';
	import BlogPage from './lib/components/BlogPage.svelte';
	import BlogPostDetail from './lib/components/BlogPostDetail.svelte';
	import ProjectPage from './lib/components/ProjectPage.svelte';
	import TestLayoutPage from './lib/components/TestLayoutPage.svelte';
	import TestLayoutPage2 from './lib/components/TestLayoutPage2.svelte';
	import FacePage from './lib/components/Face.svelte';
	import { onMount } from 'svelte';

	let current_page = $state('home'); // Для маршрутизации
	let current_path = $state('/');    // Для маршрутизации
	let extra_path_seg = $state('');   // Для маршрутизации (локация 2-го уровня пути e.g. '/blog/extra_path_seg') 

	let features = $state([]);
	let header_menu = $state([]);
	let sidebar_menu = $state([]);
	let blogpost_list = $state([]);

	export const isValidString = (str) => {
		return str != null && typeof str === 'string' && str.trim().length > 0;
	};
	//
	// Обработчик изменения маршрута
	//
	function navigateTo(page, path) {
		current_page = page;
		current_path = path;
		window.history.pushState({}, '', path);
		document.title = getPageTitle(page);
	}
	function getPageTitle(page) {
		const titles = {
			home: 'sobolev-engineering - Главная',
			blog: 'sobolev-engineering - Блог',
			project: 'sobolev-engineering - Проекты',
			about: 'sobolev-engineering - Обо мне',
			news: 'sobolev-engineering - Новости'
		};
		return titles[page] || 'sobolev-engineering';
	}
	//
	onMount(async () => {
		// (переместил в index.html) document.title = 'Разработка сайта sobolev-engineering';

		let loading = true;
		let response_structure = null;
		let data_structure = null;
		let response_blogpost_list = null;
		try {
			response_structure = await fetch('/src/lib/data/structure.json');
			data_structure = await response_structure.json();
			response_blogpost_list = await fetch('/src/lib/data/content_list.json');
		} catch(error) {
			console.error('Failed to load data:', error);
		} finally {
			loading = false;
		}

		features = data_structure.features;
		header_menu = data_structure.header_menu;
		sidebar_menu = data_structure.sidebar_menu;
		//
		const data_blogpost_list = await response_blogpost_list.json();
		blogpost_list = data_blogpost_list.posts;
		//
		//
		//
		// Определяем текущую страницу по URL
		const path = window.location.pathname;
		current_path = path;
		
		if(path === '/') {
			current_page = 'face';
			extra_path_seg = '';
		}
		else if(path === '/main') {
			current_page = 'main';
			extra_path_seg = '';
		}
		else if(path === '/face') {
			current_page = 'face';
			extra_path_seg = '';
		}
		else if(path === '/blog') {
			current_page = 'blog';
			extra_path_seg = '';
		}
		else if(path === '/project') {
			current_page = 'project';
			extra_path_seg = '';
		}
		else if(path === '/about') {
			current_page = 'abount';
			extra_path_seg = '';
		}
		else if(path === '/news') {
			current_page = 'news';
			extra_path_seg = '';
		}
		else if(path === '/test-layout') {
			current_page = 'test_layout';
			extra_path_seg = '';
		}
		else if(path === '/test-layout2') {
			current_page = 'test_layout2';
			extra_path_seg = '';
		}
		else if(path.startsWith('/post/')) {
			current_page = 'blog_post';
			extra_path_seg = path.split('/post/')[1];
		}
		else { // default
			current_page = 'home';
			extra_path_seg = '';
		}
		document.title = getPageTitle(current_page);
		// Слушаем изменения истории браузера
		window.addEventListener('popstate', () => {
			const new_path = window.location.pathname;
			current_path = new_path;
			current_page = pageMap[new_path] || 'home';
			document.title = getPageTitle(current_page);
		});
	});
</script>

<!-- <AppLayout {current_page}> -->
<AppLayout>
	<div slot="header">
		<div class="header-content">
			<a href="/"><h1>sobolev-engineering</h1></a>
			{#if header_menu.length > 0}
				<nav class="nav">
					{#each header_menu as header_menu_item (header_menu_item.id)}
						{#if isValidString(header_menu_item.image)}
							<a href="{header_menu_item.ref}" class="nav-link">
							<img 
								src={`./src/lib/assets/images/${header_menu_item.image}`}
								alt={header_menu_item.title}
								width="24"
								height="24" 
								class="nav-icon"
							/>
							</a>
						{:else}
							<a href="{header_menu_item.ref}" class="nav-link">{header_menu_item.title}</a>
						{/if}
					{/each}
				</nav>
			{:else}
				<p>Loading header_menu...</p>
			{/if}
		</div>
	</div>
	<div slot="sidebar">
		<div class="sidebar-content">
			<h2>Navigation</h2>
			{#if sidebar_menu.length > 0}
				<ul class="sidebar-menu">
					{#each sidebar_menu as sidebar_menu_item (sidebar_menu_item.id)}
						<li><a href="{sidebar_menu_item.ref}" class="menu-item">{sidebar_menu_item.title}</a></li>
					{/each}
				</ul>
			{:else}
				<p>Loading sidebar_menu...</p>
			{/if}
		</div>
	</div>
	<div slot="content">
		{#if current_page === 'home'}
			<!-- <HomePage on:navigate={navigateTo} /> -->
			<div class="page-content">
				<!--
				<h2>Welcome to Svelte Flex Layout</h2>
				<p>This is a clean, custom-built layout using flexbox and Svelte components.</p>
				-->

				{#if features.length > 0}
					<div class="card-grid">
					{#each features as feature (feature.id)}
						<div class="card" style="--accent-color: {feature.color}">
							<div class="card-icon">{feature.icon}</div>
							{#if isValidString(feature.ref)}
								<a href="{feature.ref}"><h3>{feature.title}</h3></a>
							{:else}
								<h3>{feature.title}</h3>
							{/if}
							<p>{feature.description}</p>
							{#if isValidString(feature.img)}
								<img src="./src/lib/assets/images/{feature.img}"/>
							{/if}
						</div>
					{/each}
					</div>
				{:else}
					<p>Loading features...</p>
				{/if}
			</div>
		{:else if current_page === 'main'}
			<Main on:back={() => navigateTo('home', '/')} />
		{:else if current_page === 'face'}
			<FacePage on:back={() => navigateTo('home', '/')} />
		{:else if current_page === 'test_layout'}
			<TestLayoutPage on:back={() => navigateTo('home', '/')} />
		{:else if current_page === 'test_layout2'}
			<TestLayoutPage2 on:back={() => navigateTo('home', '/')} />
		{:else if current_page === 'blog'}
			<BlogPage on:back={() => navigateTo('home', '/')} />
		{:else if current_page === 'project'}
			<ProjectPage on:back={() => navigateTo('home', '/')} />
		{:else if current_page === 'blog_post'}
			<BlogPostDetail postSlug={extra_path_seg} on:back={() => navigateTo('blog', '/')} />
		{/if}
	</div>
</AppLayout>

<style lang="scss">
</style>