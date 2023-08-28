<template>
  <div>
    <h1>Quản lý Người dùng</h1>
    <AButton type="primary" @click="showAddModal">Thêm Người dùng</AButton>
    <a-modal v-model="isAddModalVisible" title="Thêm Người dùng" @ok="addUser" @cancel="closeAddModal">
      <a-form :form="addUserForm">
        <a-form-item label="Họ và tên" required>
          <a-input v-model:value="addUserForm.name" />
        </a-form-item>
        <a-form-item label="Tuổi" required>
          <a-input-number v-model:value="addUserForm.age" />
        </a-form-item>
      </a-form>
    </a-modal>
    <a-modal v-if="isEditModalVisible" title="Sửa Người dùng" @ok="editUser" @cancel="closeEditModal">
      <a-form :form="editUserForm">
        <a-form-item label="Họ và tên" required>
          <a-input v-model:value="editUserForm.name" />
        </a-form-item>
        <a-form-item label="Tuổi" required>
          <a-input-number v-model:value="editUserForm.age" />
        </a-form-item>
      </a-form>
    </a-modal>
    
    <a-table :columns="columns" :dataSource="users">
      <a-table-column title="Họ và tên" dataIndex="name"></a-table-column>
      <a-table-column title="Tuổi" dataIndex="age"></a-table-column>
      <a-table-column title="Hành động">
        <template #customRender="text, record">
          <a @click="showEditModal(record)">Sửa</a> |
          <a @click="deleteUser(record)">Xoá</a>
        </template>
      </a-table-column>
    </a-table>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Button as AButton } from 'ant-design-vue';

const addUserForm = ref({
name: "",
age: undefined,
});

const users = ref([
  { id: 1, name: "Người dùng 1", age: 25 },
  { id: 2, name: "Người dùng 2", age: 30 },
]);

const isAddModalVisible = ref(false);
const isEditModalVisible = ref(false);
const editingUser = ref({});

const showAddModal = () => {
  isAddModalVisible.value = true;
};

const closeAddModal = () => {
  isAddModalVisible.value = false;
};

const addUser = () => {
  // Logic thêm người dùng
  closeAddModal();
};

const showEditModal = (user) => {
  isEditModalVisible.value = true;
  editingUser.value = { ...user };
};

const closeEditModal = () => {
  isEditModalVisible.value = false;
  editingUser.value = {};
};

const editUser = () => {
  // Logic sửa người dùng
  closeEditModal();
};

const deleteUser = (user) => {
  // Logic xoá người dùng
};
</script>

<style scoped>
/* Định dạng giao diện tại đây nếu cần */
</style>
