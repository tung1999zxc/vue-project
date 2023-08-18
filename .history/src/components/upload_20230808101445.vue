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
