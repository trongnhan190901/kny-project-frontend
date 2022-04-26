<template>
  <div class="h-screen">
    <div
      class="
        w-full
        h-full
        bg-[url('../../public/media/img/bg-img.jpeg')]        
      "
    >
    <img src="../../public/media/img/bg-deco.png" alt="" class="absolute right-0 bottom-0 opacity-50">
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
        <Form
          @submit="handleLogin"
          :validation-schema="loginFormSchema"
          class=" w-1/2 h-[500px] backdrop-opacity-20 backdrop-invert text-xl rounded-lg"
        >
		<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
			<div class="mb-6 h-12">			 
            <Field
              name="username"
              type="text"
              class="w-60 h-9 px-3 rounded-lg left-1/2 -translate-x-1/2 absolute"
              placeholder="Tên đăng nhập"
            />
			<br>
            <ErrorMessage name="username" class="text-white left-1/2 -translate-x-1/2 absolute w-80 text-center top-9"/>
          </div>
          <div class="mb-6 h-12">
            
            <Field
              name="password"
              type="password"
              class=" w-60 h-9 px-3 rounded-lg left-1/2 -translate-x-1/2 absolute"
              placeholder="Mật khẩu"
            />
			<br>
            <ErrorMessage name="password" class="text-white left-1/2 -translate-x-1/2 absolute w-80 text-center top-28" />
          </div>
          <div class=" mt-6">
            <button class=" w-full" :disabled="loading">
              <span
                v-show="loading"
               
              ></span>
              <span class="flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-pink-500 to-red-400 hover:from-red-600 hover:to-red-500 active:from-red-600 active:to-red-800 focus-visible:ring ring-pink-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-2 mx-2">Đăng nhập</span>
            </button>
          </div>
          <div class="text-white mt-6 left-1/2 -translate-x-1/2 absolute w-80 text-center">
            Chưa có tài khoản ?            
          <router-link :to="{ name: 'Register' }" class="text-white mt-6 hover:text-red-500">Đăng ký</router-link>
          </div>
		</div>
          

         
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { mapActions } from "pinia";
import { useAuthStore } from "@/stores/auth.store";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const loginFormSchema = yup.object().shape({
      username: yup.string().required("Tên đăng nhập phải có giá trị."),
      password: yup.string().required("Mật khẩu phải có giá trị."),
    });

    return {
      loading: false,
      message: "",
      loginFormSchema,
    };
  },
  methods: {
    ...mapActions(useAuthStore, ["login"]),

    async handleLogin(user) {
      this.loading = true;

      try {
        await this.login(user);

        const redirectPath = this.$route.query.redirect || {
          name: "Home",
        };

        this.$router.push(redirectPath);
      } catch (error) {
        console.log(error);

        this.loading = false;
        this.message = "Đã có lỗi xảy ra.";
      }
    },
  },
};
</script>

<style scoped>
</style>
