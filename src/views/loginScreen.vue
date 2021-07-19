<template>
  <div id="total">
    <h1>Virtual Medical Associates</h1>
    <h2>Login Screen</h2>

    <div class="details">
      <input type="text" placeholder="Email" v-model="loginForm.email" /><br />
      <input
        type="password"
        placeholder="Password"
        v-model="loginForm.password"
      /><br />

      <button id="login" v-on:click="getLogin()">Login</button><br />

      <a href="#">Forget Your Password</a><br />
    </div>
  </div>
</template>

<script>
export default {
  name: "loginScreen",
  props: {
    msg: String,
  },
  data() {
    return {
      loginForm: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    getLogin() {
      console.log(
        "Data Entered",
        this.loginForm.email,
        this.loginForm.password
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
}

h1 {
  text-align: center;
  display: block;
  padding: 70px;
  background-color: rgb(0, 154, 250);
  color: white;
}
.details {
  text-align: center;
  display: inline-block;
  border: #e2baff solid 1px;
  background-color: #f7ebff;
  width: 40%;
  height: 300px;
  margin-left: 31%;
  margin-right: auto;
}

input,
select {
  width: 50%;
  padding: 20px 20px;
  margin: 15px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  height: 30px;
}
h2 {
  text-align: center;
  padding: 30px;
}
button {
  background-color: rgba(0, 154, 250, 255);
  color: white;
  padding: 10px 40px;
  text-align: center;
  text-decoration: none;

  font-size: 16px;
  margin: 20px 8px;
  border-radius: 2px;
  border: none;
}
a {
  text-decoration: none;
}
</style>
