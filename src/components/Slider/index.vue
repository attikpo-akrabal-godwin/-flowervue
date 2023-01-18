<script setup >
import Feature from './Feature.vue';
import Slider1 from './Slider1.vue';
import slider2 from './slider2.vue';
</script>

<template>
    <!-- SLIDER AREA START (slider-6) -->
    <div class="ltn__slider-area ltn__slider-3 ltn__slider-6 section-bg-1">
        <div class="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1 arrow-white--- slick-initialized slick-slider slick-dotted" role="toolbar">
            <a class="slick-prev slick-arrow" style="">
                <i class="icon-arrow-left" alt="Arrow Icon"></i>
            </a>
            <!-- ltn__slide-item  -->
            <div aria-live="polite" class="slick-list draggable">
                <Slider1/>
            </div>
            <!-- ltn__slide-item  -->
            
            <!--  -->
            <a class="slick-next slick-arrow" style="">
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