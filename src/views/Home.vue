<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost
      :post="post"
      v-for="(post, index) in samplePostBlog"
      :key="index"
    />
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";

export default {
  name: "Home",
  components: {
    BlogPost,
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
      samplePostBlog: [
        {
          title: "This is a filler page",
          blogHTML: "This is a filler content",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "This is a filler page",
          blogHTML: "This is a filler content",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
      sampleBlogCards: [
        {
          blogTitle: "Blog Card #1",
          blogCoverPhoto: "stock-1",
          blogDate: "May 1, 2021",
        },
        {
          blogTitle: "Blog Card #2",
          blogCoverPhoto: "stock-2",
          blogDate: "May 1, 2021",
        },
        {
          blogTitle: "Blog Card #3",
          blogCoverPhoto: "stock-3",
          blogDate: "May 1, 2021",
        },
        {
          blogTitle: "Blog Card #4",
          blogCoverPhoto: "stock-4",
          blogDate: "May 1, 2021",
        },
      ],
    };
  },
};
</script>
