<template>
  <div class="adhoc">
      <div class="test">
      <div class="row">
          <div id="left-column" class="col-sm-12 col-md-6" ><nav class="navbar navbar-light bg-custom navbar-expand-md">
    <a href="/" class="navbar-brand"><img src="../../public/images/icons/DSP_logo.svg"></a>
    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
       <span class="my-1 mx-2 close">X</span>
       <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav">
            <li class="nav-item"> <router-link class="link-custom " to="/Project">Project</router-link></li>
            <li class="nav-item"><router-link class="link-custom" to="/Studio">Studio</router-link></li>
            <li class="nav-item"><router-link  class="link-custom current" to="/Adhoc">Adhoc</router-link></li>
            <li class="nav-item"><router-link  class="link-custom" to="/Contact">Contact</router-link></li>
        </ul>
    </div>
</nav>
<categoriesfilter></categoriesfilter>
<div class="container-fluid">
   <h1><span class="brown">We're part of the world<br> and the world is part of Us!</span><br>
   <span class="orange">Read some articles we found interesting about brand & design</span></h1>
    <footer class="brown">&#169; Dersepa.com, all rights reserved! Say hi design-se@dersepa.com </footer>
</div></div>
          <div id="right-column"  class="col-sm-12 col-md-6">
              <Articles></Articles>

</div>
      </div>
  </div>
  </div>
</template>

<script>
import Articles from "../containers/Articles.vue";
import Categoriesfilter from "../components/Categoriesfilter.vue";
export default {
  name: "Adhoc",
  components: {Articles, Categoriesfilter },

   
}
</script>

<style scoped>
.navbar-toggler>.close {
    display:inline;
}
.navbar-toggler.collapsed>.close, .navbar-toggler:not(.collapsed)>.navbar-toggler-icon {
    display:none;
}
.bg-custom {
    background-color: #F8F7F7;
}
@media only screen and (min-width: 768px){
    .navbar-nav li {
   margin-left: 10px;
  
}
footer {
     position: absolute; 
    bottom: 0px; 
    visibility: visible !important;
    padding-bottom: 10px;
}

}
.navbar-nav .link-custom {
    color:#312F1E;
}
#left-column 
{
    background-color:#F8F7F7;
    height: 700px;
}
#right-column {
    overflow-y: auto;
    height: 700px;
  

/* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
  #right-column::-webkit-scrollbar {
    display: none;
}
.current {
   color:#FFC600!important;
}
.row {
 
    margin: 0px;
}
.row #left-column, .row #right-column {
   
    margin: 0px;
}
.brown {
    color:#312F1E;
}
.orange {
    color:#FFC600
}
footer {
    visibility :hidden;
}

</style>

