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
            <td>Description</td>
            <td>Website</td>
            <td>Chức năng</td>
          </tr>
        </thead>
          <tr v-for="user in users" :key="user.id" >
            <td>{{user.Id}}</td>
            <td>{{user.Name}}</td>
            <td>{{user.Slug}}</td>
            <td>{{user.Description}}</td>
            <td>{{user.Website}}</td>
           
            
            <td><button @click="editUser(user)">Chỉnh sửa</button>
              <button @click="deleteUser(user.id)">Xóa</button></td>
          </tr >
    
        </table>
        
        </div>
    
        
          <div class="col-3 ">
            <h1 v-if="editUser.id">Chỉnh sửa user</h1>
            <h1 v-else>Thêm user mới</h1>
            <form accept-charset="UTF-8" @submit.prevent="editUser.id ? updateUser() : addNewUser()">
              <label for="Name">Name</label>
              <input class="form-control " type="text" id="Name" v-model="editUser.Name" v-if="editUser.id" required>
              <input class="form-control " type="text" id="Name" v-model="newUser.Name" v-else required>
              <br>
              <label for="Slug">Slug</label>
              <input class="form-control " type="text" id="Slug" v-model="editUser.Slug" v-if="editUser.id" required>
              <input class="form-control " type="text" id="Slug" v-model="newUser.Slug" v-else required>
              
              <br>
              
              <label for="Description">Description</label>
              <input class="form-control" type="text" id="Description" v-model="editUser.Description" v-if="editUser.id" required>
              <input class="form-control" type="text" id="Description" v-model="newUser.Description"   v-else required>
              <br>
              <label for="Website">Website</label>
              <input class="form-control" type="text" id="Website" v-model="editUser.Website" v-if="editUser.id" required>
              <input class="form-control" type="text" id="Website" v-model="newUser.Website" v-else  required>
              <br>
              <button class="btn-block bg-success" type="submit">Thêm User</button>
            
            </form>
          </div>
        </div> 
    <input type="text" name="" id="" v-model="nameSearch.Name">
    <button @click="handleSearch"> tìm kiếm</button>
    {{ this.nameSearch.Name }}
    {{ this.users }}
   
   
   
  </div>
  </template>
  
    
    <script>
  import axios from 'axios';
  
    
    export default {
      
      data() {
        return {
    nameSearch:{
      Name :''

    },
    users: [],
    newUser: {
      Name: '',
      Slug: '',
      // CoverImages:[], 
      Description: '', 
      Website: '', 
    },
    editUser: {
      id :'',
      Name: '',
      Slug: '',
      Description: '', 
      Website: '', 
    },
    
        };
      },
   
      methods: {
        handleSearch(){
          
            
          
          const jsonData = JSON.stringify(this.nameSearch);
            axios.post('https://api.tranhai.net/api/manufacturer/_search', jsonData ,
            {
                 headers: {
                'Content-Type': 'application/json',
                 Authorization: 'Bearer ' + localStorage.getItem('token'), 
         }}
        )
            .then(response => {
                console.log(response.data);
                this.users= response.data;
                alert('tìm kiếm thành công')
                
            }).catch(err => {
                console.error(err);
                alert('tìm kiếm thất bại')

        })
            
        },
        getUsers() {
      axios.post('https://api.tranhai.net/api/manufacturer/_search', { data : {
  "Page": 1,
  "PageSize": 10 }
}
// {
//                  headers: {
//                 'Content-Type': 'application/json',
//                 //  Authorization: 'Bearer ' + localStorage.getItem('token'), 
//          }}
)
        .then(response => {
          this.users = response.data;
          console.log(response.data);
          alert('lấy thông tin thành công')
        })
        .catch(error => {
          alert('Lỗi khi lấy dữ liệu user:', error);
        });
    },
    addNewUser() {
      // Gửi yêu cầu POST để thêm user mới
      axios.post('https://api.tranhai.net/api/manufacturer', this.newUser , {
        // headers: {
        //         'Content-Type': 'application/json',
        //       }

      })
        .then(response => {
          // console.log(response.data); // Kết quả từ API
          // // Sau khi thêm user thành công, cập nhật danh user user
          // this.getUsers();
          alert('thêm thành công');
          // Reset form
          // this.newUser.Name = '';
          // this.newUser.Slug = '';
          // this.newUser.Description = '';
          // this.newUser.Website = '';
        })
        .catch(error => {
          console.error('Lỗi khi thêm user:', error);
        });
    },
    editUser(User) {
      this.editUser.id = User.id;
      this.editUser.Name = User.Name;
      this.editUser.Slug = User.Slug;
      this.editUser.Description = User.Description;
      this.editUser.Website = User.Website;
      
    },
    updateUser() {
      // Gửi yêu cầu PUT để cập nhật thông tin user
      axios.put(`update_User.php?id=${this.editUser.id}`, this.editUser)
        .then(response => {
          console.log(response.data); // Kết quả từ API
          // Sau khi cập nhật user thành công, cập nhật danh user user
          this.getUsers();
          // Reset biến editUser
          this.editUser = {
            id: '',
            Name: '',
            Slug: '',
            description: '',
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
      created() {
    // Lấy thông tin sách khi trang được tải
    this.getUsers();
  },
    };
    </script>
    
    <style scoped>
    
    </style>
    
    