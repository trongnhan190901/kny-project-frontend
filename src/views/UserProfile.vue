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
	<div v-if="currentUser" class=" w-1/2 h-[350px] backdrop-opacity-20 backdrop-invert text-xl rounded-lg text-white">
	<div class="w-4/5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 break-words">
		<header class="text-3xl">
			<h3>
				Thông tin người dùng
				<strong>{{ currentUser.username }}</strong>
			</h3>
		</header>
		<div class="row">
			<div class="col-md-8">
				<p class="text-break">
					<strong>Token:</strong>
					{{ currentUser.accessToken }}
				</p>
				<p>
					<strong>Id:</strong>
					{{ currentUser._id }}
				</p>
				<p>
					<strong>E-mail:</strong>
					{{ currentUser.email }}
				</p>
			</div>
		</div>
	</div>
	</div>
	</div>
	
	</div>
</div>
</template>

<script>
import { mapState } from "pinia";
import { useAuthStore } from "@/stores/auth.store";

export default {
	computed: {
		...mapState(useAuthStore, {
			currentUser: "user",
		}),
	},
	created() {
		if (!this.currentUser) {
			this.$router.push({ name: "login" });
		}
	},
};
</script>
