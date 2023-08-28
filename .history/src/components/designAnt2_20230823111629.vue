<template lang="">
  <div>
    <h2>{{ quote }}</h2>
  </div>
</template>
<script>
export default {
  data (){
    return{
      data: {
        quote: 'Fetching a random quote...',
      },
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