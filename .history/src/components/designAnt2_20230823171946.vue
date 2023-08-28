<template>
  <div class="container">
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
    <task-list
      title="Công việc đã hoàn thành"
      :tasks="completedTasks"
      class="completed-tasks"
    ></task-list>
  </div>
</template>

<script>
import TaskList from './TaskList.vue';

export default {
  components: {
    TaskList, // Khai báo component TaskList ở đây
  },
  data() {
    return {
      tasks: [
        { id: 1, title: 'Viết báo cáo', completed: false },
        { id: 2, title: 'Kiểm tra email', completed: false },
        { id: 3, title: 'Lập kế hoạch tuần', completed: false },
      ],
    };
  },
  computed: {
    todoTasks() {
      return this.tasks.filter(task => !task.completed);
    },
    completedTasks() {
      return this.tasks.filter(task => task.completed);
    },
  },
  methods: {
    handleTaskDragged(task) {
      const draggedTaskIndex = this.tasks.findIndex(t => t.id === task.id);
      if (draggedTaskIndex !== -1) {
        this.tasks[draggedTaskIndex].completed = true;
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}
.completed-tasks {
  background-color: lightgreen;
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
</style>
