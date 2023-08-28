<template lang="">
  <div>
    <h2>{{ quote }}</h2>
  </div>
</template>
<script>
export default {
  data (){
    return{
      
    }
  },
  created(){
    const currentTime = new Date().toLocaleTimeString();
    console.log(currentTime);
  }
  
} 
</script>
<style lang="">
  
</style>