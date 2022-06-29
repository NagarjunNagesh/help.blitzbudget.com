<template>
  <div class="wrapper blog-post">
    <div class="page-header page-header-small rellax-header">
      <div class="page-header-image" style="background-image: url('img/bg17.jpg')"></div>
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Investment</h2>
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
              <h3 class="title">Investment</h3>
              <br>
              <br>
              <img src="img/gifs/investment/investment.gif" alt="Investment">
              <br>
              <br>
              Any investment can be added and viewed to the Blitzbudget. These investments can be seen by clicking the
              <i>"Add Investment"</i> in the dashboard page.
              <br>
              <br>
              This page can be used to view the invested capital and the current investment value.
              <br>
              <br>
              <i>Note - The current invested value can be updated by linking the <nuxt-link
                  to="/transactions/smart-link/investment">transaction and the investments.</nuxt-link></i>
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
    title: 'Investments',
  },
  layout: "default",
}
</script>
<style>
</style>