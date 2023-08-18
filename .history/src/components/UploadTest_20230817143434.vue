<template>
  <ul class=" ">
    <li class="d-inline h3 " v-for="number in numbers" :key="number">{{ number }}-</li>
  </ul>
  <button @click="addNumber">thêm phần tử cho mảng</button>
  <button @click="removeNumber">xoá phần tử cho mảng</button>
  <h4>Sử dụng phương thức map để tạo mảng mới từ mảng hiện có: {{doubledNumbers}}</h4>
  <h4>Sử dụng phương thức filter để lọc các phần tử trong mảng: {{evenNumbers}}</h4>
  <h4>Sử dụng phương thức find để tìm phần tử đầu tiên thoả mãn điều kiện: {{firstEvenNumber}}</h4>
  <h4>Sử dụng phương thức reduce để tính tổng các phần tử trong mảng: {{sum}}</h4>
  <h4>Sắp xếp mảng: {{sortedNumbers}}</h4>
  <h4>Kiểm tra xem mảng có chứa một phần tử cụ thể hay không {{containsThree}}</h4>
  <h4> {{}}</h4>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const numbers = ref<number[]>([1, 2, 3, 4, 5]);





  const addNumber = () => {
    const getRandomNumber = Math.floor(Math.random() * 100) + 1;
  numbers.value.push(getRandomNumber);
};

const removeNumber = () => {
  numbers.value.splice(numbers.length, 1);
};

//Sử dụng phương thức map để tạo mảng mới từ mảng hiện có:
const doubledNumbers = numbers.value.map(number => number * 2);

//Sử dụng phương thức filter để lọc các phần tử trong mảng:
const evenNumbers = numbers.value.filter(number => number % 2 === 0);

//Sử dụng phương thức find để tìm phần tử đầu tiên thoả mãn điều kiện:
const firstEvenNumber = numbers.value.find(number => number % 2 === 0);

// Sử dụng phương thức reduce để tính tổng các phần tử trong mảng:
const sum = numbers.value.reduce((acc, number) => acc + number, 0);

// Sắp xếp mảng:
const sortedNumbers = numbers.value.sort((a, b) => a - b);

// Kiểm tra xem mảng có chứa một phần tử cụ thể hay không:
const containsThree = numbers.value.includes(3);



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
import { Todo } from '@/types';

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
