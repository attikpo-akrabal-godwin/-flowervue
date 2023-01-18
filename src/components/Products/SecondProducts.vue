<script setup>
import Product from './Product.vue';
import ProductLine from './ProductLine.vue';
</script>

<template>
    <div class="ltn__product-slider-area ltn__product-gutter  pt-60 pb-40">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-area text-center">
                        <h1 class="section-title section-title-border">top products</h1>
                    </div>
                </div>
            </div>
            <div class="row ltn__product-slider-item-four-active slick-arrow-1 slick-initialized slick-slider"><a class="slick-prev slick-arrow" style=""><i class="icon-arrow-left" alt="Arrow Icon"></i></a>
                <!-- ltn__product-item -->
                <div aria-live="polite" class="slick-list draggable">
                    <div class="slick-track" style="opacity: 1; width: 3939px; transform: translate3d(-1212px, 0px, 0px);" role="listbox">
                        <ProductLine/>
                        <ProductLine/>
                        <ProductLine/>
                        <ProductLine/>
                        <ProductLine/>
                        <ProductLine/>
                        <ProductLine/>
                        <ProductLine/>
                        <ProductLine/>
                    </div>
            </div>
                <!-- ltn__product-item -->
                
                <!-- ltn__product-item -->
                
                <!-- ltn__product-item -->
                
                <!-- ltn__product-item -->
                
            <a class="slick-next slick-arrow" style=""><i class="icon-arrow-right" alt="Arrow Icon"></i></a></div>
        </div>
    </div>
</template>