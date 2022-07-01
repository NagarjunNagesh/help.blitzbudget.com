<template>
  <div class="wrapper blog-post">
    <div class="page-header page-header-small rellax-header">
      <div class="page-header-image" style="background-image: url('img/bg32.jpg')"></div>
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Budget</h2>
            <h4>Help Center</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="button-container">
              <nuxt-link to="#article" class="btn btn-success btn-round btn-lg">
                <i class="now-ui-icons text_align-left"></i> Read Article
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="section" id="article">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto">
              <h3 class="title">Category</h3>
              <br>
              <br>
              <img src="img/gifs/category/category.gif" alt="Budget">
              <br>
              <br>
              Any categories can be added and viewed to the Blitzbudget. These categories can be seen by clicking the
              <i>"Categories"</i> dropdown present in the profile top navigation.
              <br>
              <br>
              This page can be used to view the categories and the category types.
              <br>
              <br>
              <i>Note - The categories can be updated by linking the <nuxt-link to="/transaction/smart-link/category">
                  transaction and the categories.</nuxt-link></i>
              <br>
              <br>
              <ul>
                <li>
                  <nuxt-link to="/category/add">Add Category</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/category/delete">Delete Category</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "blog-posts",
  head: {
    title: 'Category',
  },
  layout: "default",
}
</script>
<style>
</style>