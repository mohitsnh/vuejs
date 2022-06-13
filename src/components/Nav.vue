<template>
    <div class="w-screen h-10 flex items-center justify-between bg-gray-100 ">
        <div class="w-1/2 h-full flex flex-1 items-center">
            <router-link to="/vuejs" class="ml-2">
                <img :src="logo" class="w-full h-full"/>
            </router-link>
            <div class="pl-2 font-sans text-2xl pb-2 text-cyan-700">
                PACIFIC
            </div>
        </div>
        <div class="w-1/2 h-full flex flex-1 justify-end">

            <!--larger screens-->

            <div class="hidden md:h-full md:flex  items-center mr-3">
                <div class="p-3">
                    Features
                </div>
                <div class="p-3">
                    About 
                </div>
                <div class="p-3 ">
                    <ButtonContainer color="bg-pink-800" rounded="rounded-[50px]"></ButtonContainer>
                </div>
                <div class="">
                    <img :src="globe" class="h-full w-full"/>
                </div>

            </div>

            <!--smaller screens-->
            <div @click="enableToggle = !enableToggle" class="h-full w-10 mr-2 md:hidden">
                <img :src="toggle" class="w-full h-full"/>
            </div>
        </div>
        
    </div>
    <!-- toogle bar-->
    <div v-if="enableToggle" class=" h-[90px] w-screen bg-slate-400  md:hidden">
        <div class="pl-2">
            Features
        </div>
        <div class="pl-2">
            About
        </div>
        <div class=" text-center ">
          <ButtonContainer color="bg-pink-800" rounded="rounded-[50px]"></ButtonContainer>
        </div>
    </div>
</template>

<script lang="ts" setup>
import logo from "../assets/logo.png";
import globe from "../assets/globe.png";
import toggle from"../assets/toggle.png";
import ButtonContainer from "./ButtonContainer.vue";
import { ref } from "vue";



const enableToggle = ref(false);
console.log(enableToggle)
</script>

<!-- <div class="h-full basis-2/4   flex items-center">
            <router-link to="/" class="ml-9">
                <img :src="logo" class="w-full h-full" />
            </router-link>
        </div>

        <div class="w-full h-full flex   basis-2/4 items-center mr-8">
            <div class="w-full flex  items-center justify-end   ">
                <div class="font-normal p-3 ">Features</div>
                <div class=" p-3">About</div>
                <div class="p-3">Contact</div>
                <div class="p-3">

                    <ButtonContainer></ButtonContainer>
                </div>
                <div class="p-3 h-12 w-12">
                    <img :src="globe" class="w-full h-full ">
                </div>
            </div>
        </div> -->
