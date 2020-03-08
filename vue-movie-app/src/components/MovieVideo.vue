<template>
	<vue-plyr>
		<video
			crossorigin
			playsinline
			poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
			src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
		>
			<source
				size="576"
				src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
				type="video/mp4"
			/>
			<!-- <source
				size="720"
				src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
				type="video/mp4"
			/>
			<source
				size="1080"
				src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
				type="video/mp4"
			/> -->
			<!-- <a
				download=""
				href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
			>
				Download
			</a> -->
		</video>
	</vue-plyr>
</template>

<script>
export default {
	name: 'MovieVideo'
};
</script>

<style lang="scss" scoped></style>
