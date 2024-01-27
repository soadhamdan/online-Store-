<template>
   <BlogGrid></BlogGrid>
   <AddBlog></AddBlog>
</template>
<script>
import BlogGrid from '@/components/blogGrid.vue';
import AddBlog from '@/components/addBlog.vue';
  

    export default{
    components: { BlogGrid, AddBlog }
}
</script>
<style></style>