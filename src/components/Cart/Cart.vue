<script setup>
import { ref,computed } from 'vue';
import CartProduct from './CartProduct.vue';
import { useProductStore } from '../../stores/products';
import {RouterLink} from 'vue-router'

    const store = useProductStore()

    const Tab = ref([])

    const modifCartTab= (i,nbr)=>{
        Tab.value[i]= nbr
    }

    const  supCartTab = (i)=>{
        Tab.value[i]= 0
    }

    const sumTab = computed(()=>{
        let sum = 0
        Tab.value.forEach((nbr)=>{
            sum+=nbr
        })
        return sum
    })

</script>

<template>
    <div class="liton__shoping-cart-area mb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="shoping-cart-inner">
                        <div class="shoping-cart-table table-responsive">
                            <table class="table">
                                <tbody>
                                    <CartProduct v-for="(product,i) in store.selectedProductList" :key="product.id" :i="i" :product="product" :modifCartTab="modifCartTab" :supCartTab="supCartTab" />
                                </tbody>
                            </table>
                        </div>
                        <div class="shoping-cart-total mt-50">
                            <h4>Cart Totals</h4>
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>Cart Subtotal</td>
                                        <td>${{ sumTab }}</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping and Handing</td>
                                        <td>$00.00</td>
                                    </tr>
                                    <tr>
                                        <td>Vat</td>
                                        <td>$00.00</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Order Total</strong></td>
                                        <td><strong>${{ sumTab }}</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="btn-wrapper text-right">
                                <router-link class="theme-btn-1 btn btn-effect-1" to="/">Proceed to checkout</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>