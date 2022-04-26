<template>
  <template v-if="data && data.length">
    <li v-for="anime in data" :key="anime.id" class="active:text-red-600  ml-2 mr-3">
      <div class="flex py-2 w-56 ">        
          <button class="w-full" @click="select(anime), changeColor()">
             <div class="w-[22rem] flex text-white text-left hover:text-red-600 change">
            <img class="w-40 h-24 block mx-3 hover:scale-110" :src="anime.img" alt="" />
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
  emits: ['click-choose'],
  setup() {
    const data = ref([]);
    axios
      .get("/api/animes?episodes")
      .then(function (response) {
        data.value = response.data;
      })
      .catch(function (response) {
        console.log(response);
      });

    return { data };
  },
  methods: {
    select: function (event) {
      this.$emit("click-choose", event);  
      this.$router.push({name: 'Anime', params: {id: event.id}});
      
    },
     changeColor: function () {
        document.body.style.color = "purple";
        return false;
    }   
  },
};
</script>