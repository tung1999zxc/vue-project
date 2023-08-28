
<template>
  <div class="container">
    <div class="task-list" 
    @dragover.prevent
    @drop="handleTaskDrop">
      <h2 class="">"Công việc cần làm"</h2>
      <div class="task" v-for="(item,index) in tasks" :key="index"
      
      :draggable="true"
      @dragstart="handleTaskDragStart(index)"
      @dragend="handleDragEnd"
  
    >{{ item.title }} 
  <button @click="deleteTask(index)">Xoá</button></div> <hr>
  <div class="row d-flex mx-2">
    <input class="form-control  " type="text" v-model="newTaskTitle" placeholder="Thêm việc cần làm" required>
    <button class="btn btn-success mt-2 h3 " @click="addTask">Thêm task</button>
  </div>
</div>

    <div class="task-list"
    
    @dragover.prevent
    @drop="handleTaskDrop"
   
    >
      <h2 class="">Công việc đã hoàn thành</h2>
      <div class="task" v-for="(item,index) in tasksComp" :key="index"
      :draggable="true"
      @dragstart="handleTaskDragStart(index)"
      @dragend="handleDragEnd"
 
    >{{ item.title }}</div></div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      tasks: [
        {id:  Math.random().toString(36).substr(2, 9), title: '1'},
        {id:  Math.random().toString(36).substr(2, 9), title: '2' },
        {id:  Math.random().toString(36).substr(2, 9),title: '3' },
      ],
      tasksComp:[],
      newTaskTitle :'',
      draggedTask: null,
      draggedTaskBack: null,
    };
  },
  computed: {

  },
  methods: {

    deleteTask(index){
      this.tasks.splice(index,1);

    },

    addTask (){
      if (this.newTaskTitle != ''){
        const title  = this.newTaskTitle;
      this.tasks.push( {id : Math.random().toString(36).substr(2, 9), title : title})
      this.newTaskTitle = '';     

      }
    },

    handleTaskDragStart(index) {
      this.draggedTask = index;
      console.log(this.draggedTask);
    },
    handleTaskDragStartBack(index) {
      this.draggedTaskBack = index;
      console.log(this.draggedTaskBack);
    },
    handleDragEnd(){
      this.draggedTask= null;
      console.log(this.draggedTask)
    },
    handleTaskDrop(index) {  

          if (this.draggedTask != null && this.draggedTask != index){
            this.tasksComp.push({...this.tasks[this.draggedTask]});
            this.tasks.splice(this.draggedTask,1);
            this.draggedTask = null;
          };
          if (this.draggedTaskBack != null ){
           this.tasks.push({...this.tasksComp[this.draggedTaskBack]});
          this.tasksComp.splice(this.draggedTaskBack,1);
          this.draggedTaskBack = null;}

    },

  
  },
  // updated () {
  //       localStorage.setItem('tasks', JSON.stringify(this.tasks));
   

  // },
 
  // created(){
  //      this.tasks = JSON.parse(localStorage.getItem('tasks'));
       
  // },

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
