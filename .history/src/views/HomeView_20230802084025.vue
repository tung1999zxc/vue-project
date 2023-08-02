<template>
  <div>
    <div v-if="isAuthenticated"><test/></div> 
    <div v-else>Vui lòng đăng nhập hoặc đăng ký để truy cập vào trang chủ.</div>
  </div>
</template>

<script>
import test from '../components/test.vue'
import { mapGetters , mapMutations} from 'vuex';

export default {
  computed: {
    ...mapGetters('auth', ['isAuthenticated']), // Sử dụng getter isAuthenticated từ Vuex module auth
},
  components: {test},
  data() {
    return {
    };
  },
 
  methods: {
  }
};
</script>
