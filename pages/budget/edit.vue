<template>
  <div class="wrapper blog-post">
    <div class="page-header page-header-small rellax-header">
      <div class="page-header-image" style="background-image: url('img/bg40.jpg')"></div>
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Edit Budget</h2>
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
              <h3 class="title">Edit Budget</h3>
              <br>
              <br>
              <img src="img/gifs/budget/edit-budget.gif" alt="Budget">
              <br>
              <br>
              Edit BUdget can be used to edit the <strong>budgeted amount</strong> or the name of the budget.
              <br>
              <br>
              This can be done by clicking on the edit <i>(pencil)</i> icon which would redirect you (the user) to the
              appropriate edit budget page.
              <br>
              <br>
              <nuxt-link to="/budgets">#Budget</nuxt-link>
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
    title: 'Edit Budget',
  },
  layout: "default",
}
</script>
<style>
</style>