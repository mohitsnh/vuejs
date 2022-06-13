<template >
    <button class=" h-8  shadow-ll   w-[200px] hover:scale-110 duration-200 " :class="color ,rounded ,margin" >Request for Demo</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const props=defineProps({
    color:String,
    rounded:String,
    margin:String
})


</script>