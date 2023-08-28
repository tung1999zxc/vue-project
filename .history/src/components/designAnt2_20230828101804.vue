
<template>
  <div class="container">
   <div class="row">
    
      <div class="task-list col-sm-5 mx-3" 
      @dragover.prevent
      @drop="handleTaskDropBack">
        <h2 class="">"Công việc cần làm"</h2>
        <div class="task  " v-for="(item,index) in tasks" :key="index"
        
        :draggable="true"
        @dragstart="handleTaskDragStart(index)"
        @dragend="handleDragEnd"
        @drop="handleDropItemBack(index)"
    
      ><div class="row">
        <div class="col-10"><span class="" >{{ item.title }} </span></div>
        <div class="col-2"><button class="" @click="deleteTask(index)">Xoá</button></div>
      </div></div> <hr>
    <div class="row d-flex mx-2">
      <input class="form-control  " type="text" v-model="newTaskTitle" placeholder="Thêm việc cần làm" required>
      <button class="btn btn-success mt-2 h3 " @click="addTask">Thêm task</button>
    </div>
  </div>
  <div class="task-list col-sm-5"
    
  @dragover.prevent
  @drop="handleTaskDropComp"
 
  >
    <h2 class="">Công việc đã hoàn thành</h2>
    <div class="task" v-for="(item,index) in tasksComp" :key="index"
    :draggable="true"
    @dragstart="handleTaskDragStartBack(index)"
    @dragend="handleDragEnd"
    @drop="handleDropItemComp(index)"

  ><div class="row">
    <div class="col-10"><span class="" >{{ item.title }} </span></div>
    <div class="col-2"><button class="" @click="deleteTaskComp(index)">Xoá</button></div>
  </div></div></div>
    </div>
  

   
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
      tasksComp:[
   ],
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
    deleteTaskComp(index){
      this.tasksComp.splice(index,1);
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
    handleTaskDropComp(index) {  

          // if (this.draggedTask != null && this.tasksComp[this.draggedTask] )
          // {
          //   handleDragEnd();   
          // }
          
          if (this.tasksComp.findIndex(task => task.id === this.draggedTask.id) === -1) {
            this.tasksComp.push({...this.tasks[this.draggedTaskIndex]});
            this.tasks.splice(this.draggedTaskIndex,1);
            this.draggedTask = null;}},
            

    handleTaskDropBack(index){
      // if (this.draggedTask != null && this.tasks[this.draggedTask]){
      //   handleDragEnd();
      // }
      if (this.draggedTaskIndex !== null && this.tasks.findIndex(task => task.id === this.draggedTask.id) === -1) {
        this.tasks.push({...this.tasksComp[this.draggedTaskIndex]});
      this.tasksComp.splice(this.draggedTaskIndex,1);
      this.draggedTask = null;}
      
      },

      handleDropItemBack(targetIndex) {
  if (this.draggedTaskIndex !== null && this.tasks.findIndex(task => task.id === this.draggedTask.id) != -1) {
    // Lưu item đang được kéo vào biến
    const draggedItem = this.tasks[this.draggedTaskIndex];
    // Lưu item tại vị trí thả vào biến
    const targetItem = this.tasks[targetIndex];
    // Đổi chỗ hai item trong mảng
    this.tasks.splice(this.draggedTaskIndex, 1, targetItem);
    this.tasks.splice(targetIndex, 1, {...draggedItem});  //copy từ mảng mới phông phụ thuộc vào mảng gốc
    // Đặt draggedItemIndex về null để kết thúc quá trình kéo thả
    this.draggedTaskIndex = null;
  }else{
    this.tasks.splice(targetIndex, 0, {... this.tasksComp[this.draggedTaskIndex]});
    this.tasksComp.splice(this.draggedTaskIndex, 1);  

  }
},
      handleDropItemComp(targetIndex) {
  if (this.draggedTaskIndex !== null && this.tasksComp.findIndex(task => task.id === this.draggedTask.id) != -1 ) {
    // Lưu item đang được kéo vào biến
    const draggedItem = this.tasksComp[this.draggedTaskIndex];
    // Lưu item tại vị trí thả vào biến
    const targetItem = this.tasksComp[targetIndex];
    // Đổi chỗ hai item trong mảng
    this.tasksComp.splice(this.draggedTaskIndex, 1, targetItem);
    this.tasksComp.splice(targetIndex, 1, {...draggedItem});  //copy từ mảng mới phông phụ thuộc vào mảng gốc
    // Đặt draggedItemIndex về null để kết thúc quá trình kéo thả
    this.draggedTaskIndex = null;
  }else{
    this.tasksComp.splice(targetIndex, -1, {... this.tasks[this.draggedTaskIndex]});
    this.tasks.splice(this.draggedTaskIndex, 1);  

  }
}
   
  },
  updated () {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        localStorage.setItem('tasksComp', JSON.stringify(this.tasksComp));
   

  },
 
  created(){
       this.tasks = JSON.parse(localStorage.getItem('tasks'));
       this.tasksComp = JSON.parse(localStorage.getItem('tasksComp'));
       
  },

};
</script>

<style scoped>
.container {

  justify-content: space-between;
}
.task-list {
  
  border: 1px solid gray;
  padding: 10px;
}


.task {
  border-radius: 10px;
  background-color: lightblue;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
}
</style>
