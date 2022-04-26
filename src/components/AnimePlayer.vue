<template>
  <div class="w-[800px] relative top-8 flex">
    <video :src="video_src" id="player" playsinline controls>
      {{ video_src }}
      <source type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  props: { video_src: {
    default: () => 'https://firebasestorage.googleapis.com/v0/b/kny-project.appspot.com/o/ep1.mp4?alt=media&token=89711709-f712-46e7-a0b9-c794984e6824',
    type: String,
  }},
  name: "AnimePlayer",
};
</script>