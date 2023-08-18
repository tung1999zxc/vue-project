<template>
  <div v-if="!isAuthenticated"><p>Bạn phải đăng nhập để sử dụng</p></div>
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
import { computed } from 'vue';

const store = useStore();
const isAuthenticated = computed(()=> store.getters['auth/isAuthenticated']);
const userinfo = computed (() =>  store.getters['auth/userinfo']);

</script>

<style>

</style>