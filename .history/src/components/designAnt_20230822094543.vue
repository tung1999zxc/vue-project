<template>
  <a-table :columns="columns" :data-source="dataSource"></a-table>
</template>

<script setup>
import { Table as ATable } from 'ant-design-vue';

const columns = [
  {
    title: 'Tên',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Tuổi',
    dataIndex: 'age',
    key: 'age'
  },
  // Các cột khác
];

const dataSource = [
  {
    key: 1,
    name: 'Nguyen Van A',
    age: 25
  },
  {
    key: 2,
    name: 'Tran Thi B',
    age: 30
  },
  // Dữ liệu khác
];
</script>
