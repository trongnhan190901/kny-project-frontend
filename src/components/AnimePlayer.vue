<template>
  <template v-if="data && data.length">
     <div class="w-[800px] relative -top-24 flex"
          v-if="isValid">
        <video id="player" playsinline controls data-poster="">
          <source :src="data.link" type="video/mp4" />
        </video>        
      </div>   
  </template>
          
</template>

<script>
import axios from "axios";
import { ref } from "vue";
export default {
    name: "AnimePlayer",
    setup(){      
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

    console.log(data.value);
      return { data };
    },
    methods: {
        isValid: function (){
          return this.data.link;
      }
    }
}

</script>