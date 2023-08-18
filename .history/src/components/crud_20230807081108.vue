<template>
  <div>
    <div class="row bg-light ">
        <div class="col-8">
          <h1>Danh sách sách</h1>
        <table class="table table-striped table-dark">
          <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Slug</td>
            <td></td>
            <td>Chức năng</td>
          </tr>
        </thead>
          <tr v-for="" >
            <td>{{book.id}}</td>
            <td>{{ book.title }}</td>
            <td>{{ book.author }}</td>
            <td>{{ book.description }}</td>
            <td><button @click="editBook(book)">Chỉnh sửa</button>
              <button @click="deleteBook(book.id)">Xóa</button></td>
          </tr >
    
        </table>
        
        </div>
    
        
          <div class="col-3 ">
            <h1 v-if="editBookData.id">Chỉnh sửa sách</h1>
            <h1 v-else>Thêm sách mới</h1>
            <!-- <form accept-charset="UTF-8" @submit.prevent="editBookData.id ? updateBook() : addNewBook()"> -->
              <label for="title">Tiêu đề:</label>
              <input class="form-control "type="text" id="title" v-model="editBookData.title" v-if="editBookData.id" required>
              <input class="form-control "type="text" id="title" v-model="newBook.title" v-else required>
              <br>
              <label for="author">Tác giả:</label>
              <input class="form-control "type="text" id="author" v-model="editBookData.author" v-if="editBookData.id" required>
              <input class="form-control "type="text" id="author" v-model="newBook.author" v-else required>
              <br>
              <label for="description">Mô tả:</label>
              <textarea class="form-control " id="description" v-model="editBookData.description" v-if="editBookData.id"></textarea>
              <textarea class="form-control "id="description" v-model="newBook.description" v-else></textarea>
              <br>
              <button class="btn-block bg-success" type="submit">{{ editBookData.id ? 'Lưu' : 'Thêm sách' }}</button>
            
            </form>
          </div>
        </div>
    <button @click="handleSearch">tìm kiếm</button>
  </div>
  </template>
  
    
    <script>
  import axios from 'axios';
  
    
    export default {
      
      data() {
        return {
       
          
        };
      },
   
      methods: {
        handleSearch(){
            axios.post('https://api.tranhai.net/api/manufacturer/_search?id=1')
            .then((result) => {
                console.log(result.data);
                alert('tìm kiếm thành công')
                
            }).catch((err) => {
                console.error(err);
                alert('tìm kiếm thất bại')

        })
            
        }
       
      },
    };
    </script>
    
    <style scoped>
    
    </style>
    
    