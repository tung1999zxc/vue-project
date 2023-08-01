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
  import { useRouter } from 'vue-router';
  import router from '../router'; 
  const actions = {
    login({ commit }, { username, password }) {
    
      axios.post('https://api.tranhai.net/api/auth/login', {
      username: username,
      password: password
    })
    .then(response => {
      const data = response.data;
      localStorage.setItem('token', data.access_token);
      commit('SET_AUTHENTICATED', true)
     
      alert('Đăng nhập thành công');
      
      // this.$router.push('/');
      
      // console.log(data)  
      // this.token = data.access_token; 
    })
    .catch(error => {
      // Xử lý lỗi đăng nhập
      console.error(error);
      alert('Đăng nhập thất bại!');
    });

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