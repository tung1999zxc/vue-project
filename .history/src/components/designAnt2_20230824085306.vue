<template>
  <div class="container">
    <div class="task-list"
      title="Công việc cần làm"
      :tasks="todoTasks"
      v-for="task in tasks" :key="task.id"
      :listClass="taskListClass"
      @task-drag-start="handleTaskDragStart"
      @task-drop="handleTaskDrop"
    ></div>
    <div class="task-list"
      title="Công việc đã hoàn thành"
      :tasks="completedTasks"
      :listClass="completedTaskListClass"
      @task-drag-start="handleTaskDragStart"
      @task-drop="handleTaskDrop"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        { id: 1, title: 'Viết báo cáo', completed: false },
        { id: 2, title: 'Kiểm tra email', completed: false },
        { id: 3, title: 'Lập kế hoạch tuần', completed: false },
      ],
      draggedTask: null,
    };
  },
  computed: {
    todoTasks() {
      return this.tasks.filter(task => !task.completed);
    },
    completedTasks() {
      return this.tasks.filter(task => task.completed);
    },
    taskListClass() {
      return {
        'task-list': true,
      };
    },
    completedTaskListClass() {
      return {
        'task-list': true,
        'completed-tasks': true,
      };
    },
  },
  methods: {
    handleTaskDragStart(task) {
      this.draggedTask = task;
    },
    handleTaskDrop(task) {
      if (this.draggedTask) {
        const draggedTaskIndex = this.tasks.findIndex(t => t.id === this.draggedTask.id);
        if (draggedTaskIndex !== -1) {
          this.tasks[draggedTaskIndex].completed = task.completed;
          this.draggedTask = null;
        }
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
.task-list {
  width: 45%;
  border: 1px solid gray;
  padding: 10px;
}
.completed-tasks {
  background-color: lightgreen;
}
.task {
  background-color: lightblue;
  margin: 5px;
  padding: 5px;
  cursor: grab;
}
</style>
