<template>
  <div>
    <main class="container">
      <div class="row g-5">
        <div class="col-md-8">
          <article class="blog-post">
            <h2 class="blog-post-title mb-1">{{ post.title }}</h2>
            <p class="blog-post-meta">
              {{ post.createdAt }}
            </p>

            <p>
              {{ post.content }}
            </p>
            <hr />

            <h2>Comments</h2>

            <div v-for="c in comments" :key="c.id">
              <blockquote class="blockquote">
                <p>{{ c.name }}</p>
              </blockquote>
            </div>
          </article>

          <nav class="blog-pagination" aria-label="Pagination">
            <NuxtLink to="/" class="btn btn-outline-primary rounded-pill"
              >Back</NuxtLink
            >
          </nav>
        </div>
        <div class="col-md-4">
          <img
            class="bd-placeholder-img"
            width="400"
            height="400"
            :src="post.image"
            alt=""
          />
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      post: {},
      comments: []
    };
  },
  methods: {
    async getPost() {
      const request = await fetch(
        "https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/posts"
      );
      const postData = request.json();
      postData.then(data => {
        // console.log(data);

        data.map(el => {
          el.slug === this.$route.params.post ? (this.post = el) : null;
        });
      });
    },
    async getComments() {
      const request = await fetch(
        "https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/comments"
      );
      const commentData = request.json();
      commentData.then(data => {
        // console.log(data);
        this.comments = data;
      });
    }
  },

  mounted() {
    this.getPost();
    this.getComments();
  }
};
</script>
