<template>
  <div>
    <div class="row bg-light ">
        <div class="col-8">
          <h1>Danh user User</h1>
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
            <td><button @click="editUser(user)">Chỉnh sửa</button>
              <button @click="deleteUser(user.id)">Xóa</button></td>
          </tr >
    
        </table>
        
        </div>
    
        
          <div class="col-3 ">
            <h1 v-if="editUser.id">Chỉnh sửa user</h1>
            <h1 v-else>Thêm user mới</h1>
            <form accept-charset="UTF-8" @submit.prevent="editUser.id ? updateBook() : addNewBook()">
              <label for="Name">Name</label>
              <input class="form-control " type="text" id="Name" v-model="editUser.Name" v-if="editUser.id" required>
              <input class="form-control " type="text" id="Name" v-model="newBook.Name" v-else required>
              <br>
              <label for="Slug">Slug</label>
              <input class="form-control " type="text" id="Slug" v-model="editUser.Slug" v-if="editUser.id" required>
              <input class="form-control " type="text" id="Slug" v-model="newBook.Slug" v-else required>
              
              <br>
              <!-- <label for="description">CoverImages</label>
              <input type="" class="form-control " id="description" v-model="editUser.CoverImages" >
              <br> -->
              <label for="Description">Description</label>
              <input class="form-control" type="text" id="Description" v-model="editUser.Description" v-if="editUser.id" required>
              <input class="form-control" type="text" id="Description" v-model="newBook.Description"   v-else required>
              <br>
              <label for="Website">Website</label>
              <input class="form-control" type="text" id="Website" v-model="editUser.Website" v-if="editUser.id" required>
              <input class="form-control" type="text" id="Website" v-model="newBook.Website" v-else  required>
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
          alert('Lỗi khi lấy dữ liệu user:', error);
        });
    },
    addnewUser() {
      // Gửi yêu cầu POST để thêm user mới
      axios.post('add_User.php', this.newUser)
        .then(response => {
          console.log(response.data); // Kết quả từ API
          // Sau khi thêm user thành công, cập nhật danh user user
          this.getUsers();
          // Reset form
          this.newUser.Name = '';
          this.newUser.Slug = '';
          this.newUser.description = '';
        })
        .catch(error => {
          console.error('Lỗi khi thêm user:', error);
        });
    },
    editUser(User) {
      this.editUserData.id = User.id;
      this.editUserData.Name = User.Name;
      this.editUserData.Slug = User.Slug;
      this.editUserData.description = User.description;
    },
    updateUser() {
      // Gửi yêu cầu PUT để cập nhật thông tin user
      axios.put(`update_User.php?id=${this.editUserData.id}`, this.editUserData)
        .then(response => {
          console.log(response.data); // Kết quả từ API
          // Sau khi cập nhật user thành công, cập nhật danh user user
          this.getUsers();
          // Reset biến editUserData
          this.editUserData = {
            id: '',
            Name: '',
            Slug: '',
            description: '',
          };
        })
        .catch(error => {
          console.error('Lỗi khi cập nhật user:', error);
        });
    },
    deleteUser(UserId) {
      axios.delete('delete_User.php', { data: { id: UserId } })
        .then(response => {
          console.log(response.data); // Kết quả từ API
          // Sau khi xóa user thành công, cập nhật danh user user
          this.getUsers();
        })
        .catch(error => {
          console.error('Lỗi khi xóa user:', error);
        });
    },
      },
    };
    </script>
    
    <style scoped>
    
    </style>
    
    