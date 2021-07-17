<template>
  <div>
    <h1>Register Here</h1>

    <div class="log">
      <input type="text" placeholder="Email" /><br />
      <input type="password" placeholder="Password" /><br />
      <input type="password" placeholder="Confirm Password" /><br />
      <router-link to="/Home"><button>Register</button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
h1 {
  text-align: center;
  margin-top: 160px;
}
input {
  background-color: #fafafa;
  border: 0;
  box-shadow: rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  width: 30%;
  padding: 20px 20px;
  margin: 15px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  height: 30px;
}
button {
  text-align: center;

  background-color: rgba(0, 154, 250, 255);
  color: white;
  padding: 10px 40px;
  text-align: center;
  text-decoration: none;

  font-size: 16px;
  margin: 20px 8px;
  border-radius: 10px;
  border: none;
}
.log {
  text-align: center;
}
</style>
