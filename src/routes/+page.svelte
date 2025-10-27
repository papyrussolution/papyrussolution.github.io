<script>
</script>

<div class="parent">
	<header class="section coral">
		Welcome to SvelteKit
	</header>
	<div class="left-side section blue">
	</div>
	<main class="section green">
		Main Content
		<!--<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>-->
	</main>
	<div class="right-side section yellow">
	</div>
	<footer class="section coral">
		Footer
	</footer>
</div>

<style>

.parent {
	display: grid;
	grid-template: auto 1fr auto / auto 1fr auto;
	height: 100vh;
	margin: 8px 8px;
}
header {
	padding: 2rem;
	grid-column: 1 / 4;
	color: #CAF0F8;
	background-color: var(--color-dark);
	height: 8vh;
}
.left-side {
	grid-column: 1 / 2;
	background-color: #0077B6;
	width: 0%;
}
main {
	grid-column: 2 / 3;
	background-color: var(--color-light);
}
.right-side {
	grid-column: 3 / 4;
	background-color: #0077B6;
	width: 0%;
}
footer {
	grid-column: 1 / 4;
	color: var(--color-light);
	background-color: var(--color-dark);
	height: 8vh;
}
</style>