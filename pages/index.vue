<template>
  <video src="@/assets/video.mp4" autoplay loop></video>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
video {
  filter: grayscale(100%) blur(20px) opacity(25%);
  width: 100%;
}
</style>
