<script>
	import { onMount } from 'svelte';
	import { loadComponentMarkdown } from './src/lib/js/util.js';

	export let postSlug = '';

	let markdown_content = '';
	let post = null;
	let loading = true;

	onMount(async () => {
		markdown_content = await loadComponentMarkdown(postSlug);

		//const posts = loadBlogPosts();
		let blogpost_list = [];
		const response_blogpost_list = await fetch('./src/lib/data/content_list.json');
		const data_blogpost_list = await response_blogpost_list.json();
		blogpost_list = data_blogpost_list.posts;

		post = blogpost_list.find(p => p.slug === postSlug);
		loading = false;
		document.title = post ? `${post.title} - Svelte Blog` : 'Пост не найден';
	});
</script>

{#if loading}
	<div class="loading">Загрузка...</div>
{:else if post}
	<article class="post-detail">
		<div class="post-header">
			<span class="post-category">{post.category}</span>
			<span class="post-read-time">{post.readTime}</span>
		</div>
		<div class="post-icon">{post.image}</div>
		<h1 class="post-title">{post.title}</h1>
		<div class="post-meta">
			<span class="post-date">{post.date}</span>
			<span class="post-author">by {post.author}</span>
		</div>
		<div class="markdown-content">
			{@html markdown_content}
		</div>
		<button class="back-button" on:click={() => history.back()}>
			← Назад к списку постов
		</button>
	</article>
{:else}
	<div class="not-found">
		<h1>Пост не найден</h1>
		<p>Запрашиваемый пост не существует.</p>
		<a href="/blog" class="back-button">← Назад к списку постов</a>
	</div>
{/if}