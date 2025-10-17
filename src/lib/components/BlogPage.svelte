<script>
	import { onMount } from 'svelte';
	let blogpost_list = [];

	onMount(async () => {
		const response_blogpost_list = await fetch('./src/lib/data/content_list.json');
		const data_blogpost_list = await response_blogpost_list.json();
		blogpost_list = data_blogpost_list.posts;
		document.title = 'Svelte Flex Layout - Блог';
	});
	function openPost(slug) {
		window.location.href = `/post/${slug}`;
	}
</script>

<div class="blog-page">
	<div class="page-header">
		<h1>📝 Наш блог</h1>
		<a href="/" class="nav-button">← На главную</a>
	</div>
	<div class="blog-grid">
		{#each blogpost_list as post}
			<article class="slpane-panel" on:click={() => openPost(post.slug)}>
				<div class="slpane-background">
					<div class="background-image"></div>
					<div class="overlay"></div>
				</div>
				<div class="slpane-content">
					<div class="content-wrapper-col">
						<h3 class="slpane-title">{post.title}</h3>
						<p class="slpane-description">{post.excerpt}</p>
						<div class="slpane-info-line">
							<div class="slpane-info-item">{post.image}</div>
							<span class="slpane-info-item">{post.date}</span>
							<span class="slpane-info-item">by {post.author}</span>
							<span class="slpane-info-item">{post.category}</span>
							<span class="slpane-info-item">{post.readTime}</span>
						</div>
					</div>
				</div>
			</article>
		{/each}
	</div>
</div>