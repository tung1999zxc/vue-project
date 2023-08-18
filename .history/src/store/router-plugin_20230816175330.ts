import { useAuthStore } from './auth.js'; // Import store của bạn
import pinia from './pinia-instance'; // Import Pinia instance

export const routerPlugin = {
  install(app) {
    const authStore = useAuthStore(pinia);

    app.mixin({
      beforeRouteLeave(to, from, next) {
        // Lưu trạng thái của store vào Local Storage trước khi rời trang
        authStore.$state.$persist();

        next();
      },
    });
  },
};
