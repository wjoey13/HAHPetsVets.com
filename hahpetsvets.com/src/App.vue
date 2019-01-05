<template>
  <div id="app">
    <container>
      <div class="Logo1">
    <img src="./assets/Logo1.png">
      </div>
    </container>
    <NavBar/>
    <b-container class="header">
    <div class="col-md">
     <h1>Heritage Animal Hospital</h1>
     <h2>Located at 22651 E Aurora Parkway Suite A-1 Aurora, CO  80016</h2>
     <br>
     <p>At Heritage Animal Hospital, we believe in gaining the trust of client and patient alike.  We use the latest technology and provide the best treatment for your pet. Whether on two legs or four, everyone is treated like family.</p>
     <br>
     <p>You’ll see a list of our services in the menu to the right.  Feel free to browse around and ask any questions by clicking here to Contact Us.  We look forward to offering unparalleled service and medical care.</p>
   </div>
   </b-container>

   <b-container class="staffSection">
    <h1>Staff</h1>
   <b-row>
    <b-col><img src="#" height="450" width="350px"></b-col>
    <b-col><h3>First Name</h3></b-col>
    <b-col><h3>Last Name</h3></b-col>
    <b-col><h3>Text Area</h3></b-col>
    </b-row>
  </b-container>

<b-container class="services">
  <h1>Services</h1>
  <b-row>
    <b-col><b-button><img class="brush" src="./assets/cartoon brush.png" height=50px width=50px>Grooming</b-button></b-col>
    <b-col><b-button><img class="needle" src="./assets/CartoonNeedle.png" height=50px width=50px>Vaccionations</b-button></b-col>
    <b-col><b-button><img class="tooth" src="./assets/tooth.png" height=50px width=50px>Dental Care</b-button></b-col>
  </b-row>
  <br>
  <b-row>
    <b-col><b-button><img class="chip" src="./assets/CartoonChip.png" height=50px width=50px>Micro-Chipping</b-button></b-col>
    <b-col><b-button><img class="pill" src="./assets/CartoonPill.png" height=50px width=50px>Pain Management</b-button></b-col>
    <b-col><b-button><img class="tick" src="./assets/CartoonTick.png" height=50px width=50px>Parasite Prevention</b-button></b-col>
  </b-row>
</b-container>
  

     <router-view :auth="auth" :authenticated="authenticated">
      </router-view>
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue'
import StaffPage from './components/StaffPage.vue'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

export default {
  name: 'app',
  components: {
    NavBar,
    StaffPage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.Logo1{
background-color: lightblue;
padding-top: 5px;
padding-bottom: 15px;
}
.staffSection{
  padding-top:50px;
}
.services{
  padding-top: 50px;
}
.header{
  padding-top: 30px;
}
.needle{
  padding-right: 5px;
}
.brush{
  padding-right: 5px;
}
.tooth{
  padding-right: 5px;
}
.chip{
  padding-right: 5px;
}
.pill{
  padding-right: 5px;
}
.tick{
  padding-right: 5px;
}
</style>
