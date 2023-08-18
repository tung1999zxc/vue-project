<template>
  <div>
    <div class="row bg-light ">
        <div class="col-8">
          <h1>Danh sách User</h1>
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
            <h1 >Chỉnh sửa user</h1>
            <form accept-charset="UTF-8" >
              <label for="title">Name</label>
              <input class="form-control" type="text" id="title" v-model="editUser.Name"  required>
              <br>
              <label for="author">Slug</label>
              <input class="form-control" type="text" id="author" v-model="editUser.Slug"  required>
              
              <br>
              <!-- <label for="description">CoverImages</label>
              <input type="" class="form-control " id="description" v-model="editUser.CoverImages" >
              <br> -->
              <label for="author">Description</label>
              <input class="form-control" type="text" id="author" v-model="editUser.Description"  required>
              <br>
              <label for="author">Website</label>
              <input class="form-control" type="text" id="author" v-model="editUser.Website"  required>
              <br>
              <button class="btn-block bg-success" type="submit">Thêm User</button>
            
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
            
        },
        getBooks() {
      axios.get('get_books.php')
        .then(response => {
          this.books = response.data;
        })
        .catch(error => {
          alert('Lỗi khi lấy dữ liệu sách:', error);
        });
    },
    addNewBook() {
      // Gửi yêu cầu POST để thêm sách mới
      axios.post('add_book.php', this.newBook)
        .then(response => {
          console.log(response.data); // Kết quả từ API
          // Sau khi thêm sách thành công, cập nhật danh sách sách
          this.getBooks();
          // Reset form
          this.newBook.title = '';
          this.newBook.author = '';
          this.newBook.description = '';
        })
        .catch(error => {
          console.error('Lỗi khi thêm sách:', error);
        });
    },
    editBook(book) {
      this.editBookData.id = book.id;
      this.editBookData.title = book.title;
      this.editBookData.author = book.author;
      this.editBookData.description = book.description;
    },
    updateBook() {
      // Gửi yêu cầu PUT để cập nhật thông tin sách
      axios.put(`update_book.php?id=${this.editBookData.id}`, this.editBookData)
        .then(response => {
          console.log(response.data); // Kết quả từ API
          // Sau khi cập nhật sách thành công, cập nhật danh sách sách
          this.getBooks();
          // Reset biến editBookData
          this.editBookData = {
            id: '',
            title: '',
            author: '',
            description: '',
          };
        })
        .catch(error => {
          console.error('Lỗi khi cập nhật sách:', error);
        });
    },
    deleteBook(bookId) {
      axios.delete('delete_book.php', { data: { id: bookId } })
        .then(response => {
          console.log(response.data); // Kết quả từ API
          // Sau khi xóa sách thành công, cập nhật danh sách sách
          this.getBooks();
        })
        .catch(error => {
          console.error('Lỗi khi xóa sách:', error);
        });
    },
      },
    };
    </script>
    
    <style scoped>
    
    </style>
    
    