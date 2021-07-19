<template>
  <body>
    <header>
      <h1>Virtual Medical Associates</h1>
      <nav>
        <li>
          <router-link to="/loginScreen"
            ><button id="Sign-in">Sign in</button></router-link
          >
        </li>
        <li>
          <router-link to="/register"
            ><button id="sign-up">Sign up</button></router-link
          >
        </li>
      </nav>
    </header>
    <div class="main">
      <div class="content">
        <h1>
          The simple,free and <br />
          secure teleconsult solution.
        </h1>
        <p>
          We have made teleconsult simple and easy for <br />you.Create your
          personal account and start <br />
          teleconsult today
        </p>
        <router-link to="/loginScreen"
          ><button id="bottom-button">Start Login</button></router-link
        >
      </div>
      <div class="image"><img src="../assets/logo.png" /></div>
    </div>
  </body>
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  cursor: pointer;
  font-family: sans-serif;
}
body {
  width: 100%;
  min-height: 100vh;
  background-color: rgb(0, 154, 250);
  overflow: hidden;
}
header {
  display: flex;
  justify-content: space-between;
  /* padding: 15px 20px; */
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 60px;
  background-color: white;
}
header h1 {
  font-family: "Quicksand", sans-serif;
  padding-top: 10px;
}
nav li {
  display: inline-block;
  margin: 10px 20px;
  font-weight: 600px;
}

.main {
  width: 100%;
  display: flex;
}
.content {
  width: 50%;
  margin-top: 10%;
  margin-left: 22%;
  color: white;
  overflow: hidden;
}
.content h1 {
  font-size: 30px;
  margin-bottom: 5%;
  font-family: "Quicksand", sans-serif;
  font-size: 25px;
}
.content p {
  margin-bottom: 30px;
  font-family: "Quicksand", sans-serif;
  font-size: 16px;
}

.image {
  width: 50%;
  margin-right: 200px;
}
img {
  width: 30rem;
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
#bottom-button {
  background-color: white;
  color: rgba(0, 154, 250, 255);
  font-weight: bold;
  padding: 18px 80px;

  border-radius: 10px;
}

button {
  background-color: rgba(0, 154, 250, 255);
  color: white;
  padding: 10px 50px;

  text-decoration: none;

  font-size: 16px;

  border-radius: 6px;
  border: none;
}
@media screen and (max-width: 1200px) {
  .content {
    width: 100%;
    justify-content: end;
  }

  .image {
    width: 100%;
    position: absolute;
    bottom: -3px;

    display: flex;
    justify-content: center;
  }
  img {
    width: 10rem;
  }
}
@media screen and (max-width: 576px) {
  .content {
    width: 100%;
    justify-content: end;
  }
  .content h1 {
    margin-bottom: 5%;
  }
  .content p {
    margin-bottom: 5%;
  }

  .image {
    width: 100%;
    position: absolute;
    bottom: -3px;

    display: flex;
    justify-content: center;
  }
  img {
    width: 10rem;
  }
}
</style>
