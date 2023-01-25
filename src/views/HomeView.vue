<script setup>
import Header from "@/components/Header/index.vue"
import Footer from "@/components/Footer/index.vue"
import Slider from "@/components/Slider/index.vue"
import FirstBanner from "@/components/Banner/FirstBanner.vue"
import SecondBanner from "@/components/Banner/SecondBanner.vue"
import FirstProducts from "@/components/Products/FirstProducts.vue"
import SecondProducts from "@/components/Products/SecondProducts.vue"
import ThirdBanner from "@/components/Banner/ThirdBanner.vue"
import Blog from "@/components/blog/index.vue"
import BrandLogo from "@/components/BrandLogo/index.vue"
import AddCardModal from "@/components/modals/AddCardModal.vue"
import {useProductStore} from "../stores/products"
const  store = useProductStore()

</script>

<template>
    <Header/>
    <Slider/>
    <FirstBanner/>
    <FirstProducts/>
    <SecondBanner/>
    <SecondProducts/>
    <ThirdBanner/>
    <Blog/>
    <BrandLogo/>
    <Footer/> 
    <AddCardModal v-if="store.canshowModal"/> 
</template>
