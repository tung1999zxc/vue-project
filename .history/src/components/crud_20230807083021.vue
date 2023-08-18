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
            <td>CoverImages</td>
            <td>Description</td>
            <td>Website</td>
            <td>Chức năng</td>
          </tr>
        </thead>
          <tr >
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><button @click="editBook(book)">Chỉnh sửa</button>
              <button @click="deleteBook(book.id)">Xóa</button></td>
          </tr >
    
        </table>
        
        </div>
    
        
          <div class="col-3 ">
            <h1 >Chỉnh sửa sách</h1>
            <form accept-charset="UTF-8" >
              <label for="title">Name</label>
              <input class="form-control" type="text" id="title" v-model="editBookData.title"  required>
              <br>
              <label for="author">Slug</label>
              <input class="form-control" type="text" id="author" v-model="editBookData.author"  required>
              
              <br>
              <label for="description">CoverImages</label>
              <textarea class="form-control " id="description" v-model="editBookData.description" ></textarea>
              <br>
              <label for="author">Description</label>
              <input class="form-control" type="text" id="author" v-model="editBookData.author"  required>
              <br>
              <label for="author">Slug</label>
              <input class="form-control" type="text" id="author" v-model="editBookData.author"  required>
              <br>
              <button class="btn-block bg-success" type="submit"></button>
            
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
    users: [],
    newUser: {
      Name: '',
      Slug: '',
      CoverImages:[], 
      Description: '', 
      Website: '', 
    },
    editUser: {
      Name: '',
      Slug: '',
      CoverImages:[], 
      Description: '', 
      Website: '', 
    },
    
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
    
    