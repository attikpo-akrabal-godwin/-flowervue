import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const piniaStore = createPinia()

piniaStore.use(piniaPluginPersistedstate)
export default piniaStore