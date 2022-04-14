<template>
  <video autoplay loop muted class="fixed left-0 top-0 min-h-full min-w-full mx-auto opacity-40 z-0 -m-4">
    <source src="../../public/media/video/Intro.mp4" type="video/mp4" >
  </video>

  <div class="text-white w-[635px] fixed left-32 bottom-80">
    <div class="text-5xl text-center bottom-3">
     KIMETSU NO YAIBA
    </div>
    <div class="text-2xl text-justify pt-4">
     Vào thời Taisho, có một cậu bé bán than với tấm lòng nhân hậu tên là Tanjiro. Những ngày yên bình đã chẳng còn khi Quỷ đến tàn sát cả gia đình cậu, chỉ duy nhất người em gái Nezuko còn sống nhưng lại bị biến thành Quỷ. Mang trong mình quyết tâm chữa cho em gái, Tanjiro cùng Nezuko bắt đầu cuộc hành trình tìm kiếm tung tích con quỷ đã ra tay với gia đình mình !!
    </div>
    <div class="flex items-center justify-center top-4 flex-wrap pt-4">
      <router-link :to="{}" class="flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-pink-500 to-red-400 hover:from-red-600 hover:to-red-500 active:from-red-600 active:to-red-800 focus-visible:ring ring-pink-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-2 mx-2">
        Xem Anime
      </router-link>
      <router-link :to="{name: 'Manga'}" class="flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-pink-500 to-red-400 hover:from-red-600 hover:to-red-500 active:from-red-600 active:to-red-800 focus-visible:ring ring-pink-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-2 mx-2">
        Xem Manga
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: 'HomeCom'
}
</script>