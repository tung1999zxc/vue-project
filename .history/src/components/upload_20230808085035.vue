<template>
  <div>
    
  </div>
</template>

<script>
import VueUploadComponent from 'vue-upload-component';

export default {
  components: {
    VueUpload: VueUploadComponent,
  },
  data() {
    return {
      uploadUrl: 'https://example.com/api/upload', // Thay đổi thành URL tải lên của bạn
      files: [],
    };
  },
  methods: {
    handleFileChange(files) {
      this.files = files;
    },
    startUpload() {
      if (this.files.length > 0) {
        this.$refs.upload.upload();
      } else {
        alert('Vui lòng chọn tệp cần tải lên.');
      }
    },
  },
};
</script>
