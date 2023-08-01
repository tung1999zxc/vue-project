const state = {
  isAuthenticated: null,
  
  // Các thông tin người dùng khác nếu cần
};

const getters = {
  isAuthenticated: state => state.isAuthenticated,
  // Các getters khác nếu cần
};
  const mutations = {
    SET_AUTHENTICATED(state, value) {
      state.isAuthenticated = value;
    },
    // Các mutations khác nếu cần
  };
  import axios from 'axios';
  const actions = {
    login({ commit }) {
     
      
        },

       
      logout({ commit }) {
        localStorage.removeItem('token');
          commit('SET_AUTHENTICATED', false);
          alert('đăng xuất thành  công');
        },

  };
  
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
  };