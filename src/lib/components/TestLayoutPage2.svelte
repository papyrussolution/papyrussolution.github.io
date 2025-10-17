<script>
</script>

<h3>...2-я тестовая страница для отработки layout (flex-box то есть)</h3>

<div class="testlayout-page">
	<div class="testlayout-row01">
		<div class="testlayout-block01">
		</div>
		<div class="testlayout-block02">
		</div>
	</div>
	<div class="testlayout-row02">
		<div class="testlayout-block03">
		</div>
		<div class="testlayout-subrow01">
			<div class="testlayout-block04">
			</div>
			<div class="testlayout-block05">
			</div>
		</div>
	</div>
</div>

<style lang="scss">
.testlayout-page {
	display: flex;
	flex-direction: column;
	width: 100vw; 
	height: 90vh; /* vh - высота экрана */
	background-color: cyan;
	.testlayout-row01 {
		display: flex;
		flex-direction: row;
		flex: 1;
		.testlayout-block01 {
			flex: 1;
			background-color: green;
		}
		.testlayout-block02 {
			flex: 1;
			background-color: blue;
		}
	}
	.testlayout-row02 {
		display: flex;
		flex-direction: row;
		flex: 1;
		.testlayout-block03 {
			flex: 1;
			background-color: coral;
		}
		.testlayout-subrow01 {
			display: flex;
			flex-direction: column;
			flex: 2;
			.testlayout-block04 {
				flex: 1;
				background-color: red;
			}
			.testlayout-block05 {
				flex: 1;
				background-color: yellow;
			}
		}
	}
}
</style>