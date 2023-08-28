<template>
  <div class="container">
    <div class="task-list" >
      <h2 class="">"Công việc cần làm"</h2>
      <div class="task" v-for="(item, index) in todoTasks" :key="index"
      
      :draggable="true"
      @dragstart="handleDragStart(index)"
      @dragend="handleDragEnd"
      @dragover.prevent
      @drop="handleTaskDrop(index)"
     
    >{{ item.title }}</div></div>

    <div class="task-list"
    @drop="handleTaskDrop(index)">
      <h2 class="">Công việc đã hoàn thành</h2>
      <div v-for="(item, index) in completedTasks" :key="index"
      
    >{{ item.title }}</div></div>
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
    
   
  },
  methods: {

    handleDragEnd(){
      this.draggedTask= null;
    },
    handleTaskDragStart(index) {
      this.draggedTask = index;
    },
    handleTaskDrop(index) {  
      if (this.draggedTask) {
        // const draggedTaskIndex = this.tasks.findIndex(t => t.id === this.draggedTask.id);
        // if (draggedTaskIndex !== -1) {
          this.tasks[this.draggedTask].completed = true;
          this.draggedTask = null;
        // }
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

.task {
  background-color: lightblue;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
}
</style>
