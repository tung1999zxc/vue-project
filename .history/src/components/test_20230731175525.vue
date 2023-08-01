<template>
    <div class="news-page">
      <h1 class="page-title">Latest News</h1>
      <div class="news-list">
        <div v-for="article in newsArticles" :key="article.id" class="news-item">
          <img :src="article.image" :alt="article.title" class="article-image" />
          <h2 class="article-title">{{ article.title }}</h2>
          <p class="article-summary">{{ article.summary }}</p>
          <a :href="article.link" class="read-more-link">Read more</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newsArticles: [
          {
            id: 1,
            title: 'Sample Article 1',
            summary: 'This is a summary of Sample Article 1.',
            image: 'https://via.placeholder.com/150',
            link: '#',
          },
          {
            id: 2,
            title: 'Sample Article 2',
            summary: 'This is a summary of Sample Article 2.',
            image: 'https://via.placeholder.com/150',
            link: '#',
          },
          // Add more sample articles here...
        ],
      };
    },
  };
  </script>
  
  <style>
  .news-page {
    max-width: 1200px;
    margin: auto;
    padding: 20px;
  }
  
  .page-title {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .news-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;
  }
  
  .news-item {
    background-color: #f0f0f0;
    padding: 20px;
  }
  
  .article-image {
    width: 100%;
    height: auto;
  }
  
  .article-title {
    font-size: 1.2rem;
    margin-top: 10px;
  }
  
  .article-summary {
    margin-top: 5px;
    font-size: 0.9rem;
  }
  
  .read-more-link {
    display: block;
    text-align: center;
    margin-top: 15px;
    color: #007bff;
  }
  </style>
  