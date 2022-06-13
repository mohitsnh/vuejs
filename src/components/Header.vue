<template>
<div class="w-full overflow-hidden md:flex">
    <!-- left view-->
    <div class=" h-[40vh] w-screen md:w-1/2 md:h-[500px]">
        <div class="flex  flex-col justify-evenly items-center h-full w-full mx-2  ">
            <h1 class=" break-words ">
                <b class="text-fuchsia-600 ">Pacific</b> Centralised Data Center in Raw
            </h1>
            <p class=" break-words ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, fugit non suscipit quos aliquid eum! Eius, reprehenderit? Blanditiis omnis deserunt, nobis quam quidem consectetur perspiciatis illum voluptatem ipsum, magni ipsam.</p>
            <div class="flex flex-col h-20 justify-between md:flex-row md:justify-evenly md:w-full">
                <ButtonContainer rounded="rounded-[50px]" color="bg-pink-800"></ButtonContainer>
                <ButtonContainer  rounded="rounded-[50px]" color="bg-puple-800" ></ButtonContainer>
            </div>
        </div>
    </div>
    <!-- right view>-->
    <div class=" h-[25vh] w-screen bg-red-300 mx-2 md:w-1/2 md:h-[500px] md:bg-white md:relative ">
        <img :src="stats" class="h-full w-full object-cover object-center md:object-contain md:pl-4" />
        <img :src="play" class=" md:absolute md:left-1/2 md:top-48"/>
    </div>
</div>


</template>

<script setup lang="ts">
import { ref } from 'vue'
import ButtonContainer from './ButtonContainer.vue';
import stats from '../assets/stats.png'
import play from '../assets/play.png'



</script>
