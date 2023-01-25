<script setup>
 import { ref,onMounted,computed } from 'vue';
import { useProductStore } from '../../stores/products';
 const store = useProductStore()
 const props = defineProps(['product','i','modifCartTab','supCartTab'])
 const nbr = ref(1)
 const prixTotal =  computed(()=>{
    props.modifCartTab(props.i,nbr.value * props.product.price)
    return nbr.value * props.product.price
})
 function increment(){
    nbr.value++
   
 }
 function decrement(){
    nbr.value--
 }
</script>

<template>
    <tr>
        <td class="cart-product-remove" 
        @click="()=>{
            supCartTab(i)
            store.deselectProduct(product.id)
        }"
        >x</td>
        <td class="cart-product-image">
            <a href="#"><img :src='`img/product/${product.photo}.png`' alt="#"></a>
        </td>
        <td class="cart-product-info">
            <h4><a href="#"> {{ product.name }}</a></h4>
        </td>
        <td class="cart-product-price">${{ product.price }}</td>
        <td class="cart-product-quantity">
            <div class="cart-plus-minus">
                <div class="dec qtybutton" @click="decrement"  style="cursor: pointer;">-</div>
                    <input type="text" :value="nbr" name="qtybutton" class="cart-plus-minus-box">
                <div class="inc qtybutton" @click="increment" style="cursor: pointer;">+</div>
            </div>
        </td>
        <td class="cart-product-subtotal">${{ prixTotal }}</td>
    </tr>
</template>