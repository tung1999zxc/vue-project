const state = {
  isAuthenticated: null,
  
  // Các thông tin người dùng khác nếu cần
};

const getters = {
  namespaced: true,
  isAuthenticated: state => state.isAuthenticated,
  // Các getters khác nếu cần
};
  const mutations = {
  namespaced: true,

    setAuth(state, value) {
      state.isAuthenticated = value;
    },
    // Các mutations khác nếu cần
  };
  
  const actions = {
    // Các actions liên quan đến đăng nhập và xác thực nếu cần
  };
  
  
  export default {
    state,
    mutations,
    actions,
    getters,
  };