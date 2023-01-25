<script setup>
import { useProductStore } from '../../stores/products';
import {RouterLink} from 'vue-router'
const  store = useProductStore()
const  product = store.selectedProduct
</script>

<template>
    <div class="ltn__modal-area ltn__add-to-cart-modal-area">
            <div class="modal fade show" id="add_to_cart_modal" tabindex="-1" aria-modal="true" role="dialog" style="display: block; padding-left: 0px;">
                <div class="modal-dialog modal-md" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span @click="store.toggle" aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="ltn__quick-view-modal-inner">
                                <div class="modal-product-item">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="modal-add-to-cart-content clearfix">
                                                <div class="modal-product-img">
                                                    <img :src='`img/product/${product[0]?.photo}.png`' alt="#">
                                                </div>
                                                <div class="modal-product-info">
                                                    <h5><a href="product-details.html">Heart's Desire</a></h5>
                                                    <p class="added-cart"><i class="fa fa-check-circle"></i>  Successfully added to your Cart</p>
                                                    <div class="btn-wrapper">
                                                        <router-link class="theme-btn-1 btn btn-effect-1" to="/cart">View Cart</router-link>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- additional-info -->
                                            <div class="additional-info d-none--">
                                                <p>We want to give you <b>10% discount</b> for your first order, <br>  Use (fiama10) discount code at checkout</p>
                                                <div class="payment-method">
                                                    <img src="img/icons/payment.png" alt="#">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal-backdrop fade show"></div>
</template>

<style>

</style>