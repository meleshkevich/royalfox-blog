<template>
  <div>
    <div class="card">
      <div class="row g-0">
        <div class="card-header">
          Added on:
          {{ createdAt }}
        </div>
        <div class="col-md-4">
          <img :src="avatar" class="img-fluid rounded-start" alt="" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <blockquote class="blockquote mb-4">
              <p>{{ comment }}</p>
              <footer class="blockquote-footer">
                <cite title="Source Title">{{ name }}</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    id: String,
    createdAt: String,
    name: String,
    avatar: String,
    comment: String
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/style.scss";
</style>
