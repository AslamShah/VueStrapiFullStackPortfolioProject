<template>
<div class="row">
  <div id="padding-top" class="col-12" >
   <projects-list :projects="projects"></projects-list>
  </div>
   
    <div class="col-4">

    </div>
      <div class="col-4">

      </div>

  
</div>
  
</template>

<script>
import ProjectsList from "../components/ProjectsList.vue";
import gql from "graphql-tag";




export default {
  components: {
    ProjectsList
  },

   

  data() {

    
    return {
      projects: []
    };
    
  },
  apollo: {
    projects: gql`
      query Projects {
        projects {
          id
          title
          image {
            url
          }
          category {
            categorytype
          }
          content
        }
      }
    `
  }
};
</script>

<style scoped>
#padding-top{
  padding-top:13px !important;
}
</style>


