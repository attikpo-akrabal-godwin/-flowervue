<script setup >
import Feature from './Feature.vue';
import Slider1 from './Slider1.vue';
import slider2 from './slider2.vue';
import { ref,onMounted,onUnmounted } from 'vue'
const afficheFirstOrSecond = ref(true)
let intervalID
function changeSlide(){
    afficheFirstOrSecond.value = !afficheFirstOrSecond.value
}
onMounted(()=>{
    intervalID = setInterval(() => {
        changeSlide()
    }, 10000);
})

onUnmounted(()=>{
    clearInterval(intervalID)
})

</script>

<template>
    <!-- SLIDER AREA START (slider-6) -->
    <div class="ltn__slider-area ltn__slider-3 ltn__slider-6 section-bg-1">
        <div class="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1 arrow-white--- slick-initialized slick-slider slick-dotted" role="toolbar">
            <a class="slick-prev slick-arrow" @click.prevent="changeSlide" style="">
                <i class="icon-arrow-left" alt="Arrow Icon"></i>
            </a>
            <!-- ltn__slide-item  -->
            <div aria-live="polite" class="slick-list draggable">
                <Slider1 v-if="afficheFirstOrSecond"/>
                <slider2 v-else="afficheFirstOrSecond" />
            </div>
            <!-- ltn__slide-item  -->
            
            <!--  -->
            <a class="slick-next slick-arrow" style="" @click.prevent="changeSlide">
                <i class="icon-arrow-right" alt="Arrow Icon"></i>
            </a>
            <ul class="slick-dots" style="" role="tablist">
                <li class="slick-active" aria-hidden="false" role="presentation" aria-selected="true" aria-controls="navigation00" id="slick-slide00">
                    <button type="button" data-role="none" role="button" tabindex="0">1</button>
                </li>
                <li aria-hidden="true" role="presentation" aria-selected="false" aria-controls="navigation01" id="slick-slide01" class="">
                    <button type="button" data-role="none" role="button" tabindex="0">2</button>
                </li>
            </ul>       
        </div>
    </div>
    <!-- SLIDER AREA END -->
    <Feature/>

</template>

<style scoped>

</style>