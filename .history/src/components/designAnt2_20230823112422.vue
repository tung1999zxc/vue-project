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
    };
  }, 
  created() {
        console.log('Component created');
        this.fetchRandomQuote();
      },
      mounted() {
        console.log('Component mounted');
      },
      updated() {
        console.log('Component updated');
      },
      methods: {
        fetchRandomQuote() {
          fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => {
              this.quote = data.content;
            })
            .catch(error => {
              this.quote = 'Failed to fetch a quote.';
            });
        },}
  
};
</script>
<style lang="">
  
</style>