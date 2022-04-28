<template>
  <div
    class="font-sans min-w-full m-0 fixed top-0 left-0 z-10 my-auto leading-10"
  >
    <div class="bg-transparent leading-10">
      <div class="container mx-auto">
        <div class="flex items-center justify-between h-28">
          <router-link
            :to="{ name: 'Home' }"
            class="relative top-10 left-0 leading-10"
          >
            <img
              class="h-40"
              src="../../public/media/img/logo.png"
              alt="logo"
            />
          </router-link>

          
          <div class="sm:flex sm:items-center text-2xl mt-10">
            <router-link
              :to="{ name: 'Anime' , params: {id: '625d29c1a6ffa45f1515d26f' }}"
              class="
                block
                cursor-pointer
                text-gray-400
                font-semibold
                hover:text-red-500 hover:bg-none
                whitespace-no-wrap
                mr-4
              "
              >Anime</router-link
            >
            <router-link
              :to="{ name: 'Author' }"
              class="
                cursor-pointer
                text-gray-400
                font-semibold
                hover:text-red-500
                mr-4
              "
              >Tác giả</router-link
            >
            <router-link
              :to="{ name: 'About' }"
              class="
                cursor-pointer
                text-gray-400
                font-semibold
                hover:text-red-500
                mr-4
              "
              >Về chúng tôi</router-link
            >
            <router-link
              :to="{ name: 'Login' }"
              v-if="!currentUser"
              class="
                cursor-pointer
                font-semibold
                hover:text-red-500
                text-green-300
                mr-4
              "
              >Đăng nhập</router-link
            >
            <router-link
              :to="{ name: 'Register' }"
              v-if="!currentUser"
              class="
                cursor-pointer
                font-semibold
                hover:text-red-500
                text-green-300
                mr-4
              "
              >Đăng ký</router-link
            >
            <div v-if="currentUser" class="navbar-nav ml-auto">
              <router-link
                :to="{ name: 'profile' }"
                class="
                  cursor-pointer
                  font-semibold
                  hover:text-red-500
                  text-cyan-300
                  mr-4
                "
                >{{ currentUser.username }}
              </router-link>

              <router-link
                :to="{ name: 'Login' }"
                class="
                  cursor-pointer
                  font-semibold
                  hover:text-red-500
                  text-green-300
                  mr-4
                "
                @click.prevent="handleLogout"
                >Đăng xuất
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>

<script>
import { mapState, mapActions } from "pinia";
import { useAuthStore } from "@/stores/auth.store";

export default {
  name: "HeaderCom",
  computed: {
    ...mapState(useAuthStore, {
      currentUser: "user",
    }),
  },
  methods: {
    ...mapActions(useAuthStore, ["logout", "loadAuthState"]),

    handleLogout() {
      this.logout();
      this.$router.push({ name: "login" });
    },
  },
  created() {
    this.loadAuthState();
  },
};
</script>