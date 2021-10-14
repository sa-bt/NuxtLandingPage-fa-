<template>
  <div class="ml-4">
    <button v-show="nextMode == 'dark'" class="btn btn-secondary leading-0" @click="toDarkMode">
      <i class="fas fa-moon"></i>
    </button>
    <button v-show="nextMode == 'light'" class="btn btn-secondary leading-0" @click="toLightMode">
      <i class="fas fa-sun"></i>
    </button>
    <button v-show="nextMode == 'system'" class="btn btn-secondary leading-0" @click="toSystemMode">
      <i class="fas fa-desktop"></i>
    </button>
    <button v-show="nextMode == 'sepia'" class="btn btn-secondary leading-0" @click="toSepiaMode">
      <i class="fas fa-coffee"></i>
    </button>
  </div>
  <!--  <div>-->
  <!--    <li-->
  <!--      v-for="color of colors"-->
  <!--      :key="color"-->
  <!--      @click="$colorMode.preference = color"-->
  <!--    >{{color}}</li>-->

  <!--  </div>-->

  <!--  <div>-->
  <!--    <h1>Color mode: {{ $colorMode.value }}</h1>-->
  <!--    <select v-model="$colorMode.preference">-->
  <!--      <option value="system">System</option>-->
  <!--      <option value="light">Light</option>-->
  <!--      <option value="dark">Dark</option>-->
  <!--      <option value="sepia">Sepia</option>-->
  <!--    </select>-->
  <!--  </div>-->
</template>
<script>
    export default {
        name: "ColorModePicker",
        data() {
            return {
                nextMode: 'dark'
            }
        },
        methods: {
            toDarkMode() {
                this.$colorMode.preference = 'dark';
                this.nextMode = 'system'
            },
            toLightMode() {
                this.$colorMode.preference = 'light';
                this.nextMode = 'dark'
            },
            toSystemMode() {
                console.log(window.matchMedia('(prefers-color-scheme:dark)').matches)
                this.$colorMode.preference = window.matchMedia('(prefers-color-scheme:dark)').matches ?  'dark'
                    : 'light';

                this.nextMode = 'sepia'
            },
            toSepiaMode() {
                this.$colorMode.preference = 'sepia';
                this.nextMode = 'light'

            },
        }
    }
</script>

<style>
  /*  body {*/
  /*  background-color: #fff;*/
  /*  color: rgba(0,0,0,0.8);*/
  /*}*/
  /*.dark-mode body  p {*/
  /*  background-color: #091a28;*/
  /*  color: #ebf4f1;*/
  /*}*/
  /*.sepia-mode body {*/
  /*  background-color: #f1e7d0;*/
  /*  color: #433422;*/
  /*}*/
</style>
