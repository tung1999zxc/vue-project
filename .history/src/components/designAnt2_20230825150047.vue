
<template>
  <div class="container">
    <div class="task-list" 
    @dragover.prevent
    @drop="handleTaskBack">
      <h2 class="">"Công việc cần làm"</h2>
      <div class="task" v-for="(item,index) in tasks" :key="index"
      
      :draggable="true"
      @dragstart="handleTaskDragStart(index)"
      @dragend="handleDragEnd"
      @drop="handleTaskBack(index)"
  
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
      @dragstart="handleTaskDragStartBack(index)"
      @dragend="handleDragEnd"
      @drop="handleTaskBack(index)"
 
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
      draggedTaskIndex: null,
      draggedTask: null,
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
        this.tasks.push( {id : Math.random().toString(36).substr(2, 9), title : title});
        this.newTaskTitle = '';     

      }
    },

    handleTaskDragStart(index) {
      this.draggedTaskIndex = index;
      this.draggedTask = this.tasks[this.draggedTaskIndex] ;
      console.log(this.draggedTask);
    },
    handleTaskDragStartBack(index) {
      this.draggedTaskIndex = index;
      this.draggedTask = this.tasksComp[this.draggedTaskIndex];
      console.log(this.draggedTask);
    },
    handleDragEnd(){
      this.draggedTaskIndex= null;
      this.draggedTask = null;
      console.log(this.draggedTask);
    },
    handleTaskDrop(index) {  

          // if (this.draggedTask != null && this.tasksComp[this.draggedTask] )
          // {
          //   handleDragEnd();   
          // }
          
          if (this.tasksComp.findIndex(task => task.id === this.draggedTask.id) === -1) {
            this.tasksComp.push({...this.tasks[this.draggedTaskIndex]});
            this.tasks.splice(this.draggedTaskIndex,1);
            this.draggedTask = null;}
            else {
              handleDropItem(index) ;
            }
    },

    handleTaskBack(index){
      // if (this.draggedTask != null && this.tasks[this.draggedTask]){
      //   handleDragEnd();
      // }
      if (this.tasks.findIndex(task => task.id === this.draggedTask.id) === -1) {
        this.tasks.push({...this.tasksComp[this.draggedTaskIndex]});
      this.tasksComp.splice(this.draggedTaskIndex,1);
      this.draggedTask = null;}
      else {
       handleDropItem(index) ;
            }
      },

      handleDropItem(targetIndex) {
  if (this.draggedTaskIndex !== null) {
    // Lưu item đang được kéo vào biến
    const draggedItem = this.tasks[this.draggedTaskIndex];

    // Lưu item tại vị trí thả vào biến
    const targetItem = this.tasks[targetIndex];

    // Đổi chỗ hai item trong mảng
    this.tasks.splice(this.draggedTaskIndex, 1, targetItem);
    this.tasks.splice(targetIndex, 1, {...draggedItem});  //copy từ mảng mới phông phụ thuộc vào mảng gốc

    // Đặt draggedItemIndex về null để kết thúc quá trình kéo thả
   this.draggedTaskIndex = null;
  }
}
   
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
