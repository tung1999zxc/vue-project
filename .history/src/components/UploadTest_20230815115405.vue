<template>
  <div class="todo-list">
    <h2>Todo List</h2>
   <div class="row">
    <div class="col-3">
      <table class="table table-striped    ">
        <thead>
          <tr>
          <td> Time </td>
          <td> Todo </td>
          <td> chức năng </td>
          </tr>
        </thead>
        <tr v-for="todo in todos" :key="todo.id">
          <td>{{ todo.id }}</td>
          <td class="">{{ todo.title }}</td>
          <td> <button @click="deleteTodo(todo.id)">Delete</button></td>
        </tr>
        <td ></td>
      </table>
    </div>
   </div>
   
    
    <div class="form">
      <input v-model="newTodoTitle" placeholder="Enter todo title" />
      <button @click="addTodo">Add Todo</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref , onMounted } from 'vue';
import { format } from 'date-fns';
interface Todo {
  id : any ;
  title : string;
  completed : boolean;
  time : any;
}


const todos = ref<Todo[]>([
  
]);

const newTodoTitle = ref<string>('');


const addTodo = () => {
  if (newTodoTitle.value.trim() !== '') {
    const timestamp = Date.now(); // Hoặc new Date().getTime()
    const formattedDate = format(timestamp, 'dd/MM/yyyy HH:mm:ss');
    todos.value.push({ id: formattedDate, title: newTodoTitle.value, completed: false });
    newTodoTitle.value = '';
  }
  localStorage.setItem('todos', JSON.stringify(todos.value));
};

const deleteTodo = (todoId: number) => {
  const index = todos.value.findIndex(todo =>todo.id === todoId)
    todos.value.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos.value));
  
  };

   onMounted(() => {
    const saveTodos = localStorage.getItem('todos');
    if (saveTodos){
      todos.value = JSON.parse(saveTodos);
    }
   })
</script>

<!-- <template>
  <div>
    <h2>Name List</h2>
    
   <div class="row">
   <div class="col-8">
    <ul>
      <li v-for="(todo,index) in todos" :key="index">{{todo}}
        <button @click="handleDelete(index)">xoá</button>
        <button @click="handleEdit(index,todo)">sửa</button>
      </li>
    </ul>
   </div>
   <div class="col-4">
    <input v-model="newName" @keyup.enter="addName" placeholder="Enter a name" />
    <button @click="addName">Add Name</button>
    <button v-show="isEdit" @click="handleUpdate">Save</button>
   </div>
   </div>
    
  </div>
</template>

<script setup lang="ts">
import { ref ,onMounted } from 'vue';

const isEdit =ref(false);
interface Todo {
  Name: string;
  Time: "1h";
}

const todos = ref<Todo[]>([]);
const newName = ref<Todo>(
  
);
const edittingItem = ref();

const addName = () => {
    
    todos.value.push(newName.value);
    newName.value.Name = '';
    // localStorage.setItem('todos', JSON.stringify(todos.value));

 
};

const handleDelete = (index) => {
  isEdit.value= true;
  todos.value.splice(index,1);
  
}
const handleEdit = (index,name) => {
  edittingItem.value = index;
  newName.value = name;
  isEdit.value = true;
  
}
const handleUpdate = () => {
  todos.value[edittingItem.value] = newName.value;
  newName.value = ""
  isEdit.value= false;
  // localStorage.setItem('todos', JSON.stringify(todos.value));

}

onMounted(()=> 
{
  const savedTosos = localStorage.getItem('todos');
  if (savedTosos) {
    todos.value = JSON.parse(savedTosos);

  }
})




</script> -->


<!-- <template>
  <div>
    <p>Prop value: {{ propValue }}</p>
    <p>Reactive variable: {{ reactiveVar }}</p>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps(['propValue']);
const { emit } = defineEmits();
const reactiveVar = ref(0);
</script> -->


<!-- 
<template>
  <div>
    <p>Original value: {{ value }}</p>
    <p>Doubled value: {{ doubledValue }}</p>
    <button @click="chanceNumber"> Button </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const value = ref(5);
const doubledValue = computed(() => value.value * 2);
const chanceNumber = (params) => {
   value.value += 5;
}
</script> -->

<!-- <template>
  <div>
    <input v-model="phoneNumber" placeholder="Số điện thoại" @input="validatePhoneNumber" />
    <p v-if="phoneNumberError">{{ phoneNumberError }}</p>

    <form action="" @submit.prevent="âs">
    <input v-model="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" /> <br>
    <input v-model="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
  <button type="submit">gửi đi</button></form>
    
 
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber: '',
      phoneNumberError: '',
    };
  },
  methods: {
    validatePhoneNumber() {
      if (!/^\d{10}$/.test(this.phoneNumber)) {
        this.phoneNumberError = 'Số điện thoại không hợp lệ';
      } else {
        this.phoneNumberError = '';
      }
    },
  },
};
</script> -->


<!-- <template>
  <div>
    <input type="file" ref="fileInput" @change="handleFileChange" />
    <button @click="uploadFile">Tải lên</button> <br><br>
    tải lên nhiều file <br>
    <input type="file" ref="fileInput" @change="handleFileChange" multiple />
    <button @click="uploadFiles">Tải lên</button>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    handleFileChange(event) {
      this.selectedFile = event.target.files[0];
      // this.selectedFiles = event.target.files;
    },
    async uploadFile() {
      if (this.selectedFile) {
        const formData = new FormData();
        formData.append('file', this.selectedFile);

      //   const formData = new FormData();
      //   for (let i = 0; i < this.selectedFiles.length; i++) {
      //   formData.append('files', this.selectedFiles[i]);
      // }

        try {
          const response = await fetch('https://example.com/api/upload', {
            method: 'POST',
            body: formData,
          });

          if (response.ok) {
            console.log('Tải tệp lên thành công.');
          } else {
            console.error('Lỗi khi tải tệp lên.');
          }
        } catch (error) {
          console.error('Lỗi kết nối:', error);
        }
      } else {
        console.warn('Vui lòng chọn tệp cần tải lên.');
      }
    },
  },
};
</script> -->
