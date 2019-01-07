<template>
  <div id="app">

    <b-container class="title">
      <b-row>
        <b-col><img class="Logo1" src="./assets/Logo1.png" height="250" width="250"></b-col>
        <h1 class="heading">Heritage Animal Hospital</h1>
        
      <b-col class="pawPrints">
      <img class="pawprint" src="./assets/pawprint.png">
      <img class="pawprint" src="./assets/pawprint.png">
      <img class="pawprint" src="./assets/pawprint.png">
      </b-col>
        
        
      </b-row>
    </b-container>
<br>
    <NavBar />
<br>
    <b-container class="header">
      <div class="col-md">
        <h2>Located at 22651 E Aurora Parkway Suite A-1 Aurora, CO 80016</h2>
        <br>
        <p>At Heritage Animal Hospital, we believe in gaining the trust of client and patient alike. We use the latest
          technology and provide the best treatment for your pet. Whether on two legs or four, everyone is treated like
          family.</p>
        <br>
        <p>You’ll see a list of our services in the menu to the right. Feel free to browse around and ask any questions
          by clicking here to Contact Us. We look forward to offering unparalleled service and medical care.</p>
      </div>
    </b-container>

    <b-container class="staffSection">
      <h1>Staff</h1>
      <b-row>
        <b-col><img src="#" height="250" width="350px"></b-col>
        <b-col>
          <h3>First Name</h3>
        </b-col>
        <b-col>
          <h3>Last Name</h3>
        </b-col>
        <b-col>
          <h3>Desciption</h3>
        </b-col>
      </b-row>
      <br>
      <b-row>
        <b-col><img src="#" height="250" width="350px"></b-col>
        <b-col>
          <h3>First Name</h3>
        </b-col>
        <b-col>
          <h3>Last Name</h3>
        </b-col>
        <b-col>
          <h3>Desciption</h3>
        </b-col>
      </b-row>
      <br>
      <b-row>
        <b-col><img src="#" height="250" width="350px"></b-col>
        <b-col>
          <h3>First Name</h3>
        </b-col>
        <b-col>
          <h3>Last Name</h3>
        </b-col>
        <b-col>
          <h3>Desciption</h3>
        </b-col>
      </b-row>
      <br>
    </b-container>
<br>
    <b-container class="servicesContainer">
      <h1 class="services">Services</h1>
      <b-row>
        <b-col>
          <b-button class="service"><img class="brush" src="./assets/hairbrush.png" height=50px width=50px>Grooming</b-button>
        </b-col>
        <b-col>
          <b-button class="service"><img class="needle" src="./assets/needle.png" height=50px width=50px>Vaccionations</b-button>
        </b-col>
        <b-col>
          <b-button class="service"><img class="tooth" src="./assets/tooth.png" height=50px width=50px>Dental Care</b-button>
        </b-col>
      </b-row>
      <br>
      <b-row>
        <b-col>
          <b-button class="service"><img class="chip" src="./assets/CartoonChip.png" height=50px width=50px>Micro-Chipping</b-button>
        </b-col>
        <b-col>
          <b-button class="service"><img class="pill" src="./assets/pill.png" height=50px width=50px>Pain Management</b-button>
        </b-col>
        <b-col>
          <b-button class="service"><img class="tick" src="./assets/CartoonTick.png" height=50px width=50px>Parasite
            Prevention</b-button>
        </b-col>
      </b-row>
      <br>
      <b-row>
        <b-col>
          <b-button class="service"><img class="chip" src="./assets/surgery.png" height=50px width=50px>Surgery</b-button>
        </b-col>
        <b-col>
          <b-button class="service"><img class="pill" src="./assets/x-ray.png" height=50px width=50px>X-Ray</b-button>
        </b-col>
      </b-row>
    </b-container>
    <br>

    <b-container class="contact">

      <h1>Contact Us</h1>
      <h4>Email: HAHPetVets.com</h4>
      <h4>Phone: 720-870-8387</h4>
      <h4>Location: 22651 E Aurora Parkway, Ste A-1</h4>
      <h5>Hours ( Monday - Sunday )</h5>
      <b-row>
        <b-col> 7 am - 5 pm</b-col>
        <b-col> 7 am - 5 pm</b-col>
        <b-col> 7 am - 5 pm</b-col>
        <b-col> 7 am - 5 pm</b-col>
        <b-col> 7 am - 5 pm</b-col>
        <b-col> 8am - 12 am</b-col>
        <b-col> 8am - 12 am</b-col>
      </b-row>

    </b-container>
<br>
    <b-container class="big">
      <h1>Follow Us</h1>
      <b-container class="small">
        <b-row>
          <b-col>
            <h1>Twitter</h1>
            <h2 class="tweet">Tweet</h2>

          </b-col>


          <b-col>
            <h1>Facebook</h1>
            <h2 class="blog">Blog</h2>
          </b-col>


          <b-col>
            <h1>Instagram</h1>
            <h2 class="post">Post</h2>
          </b-col>

        </b-row>
      </b-container>
      End
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
html{
  background-color: lightgray;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: lightgray;
}
.staffSection{
  padding-top:50px;
}
.services{
  padding-top: 50px;
}
.servicesContainer{
  background-color: lightblue;
}
.header{
  padding-top: 30px;
  background-color: lightsalmon
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
.service{
  background-color: lightgreen;
  border: 3px solid tan;
}
.heading{
  align-self: center;
}
.title{
  background-color: tan;
}
.contact{
  background-color: lightcoral;
}
.staffSection{
  background-color: lightgreen;
}
.big{
  background-color: black;
}
.small{
  background-color: white;
}
.tweet{
  border: solid 1px black;
}
.blog{
  border: solid 1px black;
}
.post{
  border: solid 1px black;
}


</style>
