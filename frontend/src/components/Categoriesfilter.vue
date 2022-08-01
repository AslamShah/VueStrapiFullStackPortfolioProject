<template>
  <div>
    <nav class="uk-navbar-container" uk-navbar>
      

      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li v-for="category in categories" v-bind:key="category.id">
            <router-link
              :to="{ path: 'articles/category/' + category.id }"
              :key="category.id"
            >
              {{ category.categorytype }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Categoriesfilter",
  data() {
    return {
      categories: []
    };
  },
  apollo: {
    categories: gql`
      query Categories {
        categories {
          id
          categorytype
        }
      }
    `
  }
};
</script>