<template>
    <!-- <form @submit.prevent="handleSubmit">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="formData.username" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="formData.password" required />
      </div>
      <button type="submit">Register</button>
    </form> -->
    <div class="container-fluid">
      <div class=" row justify-content-center ">
        <div class="col-6 bg-light ">
          <form @submit.prevent="handleSubmit" class="form-bt" action="" >
            <h1 class="h3 text-uppercase text-center my-3">đăng kí tài khoản</h1>
          
            <div class="form-group label-absolute">
              <input v-model="username" class="form-control" type="text" required>
              <label for="">Tên đăng nhập</label>
            </div>
            <div class="form-group label-absolute">
              <input v-model="password" class="form-control" type="text" required>
              <label for="">Mật khẩu</label>
            </div>
            <div class="form-group label-absolute" >
              <input v-model="email" class="form-control" type="text" required>
              <label for="">Email</label>
            </div>
            <div class="form-group">
              <label class="" for="gt" style="margin-top: 1px; margin-left: -3px; background:none;">Giới tính</label><br>
                <div class="form-check-inline ">
                  <input type="radio" class="form-check-input" name="gt" id="gt" value="checkedValue" >
                  nam
                  <input type="radio" class="form-check-input ml-2" name="gt" id="gt" value="checkedValue" >
                  nữ
                </div>
               
                <div class="form-group mt-3">
                  <input class="form-control" type="text">
                  <label for="">Địa chỉ</label>
                </div>
  
                <button class="btn bg-primary text-white btn-block">đăng kí</button>
            
                  
                
                
                   
                  
                
              
            </div>
          </form>
        </div>
      </div>
  
    </div>
  
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          username: '',
          email: '',
          password: '',
        },
      };
    },
    methods: {
      handleSubmit() {
        // Xử lý thông tin đăng kí, gửi đến máy chủ hoặc lưu vào cơ sở dữ liệu
        console.log('Form data:', this.formData);
        // Reset form sau khi submit thành công (tùy chọn)
        this.formData = {
          username: '',
          email: '',
          password: '',
        };
      },
    },
  };
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
  }
  
  div {
    margin-bottom: 10px;
  }
  
  label {
    font-weight: bold;
  }
  
  input {
    padding: 5px;
  }
  </style>
  