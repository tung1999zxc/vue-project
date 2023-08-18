<template>
  <div>
    <h2>Name List</h2>
    <ul>
      <li v-for="(name,index) in names" :key="index">{{ name }}
        <button @click="handleDelete(index)">xoá</button>
        <button @click="handleEdit(name)">sửa</button>
      </li>
    </ul>
    <input v-model="newName" @keyup.enter="addName" placeholder="Enter a name" />
    <button @click="addName">Add Name</button>
    <button @click="handleUpdate">Save</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isEdit =ref(false);
const names = ref([]);
const newName = ref('');

const addName = () => {
  if (newName.value.trim() !== '') {
    names.value.push(newName.value);
    newName.value = '';
  }
};

const handleDelete = (index) => {
  isEdit.value= true;
  names.value.splice(index,1);
  
}
const handleEdit = (name) => {
  newName.value = name;
  
}
const handleUpdate = (params) => {
  


  
}




</script>


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
