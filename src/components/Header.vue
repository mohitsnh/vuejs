<template>
<div class="w-full overflow-hidden ">
    <!-- left view-->
    <div class=" h-[40vh] w-screen ">
        <div class="flex  flex-col justify-evenly items-center h-full w-full mx-2 ">
            <h1 class=" break-words ">
                <b class="text-fuchsia-600 ">Pacific</b> Centralised Data Center in Raw
            </h1>
            <p class=" break-words ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, fugit non suscipit quos aliquid eum! Eius, reprehenderit? Blanditiis omnis deserunt, nobis quam quidem consectetur perspiciatis illum voluptatem ipsum, magni ipsam.</p>
            <div class="flex flex-col h-20 justify-between">
                <ButtonContainer rounded="rounded-[50px]" color="bg-pink-800"></ButtonContainer>
                <ButtonContainer  rounded="rounded-[50px]" color="bg-puple-800" ></ButtonContainer>
            </div>
        </div>
    </div>
    <!-- right view>-->
    <div class=" h-[25vh] w-screen bg-red-300 mx-2">
        <img :src="stats" class="h-full w-full object-cover object-center" />
    </div>
</div>


</template>

<script setup lang="ts">
import { ref } from 'vue'
import ButtonContainer from './ButtonContainer.vue';
import stats from '../assets/stats.png'



</script>
