<template>
  <Button type="primary" shape="circle">
    <template #icon><SearchOutlined /></template>
  </Button>
  <Button type="primary" shape="circle">A</Button>
  <Button type="primary">
    <template #icon><SearchOutlined /></template>
    Search
  </Button>
  <Button shape="circle">
    <template #icon><SearchOutlined /></template>
  </Button>
  <Button>
    <template #icon><SearchOutlined /></template>
    Search
  </Button>
  <Button shape="circle">
    <template #icon><SearchOutlined /></template>
  </Button>
  <Button>
    <template #icon><SearchOutlined /></template>
    Search
  </Button>
  <Button type="dashed" shape="circle">
    <template #icon><SearchOutlined /></template>
  </Button>
  <Button type="dashed">
    <template #icon><SearchOutlined /></template>
    Search
  </Button>
  <Button href="https://www.google.com">
    <template #icon><SearchOutlined /></template>
  </Button>
  <br />
  <br />
  <a-tooltip title="search">
    <Button type="primary" shape="circle" size="large">
      <template #icon><SearchOutlined /></template>
    </Button>
  </a-tooltip>
  <Button type="primary" shape="circle" size="large">A</Button>
  <Button type="primary" size="large">
    <template #icon><SearchOutlined /></template>
    Search
  </Button>
  <a-tooltip title="search">
    <Button shape="circle" size="large">
      <template #icon><SearchOutlined /></template>
    </Button>
  </a-tooltip>
  <Button size="large">
    <template #icon><SearchOutlined /></template>
    Search
  </Button>
  <br />
  <a-tooltip title="search">
    <Button shape="circle" size="large">
      <template #icon><SearchOutlined /></template>
    </Button>
  </a-tooltip>
  <Button size="large">
    <template #icon><SearchOutlined /></template>
    Search
  </Button>
  <a-tooltip title="search">
    <Button type="dashed" shape="circle" size="large">
      <template #icon><SearchOutlined /></template>
    </Button>
  </a-tooltip>
  <Button type="dashed" size="large">
    <template #icon><SearchOutlined /></template>
    Search
  </Button>
  <Button size="large" href="https://www.google.com">
    <template #icon><SearchOutlined /></template>
  </Button>
</template>
<script setup>
import { SearchOutlined } from '@ant-design/icons-vue';
import { Button } from 'ant-design-vue';

</script>

