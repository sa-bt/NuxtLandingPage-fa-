<template>
    <div class="flex justify-center items-center mt-52">
        <div class="w-full max-w-md">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="login">
                <div class="identity-input mb-4">
                    <label
                        for="identity"
                        class="block text-gray-700 text-sm font-bold mb-2"
                    >
                        ایمیل</label
                    >
                    <input
                        id="identity"
                        class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="your-account@site.domain"
                        aria-describedby="emailHelp"
                        v-model="form.email"
                    />
                    <span class="text-xs text-red-700" id="emailHelp" v-if="errors.email">{{errors.email[0]}}</span>
                </div>

                <div class="password-input mb-6">
                    <label
                        for="identity"
                        class="block text-gray-700 text-sm font-bold mb-2"
                    >رمز عبور</label
                    >

                    <input
                        aria-describedby="passwordHelp"
                        v-model="form.password"

                        class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="*******"
                    />

                    <span class="text-xs text-red-700" id="passwordHelp" v-if="errors.password">{{errors.password[0]}}</span>
                </div>

                <div class="flex items-center justify-between">
                    <button
                        class="bg-blue-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        ورود
                    </button>
                    <NuxtLink
                        class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        :to="{name:'auth-forgotPassword'}"
                    >
                        روز عبورتان را فراموش کرده اید؟
                    </NuxtLink>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                form: {
                    email: "",
                    password: "",
                },
                errors:[]
            };
        },
        methods: {
            // async login() {
            //     try {
            //         await this.$auth.loginWith('laravelSanctum', {data: this.form})
            //     } catch (e) {
            //         this.errors = e.response.data.errors
            //     }
            //     },
            login(){
                console.log('login')
            }
        },

    }
</script>

<style scoped>

</style>
