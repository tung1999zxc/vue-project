import { createPinia } from 'pinia';
import { piniaPersist } from 'pinia-persist';

const pinia = createPinia();

// Sử dụng piniaPersist để lưu trạng thái vào Local Storage
pinia.use(piniaPersist({}));

export default pinia;
