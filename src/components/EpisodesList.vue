<template>
  <template v-if="data && data.length">
    <li v-for="anime in data" :key="anime.id">
      <div class="flex pb-4 w-56">
        <button class="w-full">
          <div class="w-[22rem] flex text-white text-left hover:text-red-600">
            <img class="w-40 h-24 block mx-2" :src="anime.img" alt=""/>            
            {{ anime.episodes }}             
          </div>
        </button>
      </div>
    </li>
  </template>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  name: "EpisodesList",
  setup() {
    const data = ref([]);
    axios
      .get("/api/animes?episodes")
      .then(function (response) {
        data.value = response.data;
        console.log(data.value);
      })
      .catch(function (response) {
        console.log(response);
      });

    return { data };
  }
};
</script>