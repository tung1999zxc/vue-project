<template>
  <div class="container">
    <draggable v-model="tasks" :group="group" class="task-list">
      <div v-for="task in tasks" :key="task.id" class="task" :class="{ 'completed-task': task.completed }">
        {{ task.title }}
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  components: {
    draggable,
  },
  data() {
    return {
      tasks: [
        { id: 1, title: 'Viết báo cáo', completed: false },
        { id: 2, title: 'Kiểm tra email', completed: false },
        { id: 3, title: 'Lập kế hoạch tuần', completed: false },
      ],
      group: 'tasksGroup', // Đảm bảo cùng một group cho cả hai danh sách
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}
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
.completed-task {
  background-color: lightgreen;
}
</style>
