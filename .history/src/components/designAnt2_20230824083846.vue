<template>
  <div class="container">
    <div class="task-list">
      <h2>Công việc cần làm</h2>
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
    <div class="task-list">
      <h2>{{ Đã làm xong}}</h2>
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
      taskDraggedIndex: null,  
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
    handleDragStart(task) {
        this.taskDraggedIndex=task;
      },
    handleTaskDragged(task) {
      const draggedTaskIndex = this.tasks.findIndex(t => t.id === task.id);
      if (draggedTaskIndex !== -1) {
        this.tasks[this.taskDraggedIndex].completed = true;
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
