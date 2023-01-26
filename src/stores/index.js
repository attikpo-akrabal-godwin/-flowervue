import { createPinia } from "pinia";
import createPersistedState from 'pinia-persistedstate'
import SecureLS from "secure-ls";

const piniaStore = createPinia()
let ls = new SecureLS({
	encodingType: 'aes',
	isCompression: false,
	encryptionSecret: '233eb4dc-d5f9-4fea-9cef-897cb3f3f678',
})

piniaStore.use(createPersistedState({
    key:'productsStore',
    /* storage:{
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
    } */
}))
export default piniaStore