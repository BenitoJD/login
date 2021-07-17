<template>
  <div class="Login-page">
    <header>
      <label class="head">Virtual Medical Associates</label>
      <ul>
        <li>
          <router-link to="/loginScreen">
            <button id="Sign-in">Sign in</button></router-link
          >
        </li>
        <li>
          <router-link to="/register"
            ><button id="Sign-up">Sign up</button></router-link
          >
        </li>
      </ul>
    </header>
    <section>
      <div id="logo">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="rock">
        <div class="Letters">
          <h1 id="Letters">
            The simple,free and secure<br />
            teleconsult solution.®
          </h1>

          <p id="Paragraph">
            We have made teleconsult simple and easy for <br />
            you.Create your personal account and start <br />teleconsult today
          </p>
        </div>
        <div class="bottom-btn">
          <router-link to="/loginScreen">
            <button id="bottom-button">Start Login</button>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "loginPage",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
label.head {
  color: black;
  font-size: 35px;
  line-height: 80px;
  padding: 0 100px;
  font-weight: bold;
}
header ul {
  float: right;
  margin-right: 20px;
}
header ul li {
  display: inline-block;
  line-height: 80px;
  margin: 0 5px;
}

header {
  background-color: white;

  height: 80px;
  width: 100%;
}
button {
  background-color: rgba(0, 154, 250, 255);
  color: white;
  padding: 10px 50px;
  text-align: center;
  text-decoration: none;

  font-size: 16px;
  margin: 4px 8px;
  border-radius: 6px;
  border: none;
}
#Letters {
  margin-bottom: 30px;
}

#Sign-in {
  background-color: white;
  color: rgba(0, 154, 250, 255);
  border: 2px solid rgba(0, 154, 250, 255);
}
#sign-up {
  background-color: rgba(0, 154, 250, 255);
  color: white;
}
.logo {
  text-align: right;
  display: flex;
}
section {
  background-color: rgba(0, 154, 250, 255);
  display: flex-end;
  height: 88vh;
}
#bottom-button {
  background-color: white;
  color: rgba(0, 154, 250, 255);
  font-weight: bold;
  padding: 30px 150px;
  margin: 20px 90px;
  border-radius: 10px;
}
.Letters {
  margin: 20px 90px;
}
#logo {
  text-align: right;
}
.Top-btn {
  text-align: right;
  margin-left: 2px;
}

img {
  max-width: 40%;
}
.Letters {
  color: white;
  font-weight: bold;
}
.paragraph {
  color: white;
}
#Paragraph {
  font-weight: normal;
}
.rock {
  bottom: 410px;
  position: relative;
}
</style>
