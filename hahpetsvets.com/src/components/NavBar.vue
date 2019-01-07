<template>
    <div class="NavBar">
        <b-container class="NavBarButtons">
      <button class="button"><router-link :to="{ path: '#' }">
          <img class="staffImg" src="../assets/staff.png" height=50px width=50px>
        Staff
        </router-link></button>

        <button class="button"><router-link :to="{ path: '#' }">
            <img class="servicesImg" src="../assets/services.png" height=50px width=50px>
        Services
        </router-link></button>

        <button class="button"><router-link :to="{ path: '#' }">
            <img class="contactImg" src="../assets/contact.png" height=50px width=50px>
        Contact Us
        </router-link></button>
        
        </b-container>
    </div>
</template>

<script>
export default {
name: "NavBar"
}
</script>

<style>
.button{
    height: 75px;
    width: 150px;
}
.NavBar{
    background-color: lightgoldenrodyellow;
    padding-top: 5px;
    height: 85px;
}
</style>
