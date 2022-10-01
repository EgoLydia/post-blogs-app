import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: {
      title: "Home",
    },
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: () => import("../views/Blogs.vue"),
    meta: {
      title: "Blogs",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      title: "Login",
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
    meta: {
      title: "Register",
    },
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import("../views/ForgotPassword.vue"),
    meta: {
      title: "Forgot Password",
    },
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/Admin.vue"),
    meta: {
      title: "Admin",
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
    meta: {
      title: "Profile",
    },
  },
  {
    path: "/create-post",
    name: "CreatePost",
    component: () => import("../views/CreatePost.vue"),
    meta: {
      title: "Create Post",
    },
  },
  {
    path: "/blog-preview",
    name: "BlogPreview",
    component: () => import("../views/BlogPreview.vue"),
    meta: {
      title: "Create Post",
    },
  },
  {
    path: "/view-blog",
    name: "ViewBlog",
    component: () => import("../views/ViewBlog.vue"),
    meta: {
      title: "View Blog",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, _, next) => {
  document.title = `${to.meta.title} | YouBlog`;
  next();
});
export default router;
