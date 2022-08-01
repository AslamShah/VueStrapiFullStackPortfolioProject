<template>
  <div class="row">
      <div class="col-6">
          <div class="uk-container uk-container-small">
        <vue-markdown-it
          v-if="project.content"
          :source="project.content"
          id="editor"
        />
      
      </div>
      </div>
      <div class="col-6">
           <div
      v-if="project.image"
      id="banner"
      class="uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding"
      :data-src="api_url + project.image.url"
      uk-img
    >
      <h1>{{ project.title }}</h1>
      </div>

  </div>
  </div>
</template>

<script>
var moment = require("moment");
import VueMarkdownIt from "vue-markdown-it";
import gql from "graphql-tag";

export default {
  data() {
    return {
      project: {},
      moment: moment,
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      routeParam: this.$route.params.id
    };
  },
  components: {
    VueMarkdownIt
  },
  apollo: {
    project: {
      query: gql`
        query Projects($id: ID!) {
          project(id: $id) {
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
      `,
      variables() {
        return {
          id: this.routeParam
        };
      }
    }
  }
};
</script>