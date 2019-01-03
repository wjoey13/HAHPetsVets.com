<template>
  <div id="app">
    <container>
      <div class="Logo">


    <img src="./assets/Logo1.png">

      </div>
    </container>
    <NavBar/>
    <div class="col-md">
     <h1>Heritage Animal Hospital</h1>
     <h2>Located at 22651 E Aurora Parkway Suite A-1 Aurora, CO  80016</h2>
     <p>At Heritage Animal Hospital, we believe in gaining the trust of client and patient alike.  We use the latest technology and provide the best treatment for your pet. Whether on two legs or four, everyone is treated like family.</p>
     <p>You’ll see a list of our services in the menu to the right.  Feel free to browse around and ask any questions by clicking here to Contact Us.  We look forward to offering unparalleled service and medical care.</p>
   </div>
     <router-view :auth="auth" :authenticated="authenticated">
      </router-view>
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue'
import StaffPage from './components/StaffPage.vue'

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
.Logo{
background-color: lightblue;
}

</style>
