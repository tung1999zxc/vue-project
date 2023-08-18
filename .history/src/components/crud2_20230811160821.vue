<template>
    <div>
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
          <h1 v-if="editUser.Id">Chỉnh sửa user</h1>
          <h1 v-else>Thêm user mới</h1>
          <form @submit.prevent="editUser.Id ? updateUser() : addNewUser()">
            <label for="Name">Name</label>
            <input class="form-control " type="text" id="Name" v-model="editUser.Name" v-if="editUser.Id" required>
            <input class="form-control " type="text" id="Name" v-model="newUser.Name" v-else required>
            <br>
            <label for="Slug">Slug</label>
            <input class="form-control " type="text" id="Slug" v-model="editUser.Slug" v-if="editUser.Id" required>
            <input class="form-control " type="text" id="Slug" v-model="newUser.Slug" v-else required>
            
            <br>
            
            <label for="Description">Description</label>
            <input class="form-control " type="text" id="Description" v-model="editUser.Description" v-if="editUser.Id" required>
            <input class="form-control" type="text" id="Description" v-model="newUser.Description"   v-else required>
            <br>
            <label for="Website">Website</label>
            <input class="form-control" type="text" id="Website" v-model="editUser.Website" v-if="editUser.Id" required>
            <input class="form-control" type="text" id="Website" v-model="newUser.Website" v-else  required>
            <br>
            <button class="btn-block bg-success" type="submit">
              {{ editUser.Id ? 'Lưu' : 'Thêm User' }}
            </button>
          </form>
        </div>
      </div>
      <input type="number" v-model="so1"> {{ so1 }}aAaaaaaaaa
      <button></button>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  export default {
    name: 'YourComponentName',
    setup() {
      const so1 = ref(1);  
      const nameSearch = ref({ Name: '' });
      const users = ref([]);
      const newUser = ref({
        Name: '',
        Slug: '',
        Description: '',
        Website: '',
      });
      const editUser = ref({
        Id: '',
        Name: '',
        Slug: '',
        Description: '',
        Website: '',
      });
  
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

    const _editUser = (user) => {
      editUser.value.Id = user.Id;
      editUser.value.Name = user.Name;
      editUser.value.Slug = user.Slug;
      editUser.value.Description = user.Description;
      editUser.value.Website = user.Website;
    };

    const updateUser = async () => {
      try {
        const response = await axios.put(`https://api.tranhai.net/api/manufacturer/${editUser.value.Id}`, editUser.value);
        console.log(response.data);
        getUsers();
        editUser.value = {
          Id: '',
          Name: '',
          Slug: '',
          Description: '',
          Website: '',
        };
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

    return {
      nameSearch,
      users,
      newUser,
      editUser,
      _editUser,
      handleSearch,
      getUsers,
      addNewUser,
      updateUser,
      deleteUser,
    };
    },
  };
  </script>
  
  <style scoped></style>
  