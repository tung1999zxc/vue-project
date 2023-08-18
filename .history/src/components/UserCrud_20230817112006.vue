<template>
  <div v-if="!store.isAuthenticated"><p class="text-center h3 mt-5 text-danger ">Bạn phải đăng nhập để sử dụng</p></div>
    <div v-else>
      <div class="row">
        <div class="col-9">
          <h1>Danh sách User</h1>
          <table class="table">
            <thead>
              <tr>
                <td>
                  <input v-model="nameSearch.Name" placeholder="Tìm kiếm theo tên..." />
                  <button @click="handleSearch">Tìm kiếm</button>
                </td>
                <td>Name</td>
                <td>Slug</td>
                <td>Description</td>
                <td>Website</td>
                <td>Chức năng</td>
              </tr>
            </thead>
            <tr v-for="user in users" :key="user.Id">
              <td>{{ user.Id }}</td>
              <td>{{ user.Name }}</td>
              <td>{{ user.Slug }}</td>
              <td>{{ user.Description }}</td>
              <td>{{ user.Website }}</td>
              <td>
                <button @click="_editUser(user)">Chỉnh sửa</button>
                <button @click="deleteUser(user.Id)">Xóa</button>
              </td>
            </tr>
          </table>
        </div>
        <div class="col-2">
          <h1 v-if="editUser">Chỉnh sửa user</h1>
          <h1 v-else>Thêm user mới</h1>
          <form @submit.prevent="editUser ? updateUser() : addNewUser()">
            <label for="Name">Name</label>
            <input class="form-control " type="text" id="Name" v-model="editUser.Name" v-if="editUser" required>
            <input class="form-control " type="text" id="Name" v-model="newUser.Name" v-else required>
            <br>
            <label for="Slug">Slug</label>
            <input class="form-control " type="text" id="Slug" v-model="editUser.Slug" v-if="editUser" required>
            <input class="form-control " type="text" id="Slug" v-model="newUser.Slug" v-else required>
            
            <br>
            
            <label for="Description">Description</label>
            <input class="form-control " type="text" id="Description" v-model="editUser.Description" v-if="editUser" required>
            <input class="form-control" type="text" id="Description" v-model="newUser.Description"   v-else required>
            <br>
            <label for="Website">Website</label>
            <input class="form-control" type="text" id="Website" v-model="editUser.Website" v-if="editUser" required>
            <input class="form-control" type="text" id="Website" v-model="newUser.Website" v-else  required>
            <br>
            <button class="btn-block bg-success" type="submit">
              {{ editUser ? 'Lưu' : 'Thêm User' }}
            </button>
          </form>
        </div>
      </div>
      
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
import { useAuthStore } from '../store/auth';
const store = useAuthStore();
  
interface User {
  Id? : string,
  Name? : string,
  Slug? : string,
  Description? : string,
  Website? : string,
}
      const nameSearch = ref({ Name: '' });
      const users = ref<User[]>([]);
      const newUser = ref<User>({
      Name: '',
      Slug: '',
      Description: '', 
      Website: '', }
      );
      const editUser =ref<User | null>(null);
      
    
      
      const handleSearch = async () => {
        try {
          const response = await axios.post('https://api.tranhai.net/api/manufacturer/_search', nameSearch.value);
          users.value = response.data.data;
        } catch (err) {
          console.error(err);
          alert('Tìm kiếm thất bại');
        }
      };
  
      const getUsers = async () => {
        try {
          const response = await axios.post('https://api.tranhai.net/api/manufacturer/_search', {
            Page: 1,
            PageSize: 10,
          });
          users.value = response.data.data;
        } catch (error) {
          alert('Lỗi khi lấy dữ liệu user:', error);
        }
      };
  
      const addNewUser = async () => {
      try {
        const response = await axios.post('https://api.tranhai.net/api/manufacturer', newUser.value);
        getUsers();
        alert('Thêm thành công');
        // Reset form
        newUser.value.Name = '';
        newUser.value.Slug = '';
        newUser.value.Description = '';
        newUser.value.Website = '';
      } catch (error) {
        console.error('Lỗi khi thêm user:', error);
      }
    };

    const _editUser = (user: User) => {
      editUser.value = { ...user};
      
    };

    const updateUser = async () => {
      try {
        const response = await axios.put(`https://api.tranhai.net/api/manufacturer/${editUser.value.Id}`, editUser.value);
        console.log(response.data);
        getUsers();
        editUser.value = null;
       
      } catch (error) {
        console.error('Lỗi khi cập nhật user:', error);
      }
    };

    const deleteUser = async (userId) => {
      try {
        const response = await axios.delete(`https://api.tranhai.net/api/manufacturer?ids=${userId}`);
        alert('Xóa thành công user:');
        getUsers();
      } catch (error) {
        console.error('Lỗi khi xóa user:', error);
      }
    };
    onMounted(() => {
      getUsers();
    });

  
  </script>
  
  <style scoped></style>
  