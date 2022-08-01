<template>
  <div id="div-top">
    <div class="uk-child-width-1-2" uk-grid>
      <div>
        <router-link
          v-for="project in leftProjects"
          :to="{ path: '/project/' + project.id }"
          class="uk-link-reset"
          :key="project.id"
        >
          <div class="uk-card uk-card-muted">
            <div class="uk-card-media-top">
              <img :src="api_url + project.image.url" alt="" height="100" />
            </div>
            <div class="uk-card-body">
              <p
                id="category"
                v-if="project.category"
                class="uk-text-uppercase"
              >
                {{ project.category.categorytype }}
              </p>
              <p id="title" class="uk-text-large">{{ project.title }}</p>
            </div>
          </div>
        </router-link>
      </div>
      <div>
        <div class="uk-child-width-1-2@m uk-grid-match" uk-grid>
          <router-link
            v-for="project in rightProjects"
            :to="{ path: '/project/' + project.id }"
            class="uk-link-reset"
            :key="project.id"
          >
            <div class="uk-card uk-card-muted">
              <div class="uk-card-media-top">
                <img :src="api_url + project.image.url" alt="" height="100" />
              </div>
              <div class="uk-card-body">
                <p
                  id="category"
                  v-if="project.category"
                  class="uk-text-uppercase"
                >
                  {{ project.category.categorytype }}
                </p>
                <p id="title" class="uk-text-large">{{ project.title }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL
    };
  },
  props: {
    projects: Array
  },
  computed: {
    leftProjectsCount() {
      return Math.ceil(this.projects.length /3);
    },
    leftProjects() {
      return this.projects.slice(0, this.leftProjectsCount);
    },
    rightProjects() {
      return this.projects.slice(this.leftProjectsCount, this.projects.length);
    }
  }
};
</script>
