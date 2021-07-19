<template>
  <div id="nav">
    <router-link to="/Home"></router-link>
    <router-link to="/loginScreen"></router-link>
    <router-link to="/register"></router-link>
  </div>
  <router-view />
</template>

<style>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */

  /* margin-top: 60px; */
}
</style>
