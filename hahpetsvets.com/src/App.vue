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
    <div class="NavBar">
        <b-container class="NavBarButtons">
      <button id="staff" @click="staff('staff')" class="button">
          <img class="staffImg" src="./assets/staff.png" height=50px width=50px>
        Staff
        </button>

        <button id="services" @click="services('services')" class="button">
            <img class="servicesImg" src="./assets/services.png" height=50px width=50px>
        Services
        </button>

        <button id="contact" @click="contact('contact')" class="button">
            <img class="contactImg" src="./assets/contact.png" height=50px width=50px>
        Contact Us
        </button>
        
        </b-container>
    </div>
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

    <b-container ref="staff" class="staffSection">
      <h1 >Staff</h1>
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
    <b-container ref="services" class="servicesContainer">
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
          <b-button class="service"><img class="tick" src="./assets/CartoonTick.png" height=50px width=50px>Parasite Prevention</b-button>
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

    <b-container ref="contact" class="contact">

      <h1>Contact Us</h1>
      <b-row>
      <b-col><h4>Email: HAHPetVets.com</h4></b-col>
      <b-col><h4>Phone: 720-870-8387</h4></b-col>
      </b-row>
<br>
      <b-col><h4>Location: 22651 E Aurora Parkway, Ste A-1</h4></b-col>
      <br>
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
<br>
    </b-container>
<br>
    <b-container class="big">
      <h1>Follow Us</h1>
      <b-container class="small">
        <b-row>
          <b-col>
            <h2>Twitter</h2>
            <h3 class="tweet">Tweet</h3>

          </b-col>


          <b-col>
            <h2>Facebook</h2>
            <h3 class="blog">Blog</h3>
          </b-col>


          <b-col>
            <h2>Instagram</h2>
            <h3 class="post">Post</h3>
          </b-col>

        </b-row>
      </b-container>
      <br>
    </b-container>


    
  </div>
</template>

<script>


import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue);

export default {
  name: 'app',
  components: {
  },
  methods:{
    staff(refName){
      var element = this.$refs[refName];
      console.log(element);
      var top = element.offsetTop;
      window.scrollTo(0, top)
    },
     services(refName){
      var element = this.$refs[refName];
      console.log(element);
      var top = element.offsetTop;
      window.scrollTo(0, top)
    },
    contact(refName){
      var element = this.$refs[refName];
      console.log(element);
      var top = element.offsetTop;
      window.scrollTo(0, top)
    }
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
.title{
  background-image: url(./assets/background.png);

}
.contact{
  background-color: lightcoral;
}
.staffSection{
  background-color: lightgreen;
}
.big{
  background-color: lightcyan;
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
h1{
  color: white;
  text-shadow: 1.5px 1.5px black;
  font-family: 'Lato', sans-serif;
}
.Logo1{
  display: flex;
}

</style>
