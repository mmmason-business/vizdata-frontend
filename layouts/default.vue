<template>
	<div id="root" ref="root">
		<Nuxt />
	</div>
</template>
<script>
	export default {
		created() {
			window.addEventListener(
				'orientationchange',
				this.onOrientationChange
			);
			window.addEventListener('resize', this.onResize);
		},
		destroy() {
			window.removeEventListener(
				'orientationchange',
				this.onOrientationChange
			);
			window.removeEventListener('resize', this.onResize);
		},
		methods: {
			onOrientationChange() {
				setTimeout(() => {
					this.onResize();
					setTimeout(() => {
						window.scrollTo(0, 1);
					}, 500);
				}, 500);
			},
			onResize() {
				this.$refs.root.style.height = `${window.innerHeight}px`;
				this.$refs.root.style.width = `${window.innerWidth}px`;
			}
		},
		mounted() {
			this.$nextTick(() => {
				this.onResize();
			});
		}
	};
</script>
<style lang="scss">
	*,
	*::after,
	*::before {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html {
		height: 100%;
		width: 100%;
		& > body {
			height: 100%;
			width: 100%;
			& > div#__nuxt {
				height: 100%;
				width: 100%;
				& > div#__layout {
					height: 100%;
					width: 100%;
					& > div#root {
						height: 100%;
						width: 100%;
					}
				}
			}
		}
	}
</style>
