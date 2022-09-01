<template>
  <div>
    <NavbarBootstrap />

    <main class="container">
      <div class="row mb-2">
        <div class="col-md-6" v-for="p in posts" :key="p.id">
          <div
            class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-150 position-relative"
          >
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">{{
                p.slug
              }}</strong>
              <h3 class="mb-0">{{ p.title }}</h3>
              <div class="mb-1 text-muted">
                {{ p.createdAt }}
              </div>
              <p class="card-text mb-auto text-truncated">
                {{ p.content }}
              </p>
              <NuxtLink :to="p.slug" class="stretched-link"
                >Continue reading</NuxtLink
              >
            </div>
            <div class="col-auto d-none d-lg-block">
              <img
                class="bd-placeholder-img"
                width="250"
                height="100%"
                :src="p.image"
                alt="post image"
              />
            </div>
          </div>
        </div>
      </div>
    </main>

    <FooterBootstrap />
  </div>
</template>

<script>
import NavbarBootstrap from "./navbar-bootstrap.vue";
import FooterBootstrap from "./footer-bootstrap.vue";
import formatDate from "../assets/formatDate";

export default {
  data() {
    return {
      posts: []
    };
  },
  methods: {
    async getPosts() {
      const request = await fetch(
        "https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/posts"
      );
      const postData = request.json();
      postData.then(data => {
        this.posts = data;
        formatDate(data);
      });
    }
  },
  mounted() {
    this.getPosts();
  },
  components: { NavbarBootstrap, FooterBootstrap }
};
</script>

<style lang="scss" scoped>
.card-text.mb-auto.text-truncated {
  overflow: hidden;
  line-height: 1.5rem;
  max-height: calc(1.5rem * 3);
  -webkit-box-orient: vertical;
  display: block;
  overflow: hidden !important;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
</style>
