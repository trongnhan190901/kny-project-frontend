<template>
<div class="font-sans min-w-full m-0 fixed top-0 left-0 z-10 my-auto leading-10 ">
	<div class="bg-transparent leading-10">
    <div class="container mx-auto">
      <div class="flex items-center justify-between h-28">
        <router-link :to="{name: 'Home'}" class="relative top-10 left-0 leading-10">          
          <img class="h-40 " src="../../public/media/img/logo.png" alt="logo">     
        </router-link>
        <div class=" sm:flex sm:items-center text-2xl top-7">        
          <div class="dropdown cursor-pointer text-gray-400 font-semibold hover:text-red-500 mr-4 hover:bg-none inline-block relative ">Anime
            <ul class="dropdown-menu w-28 absolute top-full -left-5 hidden">
              <li>
                <router-link :to="{}" class="block cursor-pointer text-gray-400 font-semibold hover:text-red-500 hover:bg-none whitespace-no-wrap">TV Series</router-link>
              </li>
              <li>
                <router-link :to="{}" class="block cursor-pointer text-gray-400 font-semibold hover:text-red-500 hover:bg-none whitespace-no-wrap">Movie</router-link>  
              </li>
            </ul>          
          </div>     
          <router-link :to="{name: 'Manga'}" class="cursor-pointer text-gray-400 font-semibold hover:text-red-500 mr-4">Manga</router-link>         
          <router-link :to="{name: 'Character'}" class="cursor-pointer text-gray-400 font-semibold hover:text-red-500 mr-4">Nhân vật</router-link>
          <router-link :to="{name: 'Author'}" class="cursor-pointer text-gray-400 font-semibold hover:text-red-500 mr-4">Tác giả</router-link>
          <router-link :to="{name: 'About'}" class="cursor-pointer text-gray-400 font-semibold hover:text-red-500">Về chúng tôi</router-link>
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
export default {
    name: "HeaderCom"
}
</script>