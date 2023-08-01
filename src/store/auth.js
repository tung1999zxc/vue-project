const state = {
    isAuthenticated: false,
    // Các thông tin người dùng khác nếu cần
  };
  
  const mutations = {
    SET_AUTHENTICATED(state, value) {
      state.isAuthenticated = value;
    },
    // Các mutations khác nếu cần
  };
  
  const actions = {
    // Các actions liên quan đến đăng nhập và xác thực nếu cần
  };
  
  const getters = {
    isAuthenticated: state => state.isAuthenticated,
    // Các getters khác nếu cần
  };
  
  export default {
    state,
    mutations,
    actions,
    getters,
  };