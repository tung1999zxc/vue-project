<template>
    <div>
      <h1>Quản lý Người dùng</h1>
      <a-button type="primary" @click="showAddModal">Thêm Người dùng</a-button>
      <a-modal v-model="isAddModalVisible" title="Thêm Người dùng" @ok="addUser" @cancel="closeAddModal">
        <!-- Form thêm người dùng -->
      </a-modal>
      <a-modal v-if="isEditModalVisible" title="Sửa Người dùng" @ok="editUser" @cancel="closeEditModal">
        <!-- Form sửa người dùng -->
      </a-modal>
      <a-table :columns="columns" :data-source="users">
        <a-table-column title="Họ và tên" dataIndex="name"></a-table-column>
        <a-table-column title="Tuổi" dataIndex="age"></a-table-column>
        <a-table-column title="Hành động">
          <template slot-scope="text, record">
            <a @click="showEditModal(record)">Sửa</a> |
            <a @click="deleteUser(record)">Xoá</a>
          </template>
        </a-table-column>
      </a-table>
    </div>
  </template>
  
  <script>
  import { Button, Modal, Table } from "ant-design-vue";
  
  export default {
    components: {
      "a-button": Button,
      "a-modal": Modal,
      "a-table": Table,
    },
    data() {
      return {
        users: [
          { id: 1, name: "Người dùng 1", age: 25 },
          { id: 2, name: "Người dùng 2", age: 30 },
        ],
        isAddModalVisible: false,
        isEditModalVisible: false,
        editingUser: {},
      };
    },
    methods: {
      showAddModal() {
        this.isAddModalVisible = true;
      },
      closeAddModal() {
        this.isAddModalVisible = false;
      },
      addUser() {
        // Logic thêm người dùng
        this.closeAddModal();
      },
      showEditModal(user) {
        this.isEditModalVisible = true;
        this.editingUser = { ...user };
      },
      closeEditModal() {
        this.isEditModalVisible = false;
        this.editingUser = {};
      },
      editUser() {
        // Logic sửa người dùng
        this.closeEditModal();
      },
      deleteUser(user) {
        // Logic xoá người dùng
      },
    },
    computed: {
      columns() {
        return [
          { title: "Họ và tên", dataIndex: "name" },
          { title: "Tuổi", dataIndex: "age" },
          { title: "Hành động", slots: { customRender: "actions" } },
        ];
      },
    },
  };
  </script>
  