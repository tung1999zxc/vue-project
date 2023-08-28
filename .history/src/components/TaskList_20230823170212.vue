<template>
    <div class="task-list">
      <h2>{{ title }}</h2>
      <div
        class="task"
        v-for="task in tasks"
        :key="task.id"
        :draggable="true"
        @dragstart="handleDragStart(task)"
      >
        {{ task.title }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      tasks: Array,
    },
    methods: {
      handleDragStart(task) {
        this.$emit('task-dragged', task);
      },
    },
  };
  </script>
  
  <style scoped>
  .task-list {
    width: 45%;
    border: 1px solid gray;
    padding: 10px;
  }
  .task {
    background-color: lightblue;
    margin: 5px;
    padding: 5px;
    cursor: grab;
  }
  </style>
  