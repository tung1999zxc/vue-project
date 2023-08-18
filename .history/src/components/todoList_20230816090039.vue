<template>
  <div v-if="!isAuthenticated"><p class="text-center h3 mt-5 text-warning ">Bạn phải đăng nhập để sử dụng</p></div>
  <div v-else><div class="todo-list">
    <h2>Todo List</h2>
   <div class="row justify-content-around">
    <div class="col-5">
      <table class="table table-striped    ">
        <thead>
          <tr>
          <td> Time </td>
          <td> Todo </td>
          <td> chức năng </td>
          </tr>
        </thead>
        <tr v-for="(todo,index) in todos" :key="index">
          <td><p>{{ todo.id }}</p></td>
          <td class=""><p class="text-danger">{{ todo.title }}</p></td>
          <td> <button @click="handleEdit(todo,index)">Edit</button>
          <button @click="handleDelete(index)">Delete</button>
         <button @click="handleCompeleted(todo,index)">Hoàn thành</button></td>
        </tr>
        
      </table>
      <div class="form">
        <input v-model="newTodoTitle" placeholder="Enter todo title" />
        <button v-if="editTodo" @click="handleSave">Save</button>
        <button @click="addTodo">Add Todo</button>
      </div>
    </div>
    <div class="col-5">
      <table class="table ">
        <thead>
          <tr>
          <td> Time </td>
          <td> Time </td>
          <td> Todo </td>
          <td>  <button @click="handleDeleteAll">Delete All</button></td>
          </tr>
        </thead>
        <tr v-for="(todo,index) in reversedTodosComp" :key="index">
          <td><p>{{ todo.id }}<br>{{todo.timeEnd}}</p></td>
          <td><p>{{ todo.minutes}}</p></td>
          <td class=""><p class="text-danger">{{ todo.title }}</p></td>
          <td> <button @click="handleDeleteComp(index)">Delete</button></td>
        </tr>
        
      </table>
    </div>
   </div>

  </div> </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { ref , onMounted , computed} from 'vue';
import { format,differenceInMinutes,parse } from 'date-fns';

const store = useStore();
const isAuthenticated = computed(()=> store.getters['auth/isAuthenticated']);
const userinfo = computed (() =>  store.getters['auth/userinfo']);

interface Todo {
  id : any ;
  title : string;
  timeEnd? : any;
  minutes? :any;
}



const todos = ref<Todo[]>([]);
const todosCompeleted = ref<Todo[]>([]);

const newTodoTitle = ref<string>('');
const editTodo = ref <Todo | null>(null);
const edittingIndex = ref<number>();


const addTodo = () => {
  if (newTodoTitle.value.trim() !== '') {
    const timestamp = Date.now(); // Hoặc new Date().getTime()
    const formattedDate = format(timestamp, 'dd-MM-yyyy HH:mm:ss');
    todos.value.push({ id: formattedDate, title: newTodoTitle.value });
    newTodoTitle.value = '';
  }
  saveDataToLacal();
};

 const handleEdit = (todo: Todo, index) => {
    edittingIndex.value = index;
    editTodo.value = { ...todo};
    newTodoTitle.value = editTodo.value.title;
    

 }
 const handleSave = () =>{
   editTodo.value.title = newTodoTitle.value;
   todos.value[edittingIndex.value] = editTodo.value ;
   newTodoTitle.value= "";
   editTodo.value= null;
   saveDataToLacal();
 }
 
const handleDelete = (index: number) => {
  const confirmDelete = window.confirm('Bạn có chắc muốn xóa mục này?');
  if (confirmDelete) {
    // const index = todos.value.findIndex(todo =>todo.id === todoId);
    todos.value.splice(index, 1);
    saveDataToLacal();
  };}

  const handleDeleteComp = (index) => {  
    const confirmDelete = window.confirm('Bạn có chắc muốn xóa mục này?');
    if (confirmDelete) {
      todosCompeleted.value.splice(index,1);
     saveDataToLacal();
  };}
  
  const handleCompeleted = (todo: Todo , index: number ) => {
    const timestamp = Date.now();
    const formattedDate = format(timestamp, 'dd-MM-yyyy HH:mm:ss');
    todo.timeEnd = formattedDate;
    const dateFormat = 'dd-MM-yyyy HH:mm:ss';
    const startTimeDate = parse(todo.id, dateFormat, new Date());
    const endTimeDate = parse(todo.timeEnd, dateFormat, new Date());
    const minutes= differenceInMinutes(endTimeDate, startTimeDate ) % 60; 
    alert ( minutes);
    todo.minutes = minutes;
    const todoComp = {...todo};
    todosCompeleted.value.push(todoComp);
    todos.value.splice(index,1);
    saveDataToLacal();
    
    
  }
  

  const reversedTodosComp = computed(() => {
      return todosCompeleted.value.slice().reverse();
    });
  
 const saveDataToLacal = (params) => {
  localStorage.setItem('todos' , JSON.stringify( todos.value));
  localStorage.setItem('todosComp' , JSON.stringify(todosCompeleted.value));}

const handleDeleteAll = () => {
  const confim = window.confirm('Bạn chắc chắn muốn xoá tất cả')
   if (confim) {
    // todosCompeleted.value.length =0;
    todosCompeleted.value.splice(0,todosCompeleted.value.length);
    saveDataToLacal();
   }
  }
  
 
 
   onMounted(() => {
    const saveTodos = localStorage.getItem('todos');
    const saveTodos2 = localStorage.getItem('todosComp');
    if (saveTodos || saveTodos2){
      todos.value = JSON.parse(saveTodos);
      todosCompeleted.value = JSON.parse(saveTodos2);
    }
   })

</script>

<style>

</style>