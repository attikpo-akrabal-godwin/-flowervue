<script setup>
import { useProductStore } from '../../stores/products';
const props = defineProps(['product'])
const store = useProductStore()
 
</script>

<template>
    <!-- ltn__product-item -->
    <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div class="ltn__product-item text-center">
                        <div class="product-img">
                            <a href="product-details.html"><img :src="`img/product/${product.photo}.png`" alt="#"></a>
                            <div class="product-badge">
                                <ul>
                                   <li :class='`badge-${product.reduction.type}`' >{{product.reduction.prcent}}%</li> 
                                </ul>
                            </div>
                            <div class="product-hover-action product-hover-action-2">
                                <ul>
                                    <li>
                                        <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                            <i class="icon-magnifier"></i>
                                        </a>
                                    </li>
                                    <li class="add-to-cart">
                                        <a href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
                                            <span @click.prevent="store.toggle(product.id)" class="cart-text d-none d-xl-block">Add to Cart</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                            <i class="icon-shuffle"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="ltn__product-countdown">
                                <div class="ltn__countdown" data-countdown="2021/12/25">
                                    <div class="single">
                                        <h1>00</h1>
                                        <p>Days</p>
                                    </div> 
                                    <div class="single">
                                        <h1>00</h1>
                                        <p>Hrs</p>
                                    </div> 
                                    <div class="single">
                                        <h1>00</h1>
                                        <p>Mins</p>
                                    </div> 
                                    <div class="single">
                                        <h1>00</h1>
                                        <p>Secs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="product-info">
                            <h2 class="product-title"><a href="product-details.html">Assorted Roses</a></h2>
                            <div class="product-price"><span>$17.00</span></div>
                        </div>
                    </div>
                </div>
</template>