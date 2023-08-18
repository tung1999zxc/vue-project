<template>
  <Form @submit="submitForm">
    <Field name="name" rules="required" v-slot="{ errors }">
      <input v-model="name" placeholder="Tên" />
      <ErrorMessage :name="name" :errors="errors" />
    </Field>

    <Field name="email" rules="required|email" v-slot="{ errors }">
      <input v-model="email" placeholder="Email" />
      <ErrorMessage :name="email" :errors="errors" />
    </Field>

    <Field name="password" rules="required|min:6" v-slot="{ errors }">
      <input type="password" v-model="password" placeholder="Mật khẩu" />
      <ErrorMessage :name="password" :errors="errors" />
    </Field>

    <button type="submit">Gửi</button>
  </Form>
</template>

<script>
import { useForm } from 'vee-validate';

export default {
  setup() {
    const { handleSubmit } = useForm();

    const submitForm = handleSubmit(values => {
      // Xử lý gửi dữ liệu
    });

    return {
      submitForm,
    };
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
};
</script>


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
