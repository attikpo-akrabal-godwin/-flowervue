import { ref,reactive, computed } from 'vue'
import { parse, stringify } from 'zipson'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('productsStore', () => {
    const selectedProductId = ref(undefined)
    const canshowModal = ref(false)
    const products = reactive([
        {id:1,name:"cool",price:17.00,reduction:{type:1,prcent:14},isnewProduct:true,isTopProduct:false,photo:1,isChecked:false},
        {id:2,name:"cool",price:17.00,reduction:{type:2,prcent:14},isnewProduct:true,isTopProduct:false,photo:2,isChecked:false},
        {id:3,name:"cool",price:17.00,reduction:{type:2,prcent:14},isnewProduct:true,isTopProduct:false,photo:3,isChecked:false},
        {id:4,name:"cool",price:17.00,reduction:{type:1,prcent:14},isnewProduct:true,isTopProduct:false,photo:4,isChecked:false},
        {id:5,name:"cool",price:17.00,reduction:{type:1,prcent:14},isnewProduct:true,isTopProduct:false,photo:5,isChecked:false},
        {id:6,name:"cool",price:17.00,reduction:{type:1,prcent:14},isnewProduct:true,isTopProduct:false,photo:6,isChecked:false},
        {id:7,name:"cool",price:17.00,reduction:{type:2,prcent:14},isnewProduct:true,isTopProduct:false,photo:7,isChecked:false},
        {id:8,name:"cool",price:17.00,reduction:{type:1,prcent:14},isnewProduct:true,isTopProduct:false,photo:8,isChecked:false},
        
        {id:8,name:"cool",price:17.00,reduction:{type:2,prcent:14},isnewProduct:false,isTopProduct:true,photo:5,isChecked:false},
        {id:9,name:"cool",price:17.00,reduction:{type:1,prcent:14},isnewProduct:false,isTopProduct:true,photo:6,isChecked:false},
        {id:10,name:"cool",price:17.00,reduction:{type:2,prcent:14},isnewProduct:false,isTopProduct:true,photo:7,isChecked:false},
        {id:11,name:"cool",price:17.00,reduction:{type:1,prcent:14},isnewProduct:false,isTopProduct:true,photo:8,isChecked:false},
        {id:10,name:"cool",price:17.00,reduction:{type:2,prcent:14},isnewProduct:false,isTopProduct:true,photo:7,isChecked:false},
        {id:11,name:"cool",price:17.00,reduction:{type:1,prcent:14},isnewProduct:false,isTopProduct:true,photo:8,isChecked:false},
        {id:10,name:"cool",price:17.00,reduction:{type:2,prcent:14},isnewProduct:false,isTopProduct:true,photo:7,isChecked:false},
        {id:11,name:"cool",price:17.00,reduction:{type:1,prcent:14},isnewProduct:false,isTopProduct:true,photo:8,isChecked:false},

    ])

    const newArrivalProducts = computed(() => {
        return products.filter((product)=>product.isnewProduct)
    })
    
    const TopProducts =  computed(() => {
        return products.filter((product)=>product.isTopProduct)
    })

    const selectedProduct = computed(()=>{
        return products.filter((product)=>{
            return product.id===selectedProductId.value
        })
    })

    const selectedProductList = computed(()=>{
        return products.filter((product)=>{
            return product.isChecked
        })
    })


    function selectProduct(id){
        products.map((product)=>{
            if (product.id===id) {
                product.isChecked = true
            }
        })
    }

    function deselectProduct (id){
        products.map((product)=>{
            if (product.id===id) {
                product.isChecked = false
            }
        })
    }

    function toggle(id) {
        if (id) {
            selectedProductId.value = id 
            selectProduct(id)
        }
        canshowModal.value = !canshowModal.value
    }

    return {
        newArrivalProducts,
        TopProducts,
        canshowModal,
        selectedProduct,
        selectedProductList,
        deselectProduct,
        toggle
    }
})
