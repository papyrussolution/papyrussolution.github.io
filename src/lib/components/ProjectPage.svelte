<script>
	import { onMount } from 'svelte';
	let project_list = [];

	onMount(async () => {
		const response_project_list = await fetch('/src/lib/data/content_list.json');
		const data_project_list = await response_project_list.json();
		project_list = data_project_list.projects;
		document.title = 'Svelte Flex Layout - Проекты';
	});
	function openProject(slug) {
		window.location.href = `/project/${slug}`;
	}
</script>

<div class="blog-page">
  <div class="page-header">
    <h1>📝 Проекты</h1>
    <a href="/" class="nav-button">← На главную</a>
  </div>
  
  <div class="blog-grid">
    {#each project_list as project}
      <article class="blog-post" on:click={() => openProject(project.slug)}>
        <h3 class="post-title">{project.title}</h3>
        <p class="post-excerpt">{project.excerpt}</p>
        <div class="post-header">
          <span class="post-category">{project.category}</span>
          <span class="post-read-time">{project.readTime}</span>
        </div>
        
        <div class="post-icon">{project.image}</div>
        
        <div class="post-footer">
          <span class="post-date">{project.date}</span>
          <span class="post-author">by {project.author}</span>
        </div>
      </article>
    {/each}
  </div>
</div>