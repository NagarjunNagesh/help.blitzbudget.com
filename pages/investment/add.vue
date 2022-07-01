<template>
  <div class="wrapper blog-post">
    <div class="page-header page-header-small rellax-header">
      <div class="page-header-image" style="background-image: url('img/bg20.jpg')"></div>
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Add Investment</h2>
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
              <h3 class="title">Add Investment</h3>
              <br>
              <br>
              <img src="img/gifs/investment/add-investment.gif" alt="Add Investment">
              <br>
              <br>
              We provide the option to add the investment and imagine that this would provide a comprihensive option to
              analyse the financial portfolio of the user and how it has performed.
              <br>
              <br>
              An investment has three simple fields that could be added. <strong>Invested Capital</strong>,
              <strong>Actual value of the current </strong>
              <br>
              <br>
              <nuxt-link to="/investments">#Investment</nuxt-link>
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
    title: 'Add Investment',
  },
  layout: "default",
}
</script>
<style>
</style>