<template>
    <div class="NavBar">
        <b-container class="NavBarButtons">
      <button class="button"><router-link :to="{ path: '#' }">
        Staff
        </router-link></button>

        <button class="button"><router-link :to="{ path: '#' }">
        Services
        </router-link></button>

        <button class="button"><router-link :to="{ path: '#' }">
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
    height: 50px;
    width: 95px;
}
.NavBar{
    background-color: gray;
    padding-top: 5px;
    height: 55px;
}
</style>
