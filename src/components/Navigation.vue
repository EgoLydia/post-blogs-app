<template>
  <div>
    <nav class="container">
      <div class="branding">
        <router-link class="heading" :to="{ name: 'Home' }"
          >YouBlog</router-link
        >
      </div>
      <div class="nav-links">
        <ul v-show="!mobile">
          <router-link class="link" to="#">Home</router-link>
          <router-link class="link" to="#">Blogs</router-link>
          <router-link class="link" to="#">Create Post</router-link>
          <router-link class="link" to="#">Login/Register</router-link>
        </ul>
      </div>
    </nav>
    <img
      @click="toggleMobileNav"
      class="menu-icon"
      v-show="mobile"
      src="@/assets/Icons/bars-regular.svg"
      alt=""
    />
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
        <router-link class="mobile-link" to="#">Home</router-link>
        <router-link class="mobile-link" to="#">Blogs</router-link>
        <router-link class="mobile-link" to="#">Create Post</router-link>
        <router-link class="mobile-link" to="#">Login/Register</router-link>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  components: {},
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
};
</script>

<style scoped>
header {
  background-color: #fff;
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.6);
  z-index: 99;
}
.link {
  font-weight: 500;
  padding: 0 8px;
  transition: 0.3s color ease;
  margin-right: 32px;
}
.link:hover {
  color: #1eb8b8;
}
.link:last-child {
  margin-right: 0;
}
nav {
  display: flex;
  padding: 25px 0;
}
.branding {
  display: flex;
  align-items: center;
}

a {
  text-decoration: none;
}
.heading {
  font-weight: 600;
  font-size: 24px;
  color: #000;
  text-decoration: none;
  margin-left: 20px;
}
.nav-links {
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
}
ul {
  margin-right: 32px;
}
.menu-icon {
  cursor: pointer;
  position: absolute;
  top: 32px;
  right: 25px;
  height: 25px;
  width: auto;
}
.mobile-nav {
  padding: 20px;
  width: 70%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  background-color: #303030;
  top: 0;
  left: 0;
}
.mobile-link {
  padding: 15px;
  color: #fff;
  text-decoration: none;
}
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 1s ease;
}
.mobile-nav-enter {
  transform: translateX(-250px);
}
.mobile-nav-enter-to {
  transform: translateX(0);
}
.mobile-nav-leave-to {
  transform: translateX(-250px);
}
</style>
