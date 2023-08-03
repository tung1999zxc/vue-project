const state = {
  isAuthenticated: localStorage.getItem('token'),
  userinfo:{'id':1},
  
  // Các thông tin người dùng khác nếu cần
};

const getters = {
  isAuthenticated: state => state.isAuthenticated,
  userinfo: state => state.userinfo,
  
  // Các getters khác nếu cần
};
  const mutations = {
    SET_AUTHENTICATED(state, value) {
      state.isAuthenticated = value;
    },
    SET_USERINFO(state, value) {
      state.userinfo = value;
    },
    // Các mutations khác nếu cần
  };
  import axios from 'axios';
  import router from '../router/index'; 
  const actions = {
    login({ commit }, { username, password }) {
    
      axios.post('https://api.tranhai.net/api/auth/login', {
      username: username,
      password: password
    })
    .then(response => {
      const data = response.data;
      localStorage.setItem('token', data.access_token);
      commit('SET_AUTHENTICATED', localStorage.getItem('token'));

      axios.get('https://api.tranhai.net/api/userinfo/me',
      {
        headers: {
          Authorization: 'Bearer' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiJkNzFmODc5Yy05OGQ4LTQ3M2UtYTFkZS1lNGI1NWViOGQzNWIiLCJuYW1laWQiOiJoYWl0diIsImVtYWlsIjoidHV5ZXRkZW4wOUBnbWFpbC5jb20iLCJyb2xlIjoiY2RkMzY4MTEtZGNkMS00YzgyLWI3NTktOTMwZmYxYzZhOTJiIiwibmJmIjoxNjkxMDMzNTQzLCJleHAiOjE2OTE2MzgzNDMsImlhdCI6MTY5MTAzMzU0M30.9gER5y7YeeglUx6isFOZ9DP2z867A0A-lSCakdoxSlQ', // Gửi token của người dùng để xác thực yêu cầu
        }})
      .then(response=>{
        commit('SET_USERINFO', response.data);
        alert(userinfo);
      })
      .catch(error =>{
        alert('lấy thông tin thất bại');
      })
      

      // console.log(data)  
      // this.token = data.access_token; 
    })
    .catch(error => {
      // Xử lý lỗi đăng nhập
      console.error(error);
      
      alert('Đăng nhập thất bại!');
      
    });

    // if (isAuthenticated){
    //   axios.get('https://api.tranhai.net/api/userinfo/me',
    //   {
    //     headers: {
    //       Authorization: 'Bearer ' + eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiJkNzFmODc5Yy05OGQ4LTQ3M2UtYTFkZS1lNGI1NWViOGQzNWIiLCJuYW1laWQiOiJoYWl0diIsImVtYWlsIjoidHV5ZXRkZW4wOUBnbWFpbC5jb20iLCJyb2xlIjoiY2RkMzY4MTEtZGNkMS00YzgyLWI3NTktOTMwZmYxYzZhOTJiIiwibmJmIjoxNjkxMDMzNTQzLCJleHAiOjE2OTE2MzgzNDMsImlhdCI6MTY5MTAzMzU0M30.9gER5y7YeeglUx6isFOZ9DP2z867A0A-lSCakdoxSlQ, // Gửi token của người dùng để xác thực yêu cầu
    //     }})
    //   .then(response=>{
    //     commit('SET_USERINFO', response.data);
    //     alert(userinfo);
    //   })
    //   .catch(error =>{
    //     alert('lấy thông tin thất bại');
    //   })
    // }

        },

       
      logout({ commit }) {
        localStorage.removeItem('token');
          commit('SET_AUTHENTICATED', localStorage.getItem('token'));
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