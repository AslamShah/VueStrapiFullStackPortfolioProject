<template>
<div class="row">
  <div id="padding-top" class="col-12">
   <ArticlesList :articles="articles"></ArticlesList>
  </div>
    <div class="col-4">

    </div>
      <div class="col-4">

      </div>

  
</div>
 

  




</template>

<script>

import ArticlesList from "../components/ArticlesList.vue";
import gql from "graphql-tag";


export default {
  components: {
    ArticlesList
  },
  data() {
    return {
      articles: [],
       articlesToShow: 3,
      totalArticles: 0,
      
     
     
    };
  },
    mounted() {
    this.totalArticles = this.articles.length,
      console.log(this.articles.length);
     
    },
  
  apollo: {
    articles: gql`
      query Articles {
        articles {
          id
          title
          description
          image {
            url
          }
          category {
            categorytype
          }
        }
       
  
      },
     
    `
  },
  
 
 
};
</script>
<style scoped>
#padding-top{
  padding-top:13px !important;
}
</style>
