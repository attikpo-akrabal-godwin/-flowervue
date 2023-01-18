<script setup >
import Blog from './Blog.vue';
</script>

<template>
    <div class="ltn__blog-area  pt-60 pb-30">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-area text-center">
                        <h1 class="section-title section-title-border">latest news</h1>
                    </div>
                </div>
            </div>
            <div class="row ltn__blog-slider-one-active slick-arrow-1 slick-initialized slick-slider"><a class="slick-prev slick-arrow" style=""><i class="icon-arrow-left" alt="Arrow Icon"></i></a>
                <!-- Blog Item -->
                <div aria-live="polite" class="slick-list draggable">
                    <div class="slick-track" style="opacity: 1; width: 4444px; transform: translate3d(-1212px, 0px, 0px);" role="listbox">
                        <Blog/>
                        <Blog/>
                        <Blog/>
                        <Blog/>
                        <Blog/>
                        <Blog/>
                        <Blog/>
                        <Blog/>
                        <a class="slick-next slick-arrow" style=""><i class="icon-arrow-right" alt="Arrow Icon"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>