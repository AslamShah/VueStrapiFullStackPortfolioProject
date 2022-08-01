<template>
  <div class="Contact">
      <div class="">
      <div class="row">
          <div id="left-column" class="col-sm-12 col-md-6" ><nav class="navbar navbar-light bg-custom navbar-expand-md">
    <a href="/" class="navbar-brand"><img src="../../public/images/icons/DSP_logo.svg"></a>
    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
       <span class="my-1 mx-2 close">X</span>
       <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav">
            <li class="nav-item"> <router-link class="link-custom" to="/Project">Project</router-link></li>
            <li class="nav-item"><router-link class="link-custom" to="/Studio">Studio</router-link></li>
            <li class="nav-item"><router-link class="link-custom" to="/Adhoc">Adhoc</router-link></li>
            <li class="nav-item"><router-link class="link-custom current" to="/Contact">Contact</router-link></li>
        </ul>
    </div>
</nav>
<div class="container-fluid">
    <h1><span class="white">You never know what this contact might bring you...</span><br>
   <span class="orange">May be success?!</span></h1>
    <footer class="white">&#169; Dersepa.com, all rights reserved! Say hi design-se@dersepa.com</footer>
</div></div>
          <div id="right-column" class="col-sm-12 col-md-6">Contact</div>
      </div>
  </div>
  </div>
</template>

<script>

export default {
  name: "Contact",

   
};
</script>

<style scoped>
.navbar-toggler>.close {
    display:inline;
}
.navbar-toggler.collapsed>.close, .navbar-toggler:not(.collapsed)>.navbar-toggler-icon {
    display:none;
}
.bg-custom {
    background-color: #312F1E;
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
    color:#ffffff;
}
.current {
    color:#FFC600!important;
}
#left-column {
       background-color: #312F1E;
       height: 700px;
}
.row {
 
    margin: 0px;
}
.row #left-column, .row #right-column {
   
    margin: 0px;
}
.white {
    color: #ffffff;
}
.orange {
    color:#FFC600;
}
footer {
    visibility :hidden;
}
</style>>

