const state = {
  isAuthenticated: null,
  
  // Các thông tin người dùng khác nếu cần
};

const getters = {
  isAuthenticated: state => state.isAuthenticated,
  // Các getters khác nếu cần
};
  const mutations = {
    setAuth(state, value) {
      state.isAuthenticated = value;
    },
    // Các mutations khác nếu cần
  };
  
  const actions = {
    // Các actions liên quan đến đăng nhập và xác thực nếu cần
  };
  
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
  };