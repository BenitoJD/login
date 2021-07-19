<template>
  <div>
    <h1>Register Here</h1>

    <div class="log">
      <input v-model="loginId.email" type="text" placeholder="Email" /><br />
      <input
        v-model="loginId.password"
        type="password"
        placeholder="Password"
      /><br />
      <input
        v-model="loginId.confirmPassword"
        type="password"
        placeholder="Confirm Password"
      /><br />
      <button @click="getData()">Register</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  props: {
    msg: String,
  },
  data() {
    return {
      loginId: {
        email: null,
        password: null,
        confirmPassword: null,
      },
    };
  },
  methods: {
    getData() {
      console.log(
        "Entered data is",
        this.loginId.email,
        this.loginId.password,
        this.loginId.confirmPassword
      );
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Fuggles", cursive;
  font-size: 40px;
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
