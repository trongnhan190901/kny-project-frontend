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
          h-ful
          w-full
          left-1/2
          top-1/2
          -translate-x-1/2 -translate-y-1/2
        "
      >
        <div
          class="
            w-1/2
            h-[350px]
            backdrop-opacity-20 backdrop-invert
            text-xl
            rounded-lg
            text-white
          "
        >
          <div
            class="
              page
              text-6xl text-center
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2 -translate-y-1/2
              w-full
            "
          >
            <p>
              Oops,
              <br />
              không thể tìm thấy trang.
              <br />
              Trở về
              <router-link class="hover:text-red-500" to="/"
                ><b>trang chủ.</b>
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
