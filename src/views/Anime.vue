<template>
  <div class="h-screen">
    <div class="w-full h-full bg-[url('../../public/media/img/bg-img.jpeg')]">
      <img
        src="../../public/media/img/bg-deco.png"
        alt=""
        class="absolute right-0 bottom-0 opacity-50"
      />
      <div
        class="
          absolute
          flex flex-wrap
          items-center
          justify-center
          h-screen
          w-5/6
          -left-7
        "
      >
        <div class="w-[800px] relative -top-36 flex">
          <AnimePlayer :video_src="video_src" />
        </div>
        <div class="w-[800px] absolute text-white bottom-[370px] text-xl font-bold">
          {{video_title}}
        </div>
        <div id="episodes" class="relative flex px-6">
          <div class="flex">
            <ul
              class="
                absolute
                -top-[340px]
                h-[450px]
                overflow-y-scroll
                w-[380px]
                bg-black bg-opacity-50
                pt-4
                pl-2
                rounded-md
              "
            >
              <EpisodesList @click-choose="handleEpisode" />
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Comment />
  </div>
</template>
<script>
import EpisodesList from "@/components/EpisodesList";
import AnimePlayer from "@/components/AnimePlayer";
import Comment from "@/components/Comment";
import { ref } from "vue";

export default {
  components: {
    EpisodesList,
    AnimePlayer,
    Comment,
  },
  setup() {
    const video_src = ref('https://firebasestorage.googleapis.com/v0/b/kny-project.appspot.com/o/ep1.mp4?alt=media&token=89711709-f712-46e7-a0b9-c794984e6824');
    const video_id = ref('625d29c1a6ffa45f1515d26f');
    const video_title = ref('Tập 1 - Tàn khốc');
    function handleEpisode(data) {
      video_src.value = data.link;
      video_id.value = data.id;
      video_title.value = data.episodes;     
    }
    
    return { video_src, video_id, video_title, handleEpisode };
  },
};
</script>