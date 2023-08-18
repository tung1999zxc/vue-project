<template>
  <div>
    <div class="row bg-light ">
        <div class="col-8">
          <h1>Danh sách User</h1>
        <table class="table table-striped table-dark">
          <thead>
          <tr>
            <td>Id</td> 
            <td>Name</td>
            <td>Slug</td>
            <td>CoverImages</td>
            <td>Description</td>
            <td>Website</td>
            <td>Chức năng</td>
          </tr>
        </thead>
          <tr v-for="book in books" :key="book.id" >
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><button @click="editUser(User)">Chỉnh sửa</button>
              <button @click="deleteUser(User.id)">Xóa</button></td>
          </tr >
    
        </table>
        
        </div>
    
        
          <div class="col-3 ">
            <h1 >Chỉnh sửa user</h1>
            <form accept-charset="UTF-8" >
              <label for="Name">Name</label>
              <input class="form-control" type="text" id="Name" v-model="editUser.Name"  required>
              <br>
              <label for="author">Slug</label>
              <input class="form-control" type="text" id="author" v-model="editUser.Slug"  required>
              
              <br>
              <!-- <label for="description">CoverImages</label>
              <input type="" class="form-control " id="description" v-model="editUser.CoverImages" >
              <br> -->
              <label for="author">Description</label>
              <input class="form-control" type="text" id="author" v-model="editUser.Description"  required>
              <br>
              <label for="author">Website</label>
              <input class="form-control" type="text" id="author" v-model="editUser.Website"  required>
              <br>
              <button class="btn-block bg-success" type="submit">Thêm User</button>
            
            </form>
          </div>
        </div>
    <button @click="handleSearch">tìm kiếm</button>
  </div>
  </template>
  
    
    <script>
  import axios from 'axios';
  
    
    export default {
      
      data() {
        return {
    users: [],
    newUser: {
      Name: '',
      Slug: '',
      CoverImages:[], 
      Description: '', 
      Website: '', 
    },
    editUser: {
      Name: '',
      Slug: '',
      CoverImages:[], 
      Description: '', 
      Website: '', 
    },
    
        };
      },
   
      methods: {
        handleSearch(){
            axios.post('https://api.tranhai.net/api/manufacturer/_search?id=1')
            .then((result) => {
                console.log(result.data);
                alert('tìm kiếm thành công')
                
            }).catch((err) => {
                console.error(err);
                alert('tìm kiếm thất bại')

        })
            
        },
        getUsers() {
      axios.get('get_Users.php')
        .then(response => {
          this.Users = response.data;
        })
        .catch(error => {
          alert('Lỗi khi lấy dữ liệu sách:', error);
        });
    },
    addnewUser() {
      // Gửi yêu cầu POST để thêm sách mới
      axios.post('add_User.php', this.newUser)
        .then(response => {
          console.log(response.data); // Kết quả từ API
          // Sau khi thêm sách thành công, cập nhật danh sách sách
          this.getUsers();
          // Reset form
          this.newUser.Name = '';
          this.newUser.author = '';
          this.newUser.description = '';
        })
        .catch(error => {
          console.error('Lỗi khi thêm sách:', error);
        });
    },
    editUser(User) {
      this.editUserData.id = User.id;
      this.editUserData.Name = User.Name;
      this.editUserData.author = User.author;
      this.editUserData.description = User.description;
    },
    updateUser() {
      // Gửi yêu cầu PUT để cập nhật thông tin sách
      axios.put(`update_User.php?id=${this.editUserData.id}`, this.editUserData)
        .then(response => {
          console.log(response.data); // Kết quả từ API
          // Sau khi cập nhật sách thành công, cập nhật danh sách sách
          this.getUsers();
          // Reset biến editUserData
          this.editUserData = {
            id: '',
            Name: '',
            author: '',
            description: '',
          };
        })
        .catch(error => {
          console.error('Lỗi khi cập nhật sách:', error);
        });
    },
    deleteUser(UserId) {
      axios.delete('delete_User.php', { data: { id: UserId } })
        .then(response => {
          console.log(response.data); // Kết quả từ API
          // Sau khi xóa sách thành công, cập nhật danh sách sách
          this.getUsers();
        })
        .catch(error => {
          console.error('Lỗi khi xóa sách:', error);
        });
    },
      },
    };
    </script>
    
    <style scoped>
    
    </style>
    
    