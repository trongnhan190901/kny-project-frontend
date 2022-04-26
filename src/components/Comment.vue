<template>
  <div
    class="
      w-3/5
      h-80
      relative
      flex
      bg-black bg-opacity-50
      left-1/2
      -translate-x-1/2
      bottom-[360px]
      rounded-md
    "
  >
    <ul
      class="
        absolute
        w-full
        text-left
        top-3
        pl-10
        text-xl text-white
        overflow-y-scroll
        h-64
      "
    >
      <li
        v-for="comment in data.slice().reverse()"
        :key="comment.id"
        class="mb-6 mx-6 text-justify"
      >
        <div>{{ convertISODate(comment.createdAt) }}</div>
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 inline-block absolute left-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            /></svg
          ><strong>{{ comment.name }}: </strong>{{ comment.comment }}</span
        >
      </li>
    </ul>
    <div class="absolute bottom-5 w-full left-20">
      <input
        class="
          w-5/6
          h-12
          bg-transparent
          outline-0
          text-lg text-white
          border-b-2
        "
        type="text"
        placeholder="Nhập bình luận của bạn"
        v-model="newComment"
      />
      <span
        @click="submitComment(); afterSubmit()"
        class="
          flex
          sm:inline-flex
          justify-center
          items-center
          text-white
          font-semibold
          text-center
          rounded-md
          outline-none
          transition
          duration-100
          absolute
          top-5
          hover:text-red-500
          cursor-pointer
          px-4
        "
        >Gửi</span
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { mapState } from "pinia";
import { useAuthStore } from "@/stores/auth.store";

export default {
  name: "Comment",
  setup() {
    const data = ref([]);
    axios
      .get("/api/comments")
      .then(function (response) {
        data.value = response.data;
      })
      .catch(function (response) {
        console.log(response);
      });
    function convertISODate(ISODate) {
      if (ISODate) return new Date(ISODate).toISOString().substring(0, 10);
    }    
    function afterSubmit() {
      
      axios
      .get("/api/comments")
      .then(function (response) {
        data.value = response.data;
        console.log(data.value);
      })
      .catch(function (response) {
        console.log(response);
      });
     
    }
        return { data, convertISODate, afterSubmit };
  },
  computed: {
    ...mapState(useAuthStore, {
      currentUser: "user",
    }),
  },
  methods: {
    submitComment: function () {      
      let comment = {
        name: this.currentUser.username,
        comment: this.newComment,
      };
      axios
        .post("/api/comments", comment)
        .then((response) => {   
          this.$forceUpdate();               
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });                 
    },
    
  },
};

</script>