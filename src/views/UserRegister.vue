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
          @submit="handleRegister"
          :validation-schema="registerFormSchema"
          class=" w-1/2 h-[500px] backdrop-opacity-20 backdrop-invert rounded-lg text-xl"
        >
          <div
            v-if="!successful"
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
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
                name="email"
                type="email"
                class="w-60 h-9 px-3 rounded-lg left-1/2 -translate-x-1/2 absolute"
                placeholder="E-mail"
              />
			  <br>
              <ErrorMessage name="email" class="text-white left-1/2 -translate-x-1/2 absolute w-80 text-center top-28" />
            </div>
            <div class="mb-6 h-12">
            
            <Field
              name="password"
              type="password"
              class=" w-60 h-9 px-3 rounded-lg left-1/2 -translate-x-1/2 absolute"
              placeholder="Mật khẩu"
            />
			<br>
            <ErrorMessage name="password" class="text-white left-1/2 -translate-x-1/2 absolute w-80 text-center top-[184px]" />
          </div>

            <div class="form-group">
              <button class="btn btn-primary btn-block" :disabled="loading">
                <span
                  v-show="loading"
                  class="spinner-border spinner-border-sm"
                ></span>
                 <span class="flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-pink-500 to-red-400 hover:from-red-600 hover:to-red-500 active:from-red-600 active:to-red-800 focus-visible:ring ring-pink-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-2 mx-2">Đăng ký</span>
              </button>
            </div>
          </div>
          <div
          v-if="message"
          class="alert text-white absolute bottom-12 left-1/2  -translate-y-1/2 -translate-x-1/2"
          :class="successful ? 'alert-success' : 'alert-danger'"
        >
          {{ message }}
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
    const registerFormSchema = yup.object().shape({
      username: yup
        .string()
        .required("Tên đăng nhập phải có giá trị.")
        .min(3, "Tên phải ít nhất 2 ký tự.")
        .max(20, "Tên tối đa có 20 ký tự."),
      email: yup
        .string()
        .required("E-mail phải có giá trị.")
        .email("E-mail không đúng.")
        .max(50, "E-mail tối đa 50 ký tự."),
      password: yup
        .string()
        .required("Mật khẩu phải có giá trị.")
        .min(6, "Mật khẩu tối thiểu 6 ký tự.")
        .max(40, "Mật khẩu tối đa 40 ký tự."),
    });

    return {
      successful: false,
      loading: false,
      message: "",
      registerFormSchema,
    };
  },
  methods: {
    ...mapActions(useAuthStore, ["register"]),
    async handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;

      try {
        const data = await this.register(user);

        this.message = data.message;
        this.successful = true;
        this.loading = false;
      } catch (error) {
        console.log(error);

        this.message = "Đã có lỗi xảy ra.";
        this.successful = false;
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
</style>
