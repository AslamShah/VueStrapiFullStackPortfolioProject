<template>
  <div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1>{{ category.categorytype }}</h1>

        <ProjectsList :projects="category.projects || []"></ProjectsList>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectsList from "../components/ProjectsList.vue";
import gql from "graphql-tag";

export default {
  data() {
    return {
      category: [],
      routeParam: this.$route.params.id
    };
  },
  components: {
    ProjectsList
  },
  apollo: {
    category: {
      query: gql`
        query Category($id: ID!) {
          category(id: $id) {
            categorytype
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
        }
      `,
      variables() {
        return { id: this.routeParam };
      }
    }
  }
};
</script>

