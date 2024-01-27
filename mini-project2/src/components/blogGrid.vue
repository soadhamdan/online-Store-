<template>
         <div class="list-group mt-5 shadow" id="list">
          <blog-post  :name="post.name" :age="post.age" :title="post.title" :body="post.body" :key="post" v-for="post in $store.state.posts"></blog-post>
        </div>
</template>
<script>
    import blogPost from "@/components/blogPost" ;
    export default {
      components:{
        blogPost
      }

    }
</script>
<style></style>