<script>
	import { onMount } from 'svelte';
	import { loadComponentMarkdown } from '/src/lib/js/util.js';
	
	let blogpost_list = [];
	let project_list = [];

	let markdown_content_about = '';
	let markdown_content_prj_papyrus = '';
	let markdown_content_prj_styloq = '';
	
	onMount(async () => {
		const response_content_list = await fetch('/src/lib/data/content_list.json');
		const data_content_list = await response_content_list.json();
		blogpost_list = data_content_list.posts;

		markdown_content_about = await loadComponentMarkdown('about-short');
		markdown_content_prj_papyrus = await loadComponentMarkdown('prj-papyrus');
		markdown_content_prj_styloq = await loadComponentMarkdown('prj-styloq');

		//document.title = 'Svelte Flex Layout - Блог';
		blogpost_list.sort((a, b) => {
			const datetime_a_ms = Date.parse(a.date);
			const datetime_b_ms = Date.parse(b.date);
			// обратный порядок
			if(datetime_a_ms < datetime_b_ms) {
				return 1; 
			}
			else if(datetime_a_ms > datetime_b_ms) {
				return -1;
			}
			else
				return 0;
		});
		//
		project_list = data_content_list.projects;
	});
	function openPost(slug) {
		window.location.href = `/post/${slug}`;
	}
	function openProject(slug) {
		window.location.href = `/project/${slug}`;
	}
</script>

<div class="facade">
	<div class="facade-blog">
		<!-- <p>Блог</p> -->
		<!-- <TestHeroPanel on:back={() => navigateTo('home', '/')} /> -->
		<section class="slpane-panel excel-gradient-border">
			<div class="slpane-background">
				<div class="background-image"></div>
				<div class="overlay"></div>
			</div>
			<div class="slpane-content">
				<div class="content-wrapper-col">
					<!--<h1 class="slpane-title">Блог</h1>-->
					<div class="blog-grid">
						{#each blogpost_list.slice(0, 2) as post}
							<article class="slpane-panel excel-style-frame" style="margin:8px" on:click={() => openPost(post.slug)}>
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
			</div>
		</section>
	</div>
	<div class="facade-column02">
		<div class="facade-about">
			<section class="slpane-panel excel-gradient-border">
				<div class="slpane-background">
					<div class="background-image"></div>
					<div class="overlay"></div>
				</div>
				<div class="slpane-content">
					<div class="content-wrapper-col">
						<div class="markdown-content">
							{@html markdown_content_about}
						</div>
					</div>
				</div>
			</section>
		</div>
		<div class="facade-projects">
			<div class="facade-prj-papyrus">
				<section class="slpane-panel excel-gradient-border">
					<div class="slpane-content">
						<div class="content-wrapper-col">
							<div class="markdown-content">
								{@html markdown_content_prj_papyrus}
							</div>
						</div>
					</div>
				</section>
			</div>
			<div class="facade-prj-styloq">
				<section class="slpane-panel excel-gradient-border">
					<div class="slpane-content">
						<div class="content-wrapper-col">
							<div class="markdown-content">
								{@html markdown_content_prj_styloq}								
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
.facade {
	display: flex;
	flex-direction: row;
	width: 95vw; 
	height: 83vh;
	/*height: calc(100vh - var(--header-height) - var(--footer-height));*/
	/*background-color: #caf0f8;*/
	.facade-blog {
		display: flex;
		flex-direction: column;
		flex: 1;
		margin: 4px 2px 4px 4px;
	}
	.facade-column02 {
		display: flex;
		flex-direction: column;
		flex: 2;
		.facade-about {
			display: flex;
			flex-direction: column;
			flex: 1;
			margin: 4px 4px 2px 2px;
		}
		.facade-projects {
			display: flex;
			flex-direction: row;
			flex: 2;
			margin: 2px 4px 4px 2px;
			.facade-prj-papyrus {
				display: flex;
				flex: 1;
			}
			.facade-prj-styloq {
				display: flex;
				flex: 1;
			}
		}
	}
}
</style>