<template>
  <div class="home">
    <BlogPost v-if="!user" :post="welcomeScreen" />
    <BlogPost
      :post="post"
      v-for="(post, index) in blogPostFeeds"
      :key="index"
    />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCards
            :post="post"
            v-for="(post, index) in blogPostCards"
            :key="index"
          />
        </div>
      </div>
    </div>
    <div v-if="!user" class="updates">
      <div class="container">
        <h2>Never Miss a Post. Register for your free account today!</h2>
        <router-link class="router-button" :to="{ name: 'Register' }"
          >Register for YouBlog
          <img src="@/assets/Icons/arrow-right-light.svg" alt=""
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
import BlogCards from "../components/BlogCard.vue";

export default {
  name: "Home",
  components: {
    BlogPost,
    BlogCards,
  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi alias ad harum, exercitationem dolor atque voluptatum enim sed iure at voluptates",
        welcomeScreen: true,
        photo: "coding",
      },
    };
  },
  computed: {
    blogPostCards() {
      return this.$store.getters.blogPostCards;
    },

    blogPostFeeds() {
      return this.$store.getters.blogPostFeed;
    },
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }
    img {
      width: 15px;
      height: auto;
    }
    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }
    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>
