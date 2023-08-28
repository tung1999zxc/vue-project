<template>

  <div>
    <a-dropdown v-model:visible="visible">
      <a class="ant-dropdown-link" @click.prevent>
        Hover me
        <DownOutlined />
      </a>
      <template #overlay>
        <a-menu @click="handleMenuClick">
          <a-menu-item key="1">Clicking me will not close the menu.</a-menu-item>
          <a-menu-item key="2">Clicking me will not close the menu also.</a-menu-item>
          <a-menu-item key="3">Clicking me will close the menu</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>

    <a-button type="primary" @click="showAddModal">Thêm</a-button>
    <a-table :columns="columns" :data-source="dataList">
      <template #action="{ record }">
        <a-button type="link" @click="showEditModal(record)">Sửa</a-button>
        <a-button type="link" @click="deleteItem(record.key)">Xoá</a-button>
      </template>
    </a-table>
    <a-modal v-model:visible="isModalVisible" @ok="handleOk" @cancel="handleCancel">
      <template #default>
        <form>
          <label for="name">Tên:</label>
          <a-input v-model="formData.name" id="name" />
          <label for="age">Tuổi:</label>
          <a-input-number v-model="formData.age" id="age" />
        </form>
      </template>
    </a-modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Table, Button, Modal, Input, InputNumber } from 'ant-design-vue';

const columns = [
  // Các cột của bảng
  {
    title: 'Hành động',
    key: 'action',
    slots: { customRender: 'action' },
  },
];

const dataList = [
  {tên : 'tùng' , age : 20},
  {tên : 'tùng2' , age : 20}
  // Dữ liệu của bảng
];

const isModalVisible = ref(false);
const formData = ref({
  name: '',
  age: 0,
});

const showAddModal = () => {
  // Hiển thị modal thêm
  isModalVisible.value = true;
};

const showEditModal = (record) => {
  // Hiển thị modal sửa với dữ liệu của record
  formData.value = { ...record }; // Gán giá trị dữ liệu từ record vào formData
  isModalVisible.value = true;
};

const handleOk = () => {
  // Xử lý khi ấn nút OK trên modal
  // Tùy theo trạng thái, bạn có thể thêm hoặc sửa dữ liệu tại đây
  isModalVisible.value = false;
};

const handleCancel = () => {
  // Xử lý khi ấn nút Cancel trên modal
  isModalVisible.value = false;
};

const deleteItem = (key) => {
  // Xử lý xóa item dựa trên key
};

</script>

<style>
/* Thêm phần tùy chỉnh cho giao diện người dùng tại đây */
</style>
