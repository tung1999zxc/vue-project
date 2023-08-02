<template>
  <div>
    <div v-if="isAuthenticated"><test/><br><footer2/></div> 
    <div class="text-center mt-5 h5" v-else>Vui lòng đăng nhập hoặc đăng ký để truy cập vào trang chủ.
      <footer1/>
    </div>
  </div>
</template>

<script>
import test from '../components/test.vue'
import footer2 from '../components/footer2.vue'
import footer1  from '../components/footer1.vue'
import { mapGetters , mapMutations} from 'vuex';

export default {
  computed: {
    ...mapGetters('auth', ['isAuthenticated']), // Sử dụng getter isAuthenticated từ Vuex module auth
},
  components: {test,footer1,footer2},
  data() {
    return {
    };
  },
 
  methods: {
  }
};
</script>
