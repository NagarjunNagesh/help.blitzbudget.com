<template>
  <div class="wrapper blog-post">
    <div class="page-header page-header-small rellax-header">
      <div class="page-header-image" style="background-image: url('img/bg4.jpg')"></div>
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Add Wallet</h2>
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
              <h3 class="title">Add Wallet</h3>
              <br>
              <br>
              <img src="img/gifs/wallet/add-wallet.gif" alt="Add Wallet">
              <br>
              <br>
              <p>Adding Wallets can be very simple, All you have yo do is add the <strong>wallet currency</strong> and a
                name for the
                wallet and click on the Add Wallet Button.
              </p>
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
    title: 'Add Budgets',
  },
  layout: "default",
}
</script>
<style>
</style>