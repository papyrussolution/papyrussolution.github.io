<script>
	//
</script>

<div class="app-layout">
	<header class="header">
		<slot name="header"/>
	</header>
	<div class="main-layout">
		<!--
		<aside class="sidebar">
			<slot name="sidebar"/>
		</aside>
		-->
		<div class="content-area">
			<main class="main-content">
			  <div class="content-wrapper-col">
				<slot name="content"/>
			  </div>
			</main>
			<footer class="footer">
				<div class="footer-content">
					<p>&copy; A.Sobolev 2025</p>
					<!--
					<div class="footer-links">
						<a href="#">Privacy Policy</a>
						<a href="#">Terms of Service</a>
					</div>
					-->
				</div>
			</footer>
		</div>
	</div>
</div>

<style lang="scss">
	.app-layout {
		display: flex;
		flex-direction: column;
		height: 100vh; /* ← ФИКСИРОВАННАЯ ВЫСОТА ЗДЕСЬ! */
		.main-layout {
			display: flex;
			flex: 1;
			overflow: hidden; /* ← Важно! */
			.content-area {
				display: flex;
				flex-direction: column;
				flex: 1;
				.main-content {
					flex: 1;
					overflow-y: auto; /* ← Прокрутка здесь */
					padding: 2rem;
				}
				.footer {
					flex-shrink: 0; /* Не сжимается */
				}
			}
		}
	}
</style>
