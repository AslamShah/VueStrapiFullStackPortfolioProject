<template>
  <div>
    <div id = "leftDiv" class="col-12"> <router-link to="/">Home</router-link>
       <router-link to="/contact">Contact</router-link>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Menubar",
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