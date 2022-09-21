<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <router-link class="header" :to="{ name: 'Home' }"
            >YouBlog</router-link
          >
          <ul>
            <li>
              <a href="#"
                ><img
                  class="svg-icon"
                  src="@/assets/Icons/youtube-brands.svg"
                  alt=""
              /></a>
            </li>
            <li>
              <a href="#"
                ><img
                  class="svg-icon"
                  src="@/assets/Icons/twitter-brands.svg"
                  alt=""
              /></a>
            </li>
            <li>
              <a href="#"
                ><img
                  class="svg-icon"
                  src="@/assets/Icons/instagram-brands.svg"
                  alt=""
              /></a>
            </li>
            <li>
              <a href="#"
                ><img
                  class="svg-icon"
                  src="@/assets/Icons/linkedin-brands.svg"
                  alt=""
              /></a>
            </li>
          </ul>
        </div>
        <div class="col-2">
          <ul class="col-2s">
            <router-link class="col-link" :to="{ name: 'Home' }"
              >Home</router-link
            >
            <router-link class="col-link" to="#">Home</router-link>
            <router-link class="col-link" to="#" v-if="user"
              >Create Post</router-link
            >
            <router-link class="col-link" to="#" v-if="!user"
              >Login/Register</router-link
            >
          </ul>
        </div>
      </div>
      <div class="right">
        <p>Copyright 2021 All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-vue",
  data() {
    return {
      user: null,
    };
  },
};
</script>

<style scoped>
footer {
  margin-top: auto;
  padding: 100px 25px;
  background-color: #303030;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

div {
  display: flex;
  flex: 1;
}
.left {
  gap: 32px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header {
  text-align: center;
  font-size: 24px;
  color: #fff;
  margin-bottom: 16px;
  text-decoration: none;
  font-weight: 600;
}
ul {
  gap: 16px;
  list-style: none;
  display: flex;
}
.col-1,
.col-2 {
  gap: 32px;
  display: flex;
  flex: 1;
}
.col-1 {
  flex-direction: column;
}
h2 {
  text-align: center;
}

ul {
  margin-top: auto;
}
li {
  display: flex;
  align-items: center;
}
.svg-icon {
  width: 24px;
  height: auto;
  color: #fff;
}

.col-2s {
  height: 100%;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}
.col-link {
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  text-decoration: none;
}

.right {
  gap: 32px;
  color: #fff;
  align-items: center;
  flex-direction: column;
}
p {
  margin-top: auto;
}

@media (min-width: 800px) {
  .container {
    flex-direction: row;
    gap: 0px;
  }
  .left {
    flex-direction: row;
    align-items: initial;
    gap: 0;
  }
  .header {
    text-align: initial;
  }
  .col-1,
  .col-2 {
    gap: 0;
  }
  h2 {
    text-align: initial;
  }
  .right {
    align-items: flex-end;
    gap: 0;
  }
  .col-2s {
    flex-direction: column;
  }
}
</style>
