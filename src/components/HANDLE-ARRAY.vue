<template>
    <ul class=" ">
      <li class="d-inline h3 " v-for="number in numbers" :key="number">{{ number }}-</li>
    </ul>
    <button @click="addNumber">thêm phần tử cho mảng</button>
    <button @click="removeNumber">xoá phần tử cho mảng</button>
    <h4><p>Sử dụng phương thức map để tạo mảng mới từ mảng hiện có:</p> {{doubledNumbers}}</h4>
    <h4><p>Sử dụng phương thức filter để lọc các phần tử trong mảng:</p> {{evenNumbers}}</h4>
    <h4><p>Sử dụng phương thức find để tìm phần tử đầu tiên thoả mãn điều kiện:</p> {{firstEvenNumber}}</h4>
    <h4><p>Sử dụng phương thức reduce để tính tổng các phần tử trong mảng:></p> {{sum}}</h4>
    <h4><p>Sắp xếp mảng:</p> {{sortedNumbers}}</h4>
    <h4><p>Kiểm tra xem mảng có chứa một phần tử cụ thể hay không numbers.value.includes(3)</p> {{containsThree}}</h4>
  
    <input type="number" v-model="minPrice" />
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  
  const minPrice = ref(0);
  
  const numbers = ref<number[]>([1, 2, 10 , 3, 4, 5]);
  
  
  
  
  
    const addNumber = () => {
      const getRandomNumber = Math.floor(Math.random() * 1000) + 1;
    numbers.value.push(getRandomNumber);
  
  };
  
  const removeNumber = () => {
    numbers.value.splice(numbers.length, 1);// xoá từ phần tử đầu tiên
    numbers.value.pop(); // xoá từ phần tử cuối cùng
  };
  
  //Sử dụng phương thức map để tạo mảng mới từ mảng hiện có:
  const doubledNumbers = numbers.value.map(number => number * 75/100);
  
  //Sử dụng phương thức filter để lọc các phần tử trong mảng:
  const evenNumbers = numbers.value.filter(number => number % 2 === 0);
  
  //Sử dụng phương thức find để tìm phần tử đầu tiên thoả mãn điều kiện:
  const firstEvenNumber = numbers.value.find(number => number % 2 === 0);
  
  // Sử dụng phương thức reduce để tính tổng các phần tử trong mảng:
  const sum = numbers.value.reduce((acc, number) => acc + number, 0);
  
  // Sắp xếp mảng:
  const sortedNumbers = computed(()=> numbers.value.sort((a, b) => b - a));
  
  // Kiểm tra xem mảng có chứa một phần tử cụ thể hay không:
  const containsThree = numbers.value.includes(3);
  
  
  
  </script>