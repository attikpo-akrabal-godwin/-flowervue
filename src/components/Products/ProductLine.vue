<script setup >
    import { useProductStore } from '../../stores/products';
    const props = defineProps(['product'])
    const store = useProductStore()
</script>

<template>
        <div class="col-12 slick-slide slick-cloned" data-slick-index="1" id="" aria-hidden="false" style="width: 303px;" tabindex="-1">
            <div class="ltn__product-item text-center">
                <div class="product-img">
                    <a href="product-details.html" tabindex="-1"><img :src='`img/product/${product.photo}.png`' alt="#"></a>
                    <div class="product-badge">
                        <ul>
                            <li :class='`badge-${product.reduction.type}`' >{{product.reduction.prcent}}%</li>
                        </ul>
                    </div>
                    <div class="product-hover-action product-hover-action-2">
                        <ul>
                            <li>
                                <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal" tabindex="-1">
                                    <i class="icon-magnifier"></i>
                                </a>
                            </li>
                            <li class="add-to-cart">
                                <a href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal" tabindex="-1">
                                    <span @click.prevent="store.toggle(product.id)" class="cart-text d-none d-xl-block">Add to Cart</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal" tabindex="-1">
                                    <i class="icon-shuffle"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="product-info">
                    <h2 class="product-title"><a href="product-details.html" tabindex="-1">Premium Joyful</a></h2>
                    <div class="product-price">
                        <span>$18.00</span>
                    </div>
                </div>
            </div>
        </div>
</template>