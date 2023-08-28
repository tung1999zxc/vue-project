import { Button } from 'ant-design-vue';
<template>
  <div class="container">
    <div class="task-list" 
    @dragover.prevent
    @drop="handleTaskBack">
      <h2 class="">"Công việc cần làm"</h2>
      <div class="task" v-for="item in todoTasks" :key="item.id"
      
      :draggable="true"
      @dragstart="handleTaskDragStart(item.id)"
      @dragend="handleDragEnd"
  
    >{{ item.title }} </div> <hr>
  <div class="row d-flex mx-2">
    <input class="form-control  " type="text" v-model="newTaskTitle" placeholder="Thêm việc cần làm">
    <Button class="btn btn-success mt-2 h3 " @click="addTask">Thêm task</Button>
  </div>
</div>

    <div class="task-list"
    
    @dragover.prevent
    @drop="handleTaskDrop"
   
    >
      <h2 class="">Công việc đã hoàn thành</h2>
      <div class="task" v-for="item in completedTasks" :key="item.id"
      :draggable="true"
      @dragstart="handleTaskDragStart(item.id)"
      @dragend="handleDragEnd"
      
     
      
    >{{ item.title }}</div></div>
  </div>
</template>

<script>
import {Button} from 'ant-design-vue'
export default {
  data() {
    return {
      tasks: [
        { id: 1, title: 'Viết báo cáo', completed: false },
        { id: 2, title: 'Kiểm tra email', completed: false },
        { id: 3, title: 'Lập kế hoạch tuần', completed: false },
      ],
      newTaskTitle :'',
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

    addTask (){
      const title  = this.newTaskTitle;
      this.tasks.push({ id: 'this.tasks.length +1' , title : title, completed:'false' })
      this.newTaskTitle = '';

    },

    handleTaskDragStart(index) {
      this.draggedTask = index;
      console.log(this.draggedTask-1);
    },
    handleDragEnd(){
      this.draggedTask= null;
      console.log(this.draggedTask)
    },
    handleTaskDrop(index) {  
      // if (this.draggedTask) {
        // const draggedTaskIndex = this.tasks.findIndex(t => t.id === this.draggedTask.id);
        // if (draggedTaskIndex !== -1) {
          
          if (this.draggedTask){
            this.tasks[this.draggedTask-1].completed = true;
          }
         
          this.draggedTask = null;
        // }
      // }
    },

    handleTaskBack(){
      this.tasks[this.draggedTask-1].completed = false;
      this.draggedTask = null;
    }
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
