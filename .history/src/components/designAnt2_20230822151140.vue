<template>
  <a-table
    :columns="columns"
    :data-source="dataList"
    :size="''"
    :bordered="true"
    :pagination="paginationConfig"
    :loading="isLoading"
  />
</template>

<script>
import { Table } from 'ant-design-vue';

export default {
  components: {
    'a-table': Table,
  },
  data() {
    return {
      columns: [
        {
          title: 'Tên',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Tuổi',
          dataIndex: 'age',
          key: 'age',
        },
      ],
      dataList: [
        { key: '1', name: 'John', age: 25 },
        { key: '2', name: 'Jane', age: 30 },
        // Thêm dữ liệu khác vào đây
      ],
      paginationConfig: {
        pageSize: 10,
        showSizeChanger: true,
        showQuickJumper: true,
      },
      isLoading: false,
    };
  },
};
</script>
