import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Vue from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";

import VueApollo from "vue-apollo";
import apolloClient from "./vue-apollo";
import Adhoc from "./views/Adhoc.vue";
import Contact from "./views/Contact.vue";
import Project from "./views/Project.vue";
import Studio from "./views/Studio.vue";


Vue.config.productionTip = false;

Vue.use(VueApollo);
Vue.use(VueRouter);
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "ProjectHome",
      component: Project,
    },
    {
      path: "/article/:id",
      components: require("./containers/Article.vue")
    },
    {
      path: "/project/:id",
      components: require("./containers/Project.vue")
    },
    {
      path: "/articles/category/:id",
      components: require("./containers/Category.vue")
    },
    {
      path: "/projects/category/:id",
      name: "CategoryProjects",
      components: require("./containers/CategoryProjects.vue")
    },
    {
      path: "/Adhoc",
      name: "Adhoc",
      component: Adhoc,
     
    },
    {
      path: "/Contact",
      name: "Contact",
      component: Contact,
     
    },
    {
      path: "/Project",
      name: "Project",
      component: Project,
     
    },
    {
      path: "/Studio",
      name: "Studio",
      component: Studio,
     
    }
   
      
  ]
});

new Vue({
  apolloProvider,
  router,
  render: h => h(App)
}).$mount("#app");
