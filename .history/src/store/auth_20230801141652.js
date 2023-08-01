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
  
  const actions = {
    login({ commit }) {
      
       commit('SET_AUTHENTICATED', localStorage.getItem('token'));
        },
        
       
       
      logout({ commit }) {
          // Perform logout logic and set isAuthenticated to false
          commit('SET_AUTHENTICATED', null);
        },

  };
  
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
  };