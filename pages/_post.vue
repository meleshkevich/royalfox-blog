<template>
  <div>
    <div class="container">
      <NavbarBootstrap />
    </div>
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

            <h2>Comments:</h2>

            <div>
              <Comment
                v-for="c in comments"
                :key="c.id"
                :name="c.name"
                :comment="c.comment"
                :createdAt="c.createdAt"
                :avatar="c.avatar"
              ></Comment>
            </div>
          </article>
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
    <FooterBootstrap />
  </div>
</template>
<script>
import Comment from "../components/comment.vue";
import FooterBootstrap from "../components/footer-bootstrap.vue";
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
        data.map(el => {
          el.slug === this.$route.params.post ? (this.post = el) : null;
          data.map(el => {
            const date = new Date(el.createdAt);
            const dateFormated = date.toLocaleString("en-US");
            el.createdAt = dateFormated;
          });
        });
      });
    },
    async getComments() {
      const request = await fetch(
        "https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/comments"
      );
      const commentData = request.json();
      commentData.then(data => {
        this.comments = data;
        data.map(el => {
          const date = new Date(el.createdAt);
          const dateFormated = date.toLocaleString("en-US");
          el.createdAt = dateFormated;
        });
      });
    }
  },
  mounted() {
    this.getPost();
    this.getComments();
  },
  components: { Comment, FooterBootstrap }
};
</script>
