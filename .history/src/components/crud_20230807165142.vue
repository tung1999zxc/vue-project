<template>
  <div>

     <div class="row ">
        <div class="col-8">
          <h1>Danh user User</h1>
        <table class="table">
          <thead>
          <tr>
            <td><input type="text" name="" id="" v-model="nameSearch.Name">
              <button @click="handleSearch"> tìm kiếm</button></td> 
            <td>Name</td>
            <td>Slug</td>
            <td>Description</td>
            <td>Website</td>
            <td>Chức năng</td>
          </tr>
        </thead>
          <tr v-for="user in users" :key="user.Id" >
            <td>{{user.Id}}</td>
            <td>{{user.Name}}</td>
            <td>{{user.Slug}}</td>
            <td>{{user.Description}}</td>
            <td>{{user.Website}}</td>
           
            
            <td><button @click="_editUser(user)">Chỉnh sửa</button>
              <button @click="deleteUser(user.Id)">Xóa</button></td>
          </tr>
          
    
        </table>
        
        </div>
    
        
          <div class="col-3 ">
            <h1 v-if="editUser.Id">Chỉnh sửa user</h1>
            <h1 v-else>Thêm user mới</h1>
            <form accept-charset="UTF-8" @submit.prevent="editUser.Id ? updateUser() : addNewUser()">
            
              <label for="Name">Name</label>
              <input class="form-control " type="text" id="Name" v-model="editUser.Name" v-if="editUser.Id" required>
              <input class="form-control " type="text" id="Name" v-model="newUser.Name" v-else required>
              <br>
              <label for="Slug">Slug</label>
              <input class="form-control " type="text" id="Slug" v-model="editUser.Slug" v-if="editUser.Id" required>
              <input class="form-control " type="text" id="Slug" v-model="newUser.Slug" v-else required>
              
              <br>
              
              <label for="Description">Description</label>
              <input class="form-control" type="text" id="Description" v-model="editUser.Description" v-if="editUser.Id" required>
              <input class="form-control" type="text" id="Description" v-model="newUser.Description"   v-else required>
              <br>
              <label for="Website">Website</label>
              <input class="form-control" type="text" id="Website" v-model="editUser.Website" v-if="editUser.Id" required>
              <input class="form-control" type="text" id="Website" v-model="newUser.Website" v-else  required>
              <br>
              <button class="btn-block bg-success" type="submit">{{editUser.Id ? 'Lưu' : 'Thêm User'}}</button>
              
            
            </form>
          </div>
        </div> 
    
   
   
   
   
   
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
      Description: '', 
      Website: '', 
    },
    editUser: {
      Id :'',
      Name: '',
      Slug: '',
      Description: '', 
      Website: '', 
    },
    
        };
      },
   
      methods: {
        handleSearch(){
          // const jsonData = JSON.stringify(this.nameSearch);
            axios.post('https://api.tranhai.net/api/manufacturer/_search', this.nameSearch ,
            {
                //  headers: {
                // // 'Content-Type': 'application/json',
                //  Authorization: 'Bearer ' + localStorage.getItem('token'), 
        //  }
        })
            .then(response => {
                console.log(response.data);
                this.users= response.data.data;
                alert('tìm kiếm thành công')
                
            }).catch(err => {
                console.error(err);
                alert('tìm kiếm thất bại')

        })
            
        },
        getUsers() {
      axios.post('https://api.tranhai.net/api/manufacturer/_search', { "Page": 1,"PageSize": 10 }
// {
//                  headers: {
//                 'Content-Type': 'application/json',
//                 //  Authorization: 'Bearer ' + localStorage.getItem('token'), 
//          }}
)
        .then(response => {
          this.users = response.data.data;
        })
        .catch(error => {
          alert('Lỗi khi lấy dữ liệu user:', error);
        });
    },
    addNewUser() {
      axios.post('https://api.tranhai.net/api/manufacturer', this.newUser )
        .then(response => {
          this.getUsers();
          alert('thêm thành công');
          // Reset form
          this.newUser.Name = '';
          this.newUser.Slug = '';
          this.newUser.Description = '';
          this.newUser.Website = '';
        })
        .catch(error => {
          console.error('Lỗi khi thêm user:', error);
        });
    },
    _editUser(User) {
      this.editUser.Id = User.Id;
      this.editUser.Name = User.Name;
      this.editUser.Slug = User.Slug;
      this.editUser.Description = User.Description;
      this.editUser.Website = User.Website;
    },
    updateUser() {
      axios.put(`https://api.tranhai.net/api/manufacturer/${this.editUser.Id}`, this.editUser)
        .then(response => {
          console.log(response.data)
          this.getUsers();
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
      axios.delete(`https://api.tranhai.net/api/manufacturer?ids=${UserId}`)
        .then(response => {
          alert('xóa thành công user:');
          this.getUsers();
        })
        .catch(error => {
          console.error('Lỗi khi xóa user:', error);
        });
    },
      },
      created() {
    this.getUsers();
  },
    };
    </script>
    
    <style scoped>
    
    </style>
    
    