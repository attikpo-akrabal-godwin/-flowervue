<script setup >
import Product from './Product.vue'
import { useProductStore } from '../../stores/products';
const store = useProductStore()
</script>

<template>
    <!-- PRODUCT AREA START -->
    <div class="ltn__product-area ltn__product-gutter  pt-65 pb-40">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-area text-center">
                        <h1 class="section-title section-title-border">new arrival items</h1>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <Product v-for="newProduct in store.newArrivalProducts " :key="newProduct.id" :product="newProduct"/>
            </div>
        </div>
    </div>
    <!-- PRODUCT SLIDER AREA END -->
</template>