<template>
  <div>
    <h1>Quản lý Người dùng</h1>
    <a-button type="primary" @click="showAddModal">Thêm Người dùng</a-button>
    <Modal v-model="isAddModalVisible" title="Thêm Người dùng" @ok="addUser" @cancel="closeAddModal">
      <Form :form="addUserForm">
        <Form-item label="Họ và tên" required>
          <a-input v-model:value="addUserForm.name" />
        </Form-item>
        <Form-item label="Tuổi" required>
          <a-input-number v-model:value="addUserForm.age" />
        </Form-item>
      </Form>
    </Modal>
    <Modal v-if="isEditModalVisible" title="Sửa Người dùng" @ok="editUser" @cancel="closeEditModal">
      <Form :form="editUserForm">
        <Form-item label="Họ và tên" required>
          <a-input v-model:value="editUserForm.name" />
        </Form-item>
        <Form-item label="Tuổi" required>
          <a-input-number v-model:value="editUserForm.age" />
        </Form-item>
      </Form>
    </Modal>
    
    <Table :columns="columns" :dataSource="users">
      <Table-column title="Họ và tên" dataIndex="name"></Table-column>
      <Table-column title="Tuổi" dataIndex="age"></Table-column>
      <Table-column title="Hành động">
        <template #customRender="text, record">
          <a @click="showEditModal(record)">Sửa</a> |
          <a @click="deleteUser(record)">Xoá</a>
        </template>
      </Table-column>
    </Table>
  </div>
</template>

<script setup>

import { ref , onMounted} from "vue";
import { Button  } from 'ant-design-vue';
import { Table } from 'ant-design-vue';
import { Modal  } from 'ant-design-vue';
import { Input  } from 'ant-design-vue';
import { Form  } from 'ant-design-vue';

const addUserForm = ref({
name: "",
age: undefined,
});

const users = ref([
  { id: 1, name: "Người dùng 1", age: 25 },
  { id: 2, name: "Người dùng 2", age: 30 },
  { id: 2, name: "Người dùng 2", age: 30 },
  { id: 2, name: "Người dùng 2", age: 30 },
  { id: 2, name: "Người dùng 2", age: 30 },
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
